import React, { useRef } from 'react';
import cx from 'classnames';
import styles from './Experience.module.scss';
import 'aos/dist/aos.css';

const Experience = () => {
    const dotsRef = useRef(null);
    const moreRef = useRef(null);
    const btnRef = useRef(null);

    const myFunction = () => {
        var dots = dotsRef.current;
        var moreText = moreRef.current;
        var btnText = btnRef.current;

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "read more ⇲";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "read less ⇱";
            moreText.style.display = "inline";
        }
    }

    return (
        <div className={styles.bg}>
            <div className={cx(styles.pageContainer)}>
                <div className={cx(styles.heading)}>
                    experiences
                </div>
                <div>
                    <div className={cx(styles.card, "px-0 mt-5 mx-0")}>
                        <div className={cx(styles.cardContainerLeft)} data-aos="fade-down">
                            <div className={styles.expHeading}>Betterplace, Bangalore | June 2019 - Present</div>
                            <i>Software Development Engineer - 1</i>
                        </div>
                        <div className={cx(styles.cardContainerRight)}>
                            I started as one of the first few members of the platform team responsible for developing some of the complex core modules being used by all of the existing products. I was responsible for massive refactoring where I removed dead code and created a completely atomic component library. I later worked on multiple products and gained experience in bootstrapping things and taking them to production.
                            <br /><br />
                            Currently, I’m part of the ‘attend’ product and my day-to-day responsibility includes writing highly scalable and reusable code, doing peer reviews, participating in sprint meetings, risk callouts, and bridging the gap between product requirements and implementation.
                            <br /><br />
                            Key achievements:
                            <span ref={dotsRef}>&nbsp;</span><span ref={moreRef} className={styles.more}>
                                <br /><br />
                                1. Atomic Structure implementation - Platform
                                <br />
                                <ul>
                                    <li>Created ReactJS custom component library following atomic structure pattern.</li>
                                    <li>The entire application was divided into components based on atoms, molecules, organisms, and templates ensuring maximum code reusability.</li>
                                </ul>
                                <br />
                                2. Theming - Platform
                                <br />
                                <ul>
                                    <li>Introduced a centralized theme using SCSS consisting of font and styling variables.</li>
                                </ul>
                                <br />
                                3. User Authentication and Oauth integration - Identity
                                <br />
                                <ul>
                                    <li>Developed mobile-first user login/reset-password screens with OTP-based sign-in for our in-house IAM solution - Identity.</li>
                                    <li>Integrated Identity with all web applications and created a generic framework for user access management on the front-end.</li>
                                </ul>
                                <br />
                                4. Interactive Product Dashboards - Onboard/Verify
                                <br />
                                <ul>
                                    <li>Developed products dashboard showcasing various insights using D3JS charts.</li>
                                    <li>Introduced custom animations on top of those charts for better UX.</li>
                                </ul>
                                <br />
                                5. Backend - Onboard/Verify/Attend
                                <br />
                                <ul>
                                    <li>Started by writing CRUD APIs in Vert.x</li>
                                    <li>Wrote automation bots for business workflows using Python and selenium.</li>
                                    <li>Worked on features like bulk report download for over 200k plus employees using Kafka, NodeJS.</li>
                                </ul>
                                <br />
                            </span>
                            <button onClick={() => myFunction()} ref={btnRef} className={styles.btn}>read more ⇲</button>
                        </div>
                    </div>
                    <div className={cx(styles.card, "px-0 mt-5 mx-0")}>
                        <div className={cx(styles.cardContainerLeft)} data-aos="fade-down">
                            <div className={styles.expHeading}>Being, Bangalore | June 2020 </div>
                            <i>FreeLance developer</i>
                        </div>
                        <div className={cx(styles.cardContainerRight)}>
                            <ul>
                                <li>Created a static introductory website for the company.</li>
                                <li>Developed a serverless CMS solution for curating app data using React and Firebase.</li>
                                <li>Sharable webPages for in-app contents.</li>
                            </ul>
                            
                        </div>
                    </div>
                    <div className={cx(styles.card, "mt-5 mx-0")}>
                        <div className={cx(styles.cardContainerLeft)} data-aos="fade-down">
                            <div className={styles.expHeading}>Cognizant Technology Solutions, Pune | Feb 2019 - May 2019</div>
                            <i>Software development intern</i>
                        </div>
                        <div className={cx(styles.cardContainerRight)}>
                            Went through rigorous advanced java and various java libraries training for 3 months that contained daily coding practices and weekly assessments and one final assessment to pass the training program.
                            <br /><br/>
                            As part of final assessment, developed a training management system consisting of an online portal where teachers can sign up and create courses along with quizzes. Students can sign up, browse courses and give a quiz post-learning. Used HTML, CSS, Bootstrap, Java Servlet, JSP, JDBC and Oracle 11g.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Experience;