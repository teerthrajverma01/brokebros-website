import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import classes from "./Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      "service_31q9wjg",
      "template_ovpyqf6",
      form.current,
      "2VTepF7X0HWluLaX0"
    );

    event.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={classes.container}>
        <div className={classes.contactContainer}>
          <div className={classes.contactOptions}>
            <article className={classes.contactOption}>
              <MdOutlineEmail className={classes.contactOption_icon} />
              <h4>Email</h4>
              <h5>brokebros404@gmail.com</h5>
              <a href="mailto:brokebros404@gmail.com">Send a message</a>
            </article>
            <article className={classes.contactOption}>
              <BsDiscord className={classes.contactOption_icon} />
              <h4>Discord</h4>
              <h5>bharat9614</h5>
              <a href="https://discord.com/users/bharat9614" target="_blank">
                Send a message
              </a>
            </article>
            <article className={classes.contactOption}>
              <BsTwitter className={classes.contactOption_icon} />
              <h4>Email</h4>
              <h5>Twitter</h5>
              <a href="https://twitter.com/BharatB40179654" target="_blank">
                Send a message
              </a>
            </article>
          </div>

          {/*------------------ END OF CONTACT OPTIONS --------------*/}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
