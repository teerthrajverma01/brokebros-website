import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import classes from "./About.module.css";
import ME from "../../assets/me-about.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container">
        <div className={classes.aboutContainer}>
          <div className={classes.aboutMe}>
            <img src={ME} alt="about image" className={classes.aboutMe_image} />
          </div>

          <div className={classes.aboutContent}>
            <div className={classes.aboutCards}>
              <article className={classes.aboutCard}>
                <FaAward className={classes.aboutIcon} />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
              <article className={classes.aboutCard}>
                <FiUsers className={classes.aboutIcon} />
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>
              <article className={classes.aboutCard}>
                <VscFolderLibrary className={classes.aboutIcon} />
                <h5>Projects</h5>
                <small>80+ Completed Projects</small>
              </article>
            </div>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nemo
              similique modi ab ad beatae illo sint accusamus perferendis rerum
              cum incidunt, natus nisi dolorum, at eveniet, aliquid harum
              numquam.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
