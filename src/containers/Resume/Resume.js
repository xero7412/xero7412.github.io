import React, { Component } from "react";
import styles from "./Resume.module.scss";
import Experience from "./Experience/Experience";
import { withRouter } from "react-router";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";


class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                {/* ----------info--------- */}
                {/* <Experience/> */}

                <div className={styles.infoSection}>
                    <div className={styles.infoContent}>
                    <h2 className={styles.heading}>Hi, I'm Toshi Sharma</h2>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
                
                <Experience/>

                <Skills/>

                <Education/>



            </React.Fragment>
        )
    }
}

export default withRouter(Resume);