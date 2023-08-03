import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import vtlogo from "../assets/vtlogo.png";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] border-white border-2 "
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[37px]"
          >
            I'm a passionate full-stack developer with a B.S. degree in Computer
            Science from Virginia Tech. My expertise lies in the front-end,
            where I excel in React, HTML, CSS, JavaScript, and TypeScript, and
            on the back-end, I thrive with Node.js, Express, and Java. Databases
            like MongoDB and SQL are well within my comfort zone. Being a quick
            learner, I'm enthusiastic about collaborating with you to bring
            exceptional projects to life. Let's embark on this thrilling journey
            as a dynamic team and create something truly amazing together! 🙌
          </motion.p>
        </div>
        <div width={"450px"}>
          <img
            src={vtlogo}
            width={"350px"}
            style={{ marginTop: "45px", marginLeft: "20px" }}
          />
        </div>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
