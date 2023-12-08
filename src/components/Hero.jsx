import { motion } from "framer-motion";

import { styles } from "../styles";
import profile from "../assets/prof.png";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className="relative mx-auto"
        style={{
          maxWidth: "500px",
          width: "100%",
          top: "160px",
        }}
      >
        <img
          src={profile}
          className={`block w-full h-auto ${styles.paddingX}`}
        />
      </div>
      <div
        className={`absolute inset-0 top-[570px]  max-w-3xl mx-auto ${styles.paddingX} flex justify-center flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#F9C406]">Andrew</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 flex justify-center`}>
            Full-Stack | Software | Mobile | Cloud
          </p>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
