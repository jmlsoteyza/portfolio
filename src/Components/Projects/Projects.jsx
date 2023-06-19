import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      className="Projects-container"
      key={"animatekey"}
      initial={{height: "auto", opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.125 }}
      style={{ position: "absolute", width: "99.5%" }}
    >
      <h1>This is projects page</h1>
    </motion.section>
  );
};

export default Projects;
