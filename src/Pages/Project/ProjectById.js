import { faCode, faGlobe, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import LightRoomComponent from "react-lightbox-gallery";
import { Link, useParams } from "react-router-dom";

const ProjectById = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    const projects = [
      {
        id: 1,
        name: "InterTools",
        img: "https://i.ibb.co/CwD0NZ8/Screenshot-8.png",
        description:
          "This is a machinery ordering website where users can order machineries. Users can login and see their orders in dashboard. User can update their profile. User can add reviews for our site.",
        clientCode: "https://github.com/AshikurRahmanMunna/intertools-client",
        serverCode: "https://github.com/AshikurRahmanMunna/intertools-server",
        liveSite: "https://intertools-1402d.firebaseapp.com/",
        technologies: [
          "React JS",
          "Node JS",
          "Express Js",
          "MongoDB",
          "React Router",
          "Tailwind CSS",
          "daisy UI ",
          "Firebase",
          "React Firebase Hook",
          "JWT",
          "Heroku",
          "React Query",
          "React Countup",
          "React Rating",
          "React Visibility Sensor",
        ],
        imgSet: [
          "https://i.ibb.co/6nGThbh/Screenshot-22.png",
          "https://i.ibb.co/dbZ6JSq/Screenshot-23.png",
          "https://i.ibb.co/7KBmQsG/Screenshot-24.png",
          "https://i.ibb.co/ZBdqzL9/Screenshot-25.png",
          "https://i.ibb.co/7tQX8Yw/Screenshot-26.png",
          "https://i.ibb.co/TTD08RV/Screenshot-27.png",
          "https://i.ibb.co/4gzTbXF/Screenshot-28.png",
          "https://i.ibb.co/QbQgr9Q/Screenshot-14.png",
          "https://i.ibb.co/Jcr6rLt/Screenshot-15.png",
          "https://i.ibb.co/7v8Zpyq/Screenshot-16.png",
          "https://i.ibb.co/nPRYtdx/Screenshot-17.png",
          "https://i.ibb.co/GdJWkY5/Screenshot-18.png",
          "https://i.ibb.co/vhyFSF0/Screenshot-19.png",
          "https://i.ibb.co/vsJ9FWT/Screenshot-20.png",
          "https://i.ibb.co/zN6VrjY/Screenshot-21.png",
          "https://i.ibb.co/Qnt9drx/Screenshot-61.png",
          "https://i.ibb.co/JKdtLJx/Screenshot-62.png",
        ],
      },
      {
        id: 2,
        name: "GroInventory",
        img: "https://i.ibb.co/phFRxM3/Screenshot-5.png",
        description:
          "This is a inventory management website. This website can manage inventory. You can add a item to the inventory. Manage all items. Stock and restock items. You can login. You can add your review about this website also.",
        clientCode: "https://github.com/AshikurRahmanMunna/groinventory-client",
        serverCode: "https://github.com/AshikurRahmanMunna/groinventory-server",
        liveSite: "https://groinventoy.web.app/",
        technologies: [
          "React JS",
          "Node JS",
          "Express Js",
          "MongoDB",
          "React Router",
          "Bootstrap",
          "React-Bootstrap",
          "React Toastify",
          "Firebase",
          "React Firebase Hook",
          "JWT",
          "Heroku",
        ],
        imgSet: [
          "https://i.ibb.co/yRrFfKN/Screenshot-58.png",
          "https://i.ibb.co/yNfZKK7/Screenshot-29.png",
          "https://i.ibb.co/1qKVhWC/Screenshot-30.png",
          "https://i.ibb.co/SfytB77/Screenshot-32.png",
          "https://i.ibb.co/tmTpsLC/Screenshot-35.png",
          "https://i.ibb.co/5rBN7Qf/Screenshot-36.png",
          "https://i.ibb.co/dcxY4LB/Screenshot-37.png",
          "https://i.ibb.co/M74KCQK/Screenshot-38.png",
          "https://i.ibb.co/Y7gbpQK/Screenshot-53.png",
          "https://i.ibb.co/7VS9kTh/Screenshot-54.png",
          "https://i.ibb.co/JjXLFQL/Screenshot-55.png",
          "https://i.ibb.co/jJCMhys/Screenshot-56.png",
          "https://i.ibb.co/Y24wC2J/Screenshot-57.png",
        ],
      },
      {
        id: 3,
        name: "Cloth Analysis",
        img: "https://i.ibb.co/JpQ4XVv/Screenshot-9.png",
        description:
          "This is a cloth analysis website. There is some charts and some reviews",
        clientCode: "https://github.com/AshikurRahmanMunna/product-analysis",
        serverCode: null,
        liveSite: "https://cloth-analysis.netlify.app/",
        technologies: [" React", "React Router", "Tailwind", "Recharts"],
        imgSet: [
          "https://i.ibb.co/s2snMxs/Screenshot-64.png",
          "https://i.ibb.co/P6DKw3Q/Screenshot-65.png",
          "https://i.ibb.co/4sK34cs/Screenshot-66.png",
        ],
      },
      {
        id: 4,
        name: "Lucky One",
        img: "https://i.ibb.co/hXQxzh5/Screenshot-75.png",
        description:
          "This is a website to add cars to the cart. And then the website can choose a random item for you",
        clientCode: "https://github.com/AshikurRahmanMunna/lucky-one",
        serverCode: null,
        liveSite: "https://lucky-one-munna.netlify.app/",
        technologies: [" React", "Bootstrap", "React-Bootstrap"],
        imgSet: [
          "https://i.ibb.co/CKkmcbb/Screenshot-76.png",
          "https://i.ibb.co/s210M41/Screenshot-74.png",
        ],
      },
      {
        id: 5,
        name: "Smartphone Master",
        img: "https://i.ibb.co/bWq6vc5/Screenshot-77.png",
        description:
          "This is a website to search smartphones. You can also see the smartphone details",
        clientCode: "https://github.com/AshikurRahmanMunna/smartphone-master",
        serverCode: null,
        liveSite: "https://smartphone-master.netlify.app/",
        technologies: [" React", "Bootstrap", "React-Bootstrap"],
        imgSet: ["https://i.ibb.co/W5G48nm/Screenshot-78.png"],
      },
    ];

    setProject(projects.find((p) => p.id === parseInt(id)));
  }, [id]);
  const {
    name,
    img,
    description,
    technologies,
    clientCode,
    serverCode,
    liveSite,
    imgSet,
  } = project;

  return (
    <div>
      <div className="min-h-screen container mx-auto lg:px-12 flex lg:flex-row flex-col items-center lg:mt-0 mt-28 justify-center">
        <div className="flex-1 lg:mx-0 mx-6 lg:mb-0 mb-6">
          <img
            src={img}
            className="w-full h-auto shadow-lg rounded-md"
            alt={name}
          />
          <div className="mt-4">
            {clientCode && (
              <a
                rel="noopener noreferrer"
                target={"_blank"}
                href={clientCode}
                className="btn btn-outline mr-4 btn-primary"
              >
                Client Code <FontAwesomeIcon className="ml-2" icon={faCode} />
              </a>
            )}
            {serverCode && (
              <a
                rel="noopener noreferrer"
                target={"_blank"}
                href={serverCode}
                className="btn btn-outline mr-4 btn-primary"
              >
                Server Code <FontAwesomeIcon className="ml-2" icon={faServer} />
              </a>
            )}
            {liveSite && (
              <a
                rel="noopener noreferrer"
                target={"_blank"}
                href={liveSite}
                className="btn btn-outline mr-4 btn-primary"
              >
                Live Site <FontAwesomeIcon className="ml-2" icon={faGlobe} />
              </a>
            )}
          </div>
        </div>
        <div className="flex-1 ml-8">
          <h2 className="text-5xl text-primary mb-2 font-poppins">{name}</h2>
          <p className="w-5/6 mb-5">{description}</p>
          <h4 className="text-green-500 text-2xl mb-3 font-poppins">
            Technologies Used
          </h4>
          <div className="flex flex-wrap">
            {technologies?.map((t) => (
              <div className="p-1 mr-3 mb-3 rounded-sm bg-gray-700 text-white cursor-pointer">
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-3xl text-center font-poppins mb-4 text-primary">
          Project Screenshots
        </h3>
        <div className="grid grid-cols-2 px-6 lg:grid-cols-5 gap-3 container mx-auto lg:px-12">
          {imgSet?.map((img) => (
            <img src={img} alt="screenshot" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectById;
