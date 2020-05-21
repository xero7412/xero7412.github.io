import React, { Component } from "react";
import styles from "./Skills.module.scss";
// import cx from "classnames";
import SkillsScale from "../../../components/SkillsScale/SkillsScale"

class Skills extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={styles.skillsSection}>
                    <div className={styles.skillsContent}>
                        <br />
                        <h2 className={styles.sectionHead}>SKILLS & TECH</h2>
                        <div className={"row mt-5 "} style={{ textAlign: "center" }} >
                            <div className="col-sm-4" >
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={5} /></div>
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={2} /></div>
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={5} /></div>
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={3} /></div>
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={5} /></div>

                            </div>
                            <div className="col-sm-4" >
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={1} /></div>
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={5} /></div>
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={2} /></div>
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={5} /></div>
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={2} /></div>
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={3} /></div>
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={4} /></div>
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={2} /></div>

                            </div>
                            <div className="col-sm-4" >
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={5} /></div>
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={2} /></div>
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={1} /></div>
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={4} /></div>
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={2} /></div>
                                <div className={styles.displayFlex}><div>classNa mereactre</div> <SkillsScale count={4} /></div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Skills;