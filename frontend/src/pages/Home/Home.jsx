import React from "react";
import styles from "./Home.module.css";
import HomeProfile from "../../images/mainProfile.png";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className={styles.home_main_cont}>
          <div className={styles.home_left_cont}>
            <h1 className={styles.home_t1}>Hello,</h1>
            <h1 className={styles.home_t1}>I'm Prasad Ghosh</h1>
            <h1 className={styles.home_t2}>A Fullstack Developer</h1>
            <div className={styles.social_links_cont}>
              <div className={styles.social_links}>
                <a href="" id={styles.linkedin_ic}>
                  <SlSocialLinkedin size={25} />
                </a>
                <a href="" id={styles.twitter_ic}>
                  <SlSocialTwitter size={25} />
                </a>
                <a href="" id={styles.github_ic}>
                  <SlSocialGithub size={23} />
                </a>
                <a href="" id={styles.insta_ic}>
                  <SlSocialInstagram size={23} />
                </a>
              </div>
              <div>
                <a href="">
                  <button className={styles.resume_btn}>Resume</button>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.home_profile_cont}>
            <img
              src={HomeProfile}
              alt="home-pofile"
              className={styles.home_profile}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
