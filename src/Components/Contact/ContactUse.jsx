import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUse = (Validation, callback) => {
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    setSubmit(true);
  };

  const form = useRef();

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      emailjs
        .sendForm(
          "service_1fq0mf3",
          "template_malr1ki",
          form.current,
          "jliqo3oUnss48dWNg"
        )
        .then(
          (result) => {
            console.log(result.text);
            callback();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }, [errors]);

  return { handleForm, handleValue, values, errors, form };
};

export default ContactUse;
