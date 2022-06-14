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
import { useEffect } from "react";
import ToTop from "./components/ToTop";
import AboutMe from "./Pages/Home/AboutMe";

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0 , 5);
    }, 300)
  }, [])
  return(
    <div>
      <Navbar></Navbar>
      <ParticlesAnimation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutMe />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/project/:id" element={<ProjectById />}></Route>
      </Routes>
      <ToTop></ToTop>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
