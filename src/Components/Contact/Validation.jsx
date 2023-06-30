export default function Validation(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Please fill up the name";
  }

  if (!values.email) {
    errors.email = "Please fill up the email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.message) {
    errors.message = "Please send a message";
  }

  return errors;
}
