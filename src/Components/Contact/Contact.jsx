import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="Contact-container"
      initial={{ opacity: 0 }}
      key={"animatekey"}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.125 }}
      style={{ position: "absolute", width: "99.5%" }}
    >
      <h1>This is Contacts</h1>
    </motion.section>
  );
};

export default Contact;
