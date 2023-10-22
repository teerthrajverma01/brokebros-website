import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

import classes from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container">
        <div className={classes.experienceContainer}>
          <div className={classes.experienceFrontend}>
            <h3>Frontend Development</h3>
            <div className={classes.experienceContent}>
              <article className={classes.experienceDetails}>
                <BsPatchCheckFill className={classes.experienceDetails_icons} />
                <div>
                  <h4>HTML</h4>
                  <small className="textLight">Experienced</small>
                </div>
              </article>
              <article className={classes.experienceDetails}>
                <BsPatchCheckFill className={classes.experienceDetails_icons} />
                <div>
                  <h4>CSS</h4>
                  <small className="textLight">Intermediate</small>
                </div>
              </article>
              <article className={classes.experienceDetails}>
                <BsPatchCheckFill className={classes.experienceDetails_icons} />
                <div>
                  <h4>Javscript</h4>
                  <small className="textLight">Experienced</small>
                </div>
              </article>
              <article className={classes.experienceDetails}>
                <BsPatchCheckFill className={classes.experienceDetails_icons} />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="textLight">Experienced</small>
                </div>
              </article>
              <article className={classes.experienceDetails}>
                <BsPatchCheckFill className={classes.experienceDetails_icons} />
                <div>
                  <h4>Tailwind</h4>
                  <small className="textLight">Experienced</small>
                </div>
              </article>
              <article className={classes.experienceDetails}>
                <BsPatchCheckFill className={classes.experienceDetails_icons} />
                <div>
                  <h4>React</h4>
                  <small className="textLight">Experienced</small>
                </div>
              </article>
            </div>
          </div>
          {/* --------------------End of Frontend-------------- */}
          <div className={classes.experienceBackend}>
            <h3>Backend Development</h3>
            <div className={classes.experienceContent}>
              <article className={classes.experienceDetails}>
                <BsPatchCheckFill className={classes.experienceDetails_icons} />
                <div>
                  <h4>Nodejs</h4>
                  <small className="textLight">Experienced</small>
                </div>
              </article>
              <article className={classes.experienceDetails}>
                <BsPatchCheckFill className={classes.experienceDetails_icons} />
                <div>
                  <h4>MongoDB</h4>
                  <small className="textLight">Intermediate</small>
                </div>
              </article>
              <article className={classes.experienceDetails}>
                <BsPatchCheckFill className={classes.experienceDetails_icons} />
                <div>
                  <h4>PHP</h4>
                  <small className="textLight">Intermediate</small>
                </div>
              </article>
              <article className={classes.experienceDetails}>
                <BsPatchCheckFill className={classes.experienceDetails_icons} />
                <div>
                  <h4>MySQL</h4>
                  <small className="textLight">Basic</small>
                </div>
              </article>
              <article className={classes.experienceDetails}>
                <BsPatchCheckFill className={classes.experienceDetails_icons} />
                <div>
                  <h4>Python</h4>
                  <small className="textLight">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
