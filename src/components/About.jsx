import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import vtlogo from "../assets/vtlogo.png";

const ServiceCard = ({ index, title, icon, url }) => (
  <Tilt className="xs:w-[550px] w-full">
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
        <a href={url}>
          <img src={icon} alt="web-development" width={190} />
        </a>
        <h3 className="text-white text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[37px]"
          >
            Hey✋ This is your friendly neighborhood full-stack dev, fueled by a
            Virginia Tech CS degree and a passion for building web applications.
            I juggle both front-end and back-end with ease, and my AWS Certified
            Developer - Associate badge means I'm no stranger to the cloud. ☁️
            Currently, I'm the Founding Engineer at HashedTokens, where I'm
            building an OTP SaaS platform that changes the game for secure
            document and link sharing. If you're looking for a coding buddy who
            loves turning ideas into reality, let's connect! We can geek out
            over APIs, build something awesome, or just chat about the latest
            tech trends. The possibilities are endless, and the coffee's always
            on. ☕️
          </motion.p>
        </div>
        <div width={"450px"}>
          <img
            src={vtlogo}
            width={"350px"}
            style={{ marginTop: "60px", marginLeft: "20px" }}
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
