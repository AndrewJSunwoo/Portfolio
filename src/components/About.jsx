import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import vtlogo from "../assets/vtlogo.png";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[350px] w-full">
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
          className="w-20 h-20 object-contain"
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
            With nearly two years of internship experience under my belt, I'm
            not just fresh out of college - I'm ready to hit the ground running
            in the world of software development. My Virginia Tech CS degree
            equipped me with a strong foundation in the fundamentals, while my
            internship experiences fueled my passion for building the full stack
            from front to back. Java, Spring, Node.js, and CI/CD are my
            companions for crafting robust back-end solutions. React,
            JavaScript, and TypeScript bring interfaces to life with
            interactivity and style. MongoDB serves as the reliable data haven,
            while Terraform and Docker ensure streamlined infrastructure. And if
            the cloud's your canvas, I'm armed with AWS to make it happen. But
            beyond the tech stack, I bring a relentless learning spirit, a
            collaborative mindset, and a can-do attitude. Dive into my
            portfolio, explore my projects, and let's talk about how we can
            build something amazing together. 🙌
          </motion.p>
        </div>
        <div width={"450px"}>
          <img
            src={vtlogo}
            width={"350px"}
            style={{ marginTop: "90px", marginLeft: "20px" }}
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
