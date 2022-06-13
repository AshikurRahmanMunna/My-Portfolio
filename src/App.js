import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import ProjectById from "./Pages/Project/ProjectById";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project/:id" element={<ProjectById />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
