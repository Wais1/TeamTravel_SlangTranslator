import {useState, useEffect} from 'react'

function UserInput({askQuestion}) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
      setText(e.target.value)
      // Call askQuestion within room component, send to server
      askQuestion(e.target.value)
    }

  // Clear questions
  const clearQuestions = () => setText('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {

    } else {
      // Call askQuestion within room component, send to server
      askQuestion(text)
        setText("");
      }
  };
  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                  placeholder="Translate a slang text"
                  value={text}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <div>
          <button
            onClick={clearQuestions}
            className="btn btn-ghost btn-lg"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserInput;
