import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Room from "./pages/Room";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <> 
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className='container mx-auto px-3 pb-12'>
            {/*Missing switch */}
            <Routes>
              <Route path='/' element={<Room />} />
              <Route path='/room/:roomCode' element={<Room />} />
              <Route path='/about' element={<About />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>

      <ToastContainer theme="dark"/>
      </>
  );
}

export default App;
