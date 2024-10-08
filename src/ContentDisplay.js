import React, { useState } from "react";

const ContentDisplay = () => {
  const [selectedTab, setSelectedTab] = useState("education");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    if (selectedTab === "education") {
    }
  };

  let content = "";

  if (selectedTab === "education") {
    content = (
      <div>
        I completed my Bachelor of Science in Physics from the University of
        Nottingham in 2023. During my academic journey, I gained a strong
        foundation in complex calculus, mathematical modelling, and programming
        fundamentals.
        <br />
        <br />I also had the opportunity to work on several exciting projects.
        My education has equipped me with the toolbox to transition into the
        world of tech and I am excited to improve my ability to code and build
        software!
      </div>
    );
  } else if (selectedTab === "projects") {
    content = (
      <div>
        Throughout my academic and personal journey pursuing programming, I have
        engaged in various projects that helped me develop my skills and
        intuition. Some projects that I have created are:
        <br />
        <br />
        <strong>Cellular Automata of Traffic:</strong> Modelled flow of traffic
        on a single lane road in a loop to see how traffic evolves over time
        with different rules for different traffic scenarios.
        <br />
        <br />
        <strong>Lunar Lander game:</strong> A lunar lander game made using
        matplotlib to make an interactive GUI
        <br />
        <br />
        This website too! I needed a starter project for React so I made this
        website. These projects have each been challenging in their own way and
        helped me grow quite a bit!
      </div>
    );
  } else if (selectedTab === "about") {
    content = (
      <div>
        I'm 22 years old, and enjoy hiking, cooking, and Brazilian jiu-jitsu to
        name a few of my hobbies.
        <br />
        <br />
        I've recently been interested in philosophy, so I read some books on
        stoicism. I'm still very much in love with Physics so I'd like to start
        self studying to keep in touch.
        <br />
        <br />
        For most of my degree I didn't like quantum mechanics or particle
        physics but during my final year I took some unbelievable modules on
        theoretical particle physics and symmetry in physics which completely
        changed my mind on the subjects so now I'm definitely a particle
        physicist.
        <br />
        <br />I produce music sometimes, you can find my SoundCloud below. I've
        been listening to jungle recently so you might hear that soon. I'm a
        gamer too, some of my favourite games are League of Legends, Ghost of
        Tsushima and Katana Zero.
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col mx-auto bg-secondary-900 w-5/12 text-white shadow-xl rounded-md font-red-hat pb-8 px-2 border-2 border-red-950">
        <div className="flex justify-around p-6">
          <div
            className={`text-2xl font-semibold hover:bg-gray-500 rounded-md ${
              selectedTab === "education" && "bg-secondary-500"
            }`}
          >
            <button
              className="rounded-xl py-1 px-4"
              onClick={() => handleTabClick("education")}
            >
              Education 👨‍🎓
            </button>
          </div>
          <div
            className={` text-2xl font-semibold hover:bg-gray-500 rounded-md ${
              selectedTab === "projects" && "bg-secondary-500"
            }`}
          >
            <button
              className="rounded-xl py-1 px-4"
              onClick={() => handleTabClick("projects")}
            >
              Projects 👨‍💻
            </button>
          </div>
          <div
            className={`text-2xl font-semibold hover:bg-gray-500 rounded-md ${
              selectedTab === "about" && "bg-secondary-500"
            }`}
          >
            <button
              className="rounded-xl py-1 px-4"
              onClick={() => handleTabClick("about")}
            >
              About me 👨‍🔬
            </button>
          </div>
        </div>
        <div className="p-2 content-text-left">{content}</div>
      </div>
    </div>
  );
};

export default ContentDisplay;
