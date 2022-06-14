import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import ProjectById from "./Pages/Project/ProjectById";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import ParticlesAnimation from "./components/Particles";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return(
    <div>
      <Navbar></Navbar>
      <ParticlesAnimation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/project/:id" element={<ProjectById />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
