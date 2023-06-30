import React from "react";
import ContactUse from "./ContactUse";
import Validation from "./Validation";

const ContactForm = ({ handleSucessForm }) => {
  const { handleForm, handleValue, values, errors, form } = ContactUse(
    Validation,
    handleSucessForm
  );

  return (
    <div className="form-container">
      <form className="form" ref={form} onSubmit={handleForm}>
        <div className="input-container">
          <input
            type="name"
            name="name"
            placeholder="Name"
            onChange={handleValue}
            value={values.name}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleValue}
            value={values.email}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div className="input-container">
          <textarea
            name="message"
            onChange={handleValue}
            value={values.message}
            placeholder="Message"
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </div>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
};

export default ContactForm;
