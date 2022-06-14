import React from "react";
import img from "../../assets/photos/munna-2.jpg";

const AboutMe = () => {
  return (
    <div className="min-h-screen flex items-center container lg:px-12 px-6 flex-col lg:flex-row-reverse">
      <div>
        <h2 className="text-center text-5xl text-white mb-6 font-bold">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="flex items-center justify-center">
          <div className="flex-1 mr-12">
            <img
              className="w-3/6 mx-auto block rounded-2xl"
              src={img}
              alt="munna"
            />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-5xl text-primary font-raleway font-bold">
              Ashikur Rahman Munna
            </h2>
            <p className="text-gray-400">
              Full Stack Web Developer || React Developer || MERN Stack
              Developer
            </p>
            <p className="mt-5">
              Hi, I am Ashikur Rahman Munna. A junior web developer. I am
              learning web development for more than 6 months. To be a web
              developer is my aim in life. I am dedicated to my work. I have too
              many projects done. Some of them is showed in the top project
              section.
            </p>
            <h4 className="text-3xl text-accent mt-4">Development Skills</h4>
            <p className="text-gray-400">
              HTML5, CSS3, Bootstrap5, Tailwind CSS, JavaScript, GitHub, Heroku,
              Netlify, React JS, React Query, Firebase, Node JS, MongoDb,
              Express JS etc.
            </p>
            <h4 className="text-3xl text-accent mt-4">Other Skills</h4>
            <p className="text-gray-400">
              Adobe PhotoShop, Adobe Illustrator, Microsoft Excel, Microsoft Excel Formulas, Microsoft Excel Macros, AutoCAD 2D
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
