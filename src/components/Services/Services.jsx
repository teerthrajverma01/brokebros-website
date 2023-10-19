import React from "react";
import { BiCheck } from "react-icons/bi";

import classes from "./Services.module.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container">
        <div className={classes.servicesContainer}>
          <article className={classes.service}>
            <div className={classes.serviceHead}>
              <h3>UI/UX Design</h3>
            </div>

            <ul className={classes.serviceList}>
              <li>
                <BiCheck className={classes.serviceList_icon} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className={classes.serviceList_icon} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className={classes.serviceList_icon} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className={classes.serviceList_icon} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className={classes.serviceList_icon} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
          {/* ------------------------End of UI/UX---------------- */}

          <article className={classes.service}>
            <div className={classes.serviceHead}>
              <h3>UI/UX Design</h3>
            </div>

            <ul className={classes.serviceList}>
              <li>
                <BiCheck className={classes.serviceList_icon} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className={classes.serviceList_icon} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className={classes.serviceList_icon} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className={classes.serviceList_icon} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className={classes.serviceList_icon} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className={classes.serviceList_icon} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
          {/* ------------------------End of Web Development--------------- */}

          <article className={classes.service}>
            <div className={classes.serviceHead}>
              <h3>Content Creation</h3>
            </div>

            <ul className={classes.serviceList}>
              <li>
                <BiCheck className={classes.serviceList_icon} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className={classes.serviceList_icon} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className={classes.serviceList_icon} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className={classes.serviceList_icon} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className={classes.serviceList_icon} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
          {/* ------------------------End of Content Creation---------------- */}
        </div>
      </div>
    </section>
  );
};

export default Services;
