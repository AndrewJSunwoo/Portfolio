import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { skills } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>My Skills.</h2>
      </motion.div>
      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className="block-container w-20 h-20" key={skill.name}>
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex flex-col justify-center items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain mb-2"
              />
              <h1>{skill.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
