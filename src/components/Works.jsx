import React from "react";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import {
  cloudProjects,
  devOpProjects,
  mobileProjects,
  softwareProjects,
  webAppProjects,
} from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_links,
  website_link,
}) => {
  return (
    <div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border-white border-2"
      >
        <div
          className="relative w-full h-[230px]"
          onClick={() =>
            website_link !== "" && window.open(website_link, "_blank")
          }
          style={{ cursor: website_link !== "" && "pointer" }}
        >
          <img
            src={image}
            alt="project_image"
            className="w-full h-full rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="flex flex-row">
              {source_code_links.map((link, index) => (
                <div
                  key={index}
                  onClick={() => window.open(link, "_blank")}
                  className="black-gradient ml-3 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[15px]`}>
              ⚪{tag.name}
            </p>
          ))}
        </div>

        <div className="mt-1">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
        >
          I'm excited to share my projects with you. These examples truly
          showcase my skills and experience through real-world work. For each
          project, I've included a brief description and links to the GitHub
          repository or demo, so you can explore them easily. Feel free to check
          them out and let me know what you think! 😊
        </p>
      </div>

      <div className="mt-10">
        <h2 className={`${styles.projectHeadText}`}>Full Stack Development</h2>
        <h3>
          These projects are fueling up for deployment 🚀 - stay tuned for their
          big debut.
        </h3>
      </div>
      <div className="mt-5 flex flex-wrap gap-7">
        {webAppProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="mt-10">
        <h2 className={`${styles.projectHeadText}`}>DevOps</h2>
      </div>
      <div className="mt-5 flex flex-wrap gap-7">
        {devOpProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="mt-10">
        <h2 className={`${styles.projectHeadText}`}>Cloud Computing</h2>
      </div>
      <div className="mt-5 flex flex-wrap gap-7">
        {cloudProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="mt-10">
        <h2 className={`${styles.projectHeadText}`}>Software</h2>
      </div>
      <div className="mt-5 flex flex-wrap gap-7">
        {softwareProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="mt-10">
        <h2 className={`${styles.projectHeadText}`}>Mobile Application</h2>
      </div>
      <div className="mt-5 flex flex-wrap gap-7">
        {mobileProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
