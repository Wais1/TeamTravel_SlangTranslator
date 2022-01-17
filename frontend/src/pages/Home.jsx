// import UserResults from "../components/users/UserResults"
// import UserSearch from "../components/users/UserSearch"
import { FaGraduationCap } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [roomId, setRoomId] = useState('');
  let navigate = useNavigate();

  const handleChange = (e) => setRoomId(e.target.value);
  const handleSubmit = () => {
    if (roomId === "") {
    } else {
      //   dispatch({ type: "SET_LOADING" });
      // Search for users
      //   const users = await searchUsers(text);
      //   dispatch({ type: "GET_USERS", payload: users });
      
      // navigate(`/room/${roomId}`);
      // Temporary fix to room cant reconnect socket issue. manually load to trigger connect oscket
    }
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-gray-800 p-10 rounded-md">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Enter ClassRoom
            </h2>
            <p className="mt-2 text-center text-sm text-gray-300">
              Or{" "}
              <Link to={'/about'}  className="font-medium text-blue-400 hover:text-blue-300">
                See what we're about
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  onSubmit={(e) => {e.preventDefault();}}
                  id="email-address"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                  onChange={handleChange}
                  placeholder="Class code"
                />
              </div>
            </div>
            <div>
              {/* Link to the room */}

              
              {/* Temporary fix to link, manual load room to reconnect socket */}
              <a href={`/room/${roomId}`}>
              <div
                // onClick={handleSubmit}
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FaGraduationCap
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                
                
                 Enter Room
                
                
              </div>
              </a>
              
              <div className="mt-5 text-center text-sm text-gray-300">

              {/* Link to new room. Does not check if room is taken, and does not check if not taken. Same functions, depends on random number */}
              {/* <Link to={`/room/${Math.floor(Math.random() * 9999)}`}  className="font-medium text-indigo-300 text-base hover:text-indigo-200"> Or Create a Room</Link> */}
              {/* Temporary fix to fixing can't reconnect bug. might need socket context refactor. for now load page manually to retrigger socket connection */}
              <a href={`/room/${Math.floor(Math.random() * 9999)}`}  className="font-medium text-indigo-300 text-base hover:text-indigo-200">Or Create a Room</a>
              </div>

              

              {/*              
              <Link className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' to={`/room/${roomId}`}>
                
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FaGraduationCap
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Enter Room</Link> */}
            </div>
          </form>
        </div>
      </div>

      {/* <UserSearch />
            <UserResults></UserResults> */}
    </>
  );
}

export default Home;
