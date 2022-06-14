import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Home";
import ProjectById from "./Pages/Project/ProjectById";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div>
      <Navbar></Navbar>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 20,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project/:id" element={<ProjectById />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
