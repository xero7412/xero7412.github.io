import React, { Component } from "react";
import styles from "./Experience.module.scss";
import cx from "classnames";

class Experience extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={styles.expSection} >
                    <div className={styles.expContent}>
                        <br />
                        <h2 className={styles.sectionHead}>EXPERIENCE</h2>
                        <div className={"mt-5"}>
                            <div className="row px-0 mx-0">
                                <div className="col-lg-12 px-0">
                                    <ul className={styles.timeline}>
                                        <li>
                                            <div className={styles.timelineImage}>
                                                <img className={cx(styles.imgircle, styles.imgResponsive)} src="img/about/1.jpg" alt="" />
                                            </div>
                                            <div className={styles.timelinePanel}>
                                                <div className={styles.timelineHeading}>
                                                    <div className={styles.heading}>2009-2011</div>
                                                    <div className={styles.subheading}>Our Humble Beginnings</div>
                                                </div>
                                                <div className={styles.timelineBody}>
                                                    <span className={styles.timelineText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={styles.timelineInverted}>
                                            <div className={styles.timelineImage}>
                                                <img className={cx(styles.imgircle, styles.imgResponsive)} src="img/about/1.jpg" alt="" />
                                            </div>
                                            <div className={styles.timelinePanel}>
                                                <div className={styles.timelineHeading}>
                                                    <div className={styles.heading}>2009-2011</div>
                                                    <div className={styles.subheading}>Our Humble Beginnings</div>
                                                </div>
                                                <div className={styles.timelineBody}>
                                                    <span className={styles.timelineText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={styles.timelineImage}>
                                                <img className={cx(styles.imgircle, styles.imgResponsive)} src="img/about/1.jpg" alt="" />
                                            </div>
                                            <div className={styles.timelinePanel}>
                                                <div className={styles.timelineHeading}>
                                                    <div className={styles.heading}>2009-2011</div>
                                                    <div className={styles.subheading}>Our Humble Beginnings</div>
                                                </div>
                                                <div className={styles.timelineBody}>
                                                    <span className={styles.timelineText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</span>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </React.Fragment>
        )
    }

}

export default Experience;