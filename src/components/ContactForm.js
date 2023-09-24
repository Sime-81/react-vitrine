import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(process.env.ID);

const ContactForm = () => {
  const form = useRef();
  const formMess = document.querySelector(".form-message");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ngo8r3l",
        "template_h38ihuc",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          form.current.reset();
          formMess.innerHTML = "<p class='success'>Email envoyer !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);

          formMess.innerHTML =
            "<p class='error'>Une erreur est survenue, veuillez réasséyer !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>contacez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" required id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm;
