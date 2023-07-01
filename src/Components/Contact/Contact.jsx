import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactSuccess from "./ContactSuccess";
import ContactIcons from "./ContactIcons";
import AboutLinesGradient from "../About/AboutLinesGradient";
import InfoLogo from "../InfoLogo";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSucessForm = () => {
    setSuccess(true);
  };

  return (
    <>
      <motion.section
        className="Contact-container"
        key={"animatekey"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{ position: "absolute", width: "99.5%" }}
      >
        <div className="Contact-inner_container">
          <div className="Contact-header">
            <h1>Contact.</h1>
            <AboutLinesGradient />
          </div>
          <div className="Contact-form">
            <ContactIcons />
            {!success ? (
              <ContactForm handleSucessForm={handleSucessForm} />
            ) : (
              <ContactSuccess />
            )}
          </div>
        </div>
      </motion.section>
      <InfoLogo />
    </>
  );
};

export default Contact;
