import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="mx-auto max-w-screen-xl h-screen flex flex-col justify-center snap-center"
    >
      <div className="text-gray-900 font-semibold text-4xl text-center font-mono">
        Hey, I'm <span className="text-purple-700 whitespace-nowrap">Rahul</span>.
      </div>
      <div className="flex flex-col px-10 py-4 text-center font-mono" id="home">
        <span>Currently looking for a job as a <span className="text-purple-700 whitespace-nowrap">Developer</span>. Stack don't matter to me, as I'm <span className="text-purple-700 whitespace-nowrap">happy to learn</span> and
        expand my mind. Because it's the learning and trying out part that's <span className="text-purple-700 whitespace-nowrap">fun
        for me.</span> Check below for more.</span>
      </div>
    </div>
  );
};

export default Home;
