import React from 'react';
import cx from 'classnames';

import css from '../../assets/newIcons/css.svg';
import react from '../../assets/newIcons/react.svg';
import js from '../../assets/newIcons/javascript.svg';

import html from '../../assets/newIcons/html.svg';
import bootstrap from '../../assets/newIcons/bootstrap.svg';
import nodejs from '../../assets/newIcons/nodejs.svg';
import expressjs from '../../assets/newIcons/expressjs.svg';
import redux from '../../assets/newIcons/redux.svg';
import sass from '../../assets/newIcons/sass.svg';

import d3 from '../../assets/newIcons/d3.svg';
import java from '../../assets/newIcons/java.svg';
import jsp from '../../assets/newIcons/jsp.svg';
import mongodb from '../../assets/newIcons/mongodb.svg';
import mysql from '../../assets/newIcons/mysql.svg';
import vertx from '../../assets/newIcons/vertx.png';

import git from '../../assets/newIcons/git.svg';
import github from '../../assets/newIcons/github.svg';
import bitbucket from '../../assets/newIcons/bitbucket.svg';
import postman from '../../assets/newIcons/postman.svg';
import jira from '../../assets/newIcons/jira.svg';
import confluence from '../../assets/newIcons/confluence.svg';
import matlab from '../../assets/newIcons/matlab.png';

import styles from './Skills.module.scss';

const Skills = () => {
    return (
        <div className={styles.bgCurve}>
            <div className={styles.bg}>
                <div className={cx(styles.pageContainer)}>
                    <div className={cx(styles.heading)}>
                        skills &amp; tools
                    </div>
                    <div className="row mx-0 px-0">
                        <div className={cx(styles.headingSmall, "col-sm-3 mx-0 px-0")}>specialities</div>
                        <div className="col-sm-9 mx-0 px-0">
                            <div style={{ display: 'inline-block' }} className="mr-4">
                                <img src={css} alt="" height="42px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                <div className={styles.infoText}>CSS 3</div>
                            </div>
                            <div style={{ display: 'inline-block' }} className="mr-4">
                                <img src={react} alt="" height="50px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                <div className={styles.infoText}>React JS</div>
                            </div>
                            <div style={{ display: 'inline-block' }} className="mr-4">
                                <img src={js} alt="" height="42px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                <div className={styles.infoText}>JavaScript</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 row mx-0 px-0">
                        <div className={cx(styles.headingSmall, "col-sm-3 mx-0 px-0")}>skills</div>
                        <div style={{ display: 'inline-block' }} className="col-sm-9 mx-0 px-0">
                            <div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={html} alt="" height="42px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>HTML 5</div>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={bootstrap} alt="" height="40px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>Bootstrap</div>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={nodejs} alt="" height="46px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>Node JS</div>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={expressjs} alt="" height="30px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>Express JS</div>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={redux} alt="" height="40px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>Redux</div>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={sass} alt="" height="40px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>SASS</div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={d3} alt="" height="40px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>D3 JS</div>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={java} alt="" height="46px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>Java</div>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={jsp} alt="" height="42px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>JSP</div>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={mongodb} alt="" height="56px" className={cx("mr-2 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>Mongo DB</div>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={mysql} alt="" height="44px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>My SQL</div>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={vertx} alt="" height="40px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>Vert.X</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 row mx-0 px-0">
                        <div className={cx(styles.headingSmall, "col-sm-3 mx-0 px-0")}>tools</div>
                        <div style={{ display: 'inline-block' }} className="col-sm-9 mx-0 px-0">
                            <div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={git} alt="" height="44px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>Git</div>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={github} alt="" height="46px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>GitHub</div>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={bitbucket} alt="" height="36px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>BitBucket</div>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={postman} alt="" height="42px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>Postman</div>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={jira} alt="" height="40px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>Jira</div>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={confluence} alt="" height="36px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>Confluence</div>
                                </div>
                                <div style={{ display: 'inline-block' }} className="mr-4">
                                    <img src={matlab} alt="" height="44px" className={cx("mr-4 my-2", styles.icon)} data-aos="flip-right" />
                                    <div className={styles.infoText}>Matlab</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ div>
        </div>
    )
}

export default Skills;