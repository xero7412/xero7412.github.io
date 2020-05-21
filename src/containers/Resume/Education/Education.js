import React, { Component } from "react";
import styles from "./Education.module.scss";
import cx from "classnames";
import grad from "../../../assets/icons/grad.png";
import book from "../../../assets/icons/book.png";


class Education extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={styles.expSection} >
                    <div className={styles.expContent}>
                        <br />
                        <h2 className={styles.sectionHead}>EDUCATION</h2>
                        <div className={"mt-5"}>
                            <div className="row px-0 mx-0">
                                <div className="col-lg-12 px-0">
                                    <ul className={styles.timeline}>
                                        <li>
                                            <div className={styles.timelineImageGrad}>
                                                <img className={cx(styles.imgResponsiveGrad)} src={grad} alt="" />
                                            </div>
                                            <div className={styles.timelinePanel}>
                                                <div className={styles.timelineHeading}>
                                                    <div className={styles.heading}>2009-2011</div>
                                                    <div className={styles.subheading}>Our Humble Beginnings</div>
                                                </div>
                                                <div className={styles.timelineBody}>
                                                    <span className={styles.timelineText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={styles.timelineInverted}>
                                            <div className={styles.timelineImage}>
                                                <img className={cx(styles.imgResponsive)} src={book} alt="" />
                                            </div>
                                            <div className={styles.timelinePanel}>
                                                <div className={styles.timelineHeading}>
                                                    <div className={styles.heading}>2009-2011</div>
                                                    <div className={styles.subheading}>Our Humble Beginnings</div>
                                                </div>
                                                <div className={styles.timelineBody}>
                                                    <span className={styles.timelineText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={styles.timelineImage}>
                                                <img className={cx(styles.imgResponsive)} src={book} alt="" />
                                            </div>
                                            <div className={styles.timelinePanel}>
                                                <div className={styles.timelineHeading}>
                                                    <div className={styles.heading}>2009-2011</div>
                                                    <div className={styles.subheading}>Our Humble Beginnings</div>
                                                </div>
                                                <div className={styles.timelineBody}>
                                                    <span className={styles.timelineText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
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

export default Education;