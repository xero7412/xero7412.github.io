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
                            <div className={styles.expHeading}>Jupiter, Bangalore | April 2022 - Present</div>
                            <i>Software Development Engineer - 2</i>
                        </div>
                        <div className={cx(styles.cardContainerRight)}>
                            <span style={{ textDecoration: 'underline' }}>Insurance platform</span>
                            <ul>

                                <li>Led technical execution for the Insurance pod, building a modular component-driven architecture for dynamic
                                    forms, configurable quotation flows, and product onboarding journeys</li>
                                <li>Decreased vendor integration time from 7 days to under 1 day, while scaling to 5+ providers and serving 2,000+
                                    monthly policies</li>
                                <li>Created a frontend abstraction layer to normalize vendor-specific schemas into a unified contract.</li>

                            </ul>
                            <span style={{ textDecoration: 'underline' }}>Transactions Platform</span>
                            <ul>
                                <li>Architected a full-stack transaction module serving 50,000+ daily users across 15+ payment products</li>
                                <li>Planned and executed a Backend for Frontend (BFF) layer using NestJS and GraphQL to aggregate 8+ downstream
                                    backend services, simplifying frontend integrations</li>
                                <li>Built a reusable modular component registry capable of powering any combination of UIs</li>
                                <li>Lowered code duplication by 70%, improved load times, and cut new product integration time from days to a few
                                    hours</li>
                            </ul>
                            <span style={{ textDecoration: 'underline' }}>Personal Finance Management (PFM)</span>
                            <ul>
                                <li>Built a data-heavy insights module handling 60,000+ transactions, reducing load time to under 1 second, an 80%
                                    improvement Applied MMKV caching, virtualized lists, and an in-house charting library, improving performance
                                    on low-end devices and reducing crashes by 80%</li>
                                <li>Built 'Jupiter Wrapped' with complex WebView to React Native sync, audio lifecycle across story transitions, and a
                                    cross-device performance strategy</li>
                                <li>Scaled the PFM product to a 400% increase in monthly active users with features including credit card tracking,
                                    monthly recap, and budgeting</li>
                            </ul>
                            <span style={{ textDecoration: 'underline' }}>Core Platform</span>
                            <ul>
                                <li>Introduced an AI-assisted UI generation workflow using Figma MCP and Claude Code, reducing component
                                    development from ~2 days to 30 minutes; sole owner of architecture and context optimization strategy to
                                    prevent LLM context exhaustion on large design systems
                                </li>
                                <li>
                                    Introduced Over-the-Air (OTA) app updates, reducing internal QA cycle time from 4-5 hours to 30 minutes and
                                    eliminating manual APK redistribution; extended to production, enabling weekly releases and same-day hotfix
                                    deployment, cutting go-to-market time by 2-3 days per release
                                </li>
                                <li>
                                    Built end-to-end (E2E) mobile testing infrastructure with CI and device farm integration, enabling the QA team to
                                    author 1,500+ visual regression tests and achieving 60% coverage, reducing sanity-test cycles from 3 days to 6 hrs</li><li>
                                    Led app performance optimization initiatives including contributions to the React Native 0.78 upgrade:
                                    tree-shaking, profiled component rendering, removed unused dependencies, decreased bundle size by ~3MB,
                                    and enabled new React Native architecture support
                                </li>
                            </ul>
                            <span style={{ textDecoration: 'underline' }}>Security & Native Integrations</span>
                            <ul>
                                <li>
                                    Built an in-house biometric authentication module in Kotlin using Android Keystore with hardware-backed key
                                    generation and HMAC-SHA256 encryption
                                </li>
                                <li>
                                    Developed a reusable React Native bridge responsible for secure authentication flows for payments and app unlock
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx(styles.card, "px-0 mt-5 mx-0")}>
                        <div className={cx(styles.cardContainerLeft)} data-aos="fade-down">
                            <div className={styles.expHeading}>Betterplace, Bangalore | June 2019 - March 2022</div>
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
                            <br /><br />
                            As part of final assessment, developed a training management system consisting of an online portal where teachers can sign up and create courses along with quizzes. Students can sign up, browse courses and give a quiz post-learning. Used HTML, CSS, Bootstrap, Java Servlet, JSP, JDBC and Oracle 11g.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Experience;