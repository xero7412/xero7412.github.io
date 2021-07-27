import React from 'react';
import cx from 'classnames';
import aws from '../../assets/icons/AWS.png';
import css from '../../assets/icons/CSS.png';
import dthree from '../../assets/icons/DThree.svg';
import html from '../../assets/icons/HTML.png';
import java from '../../assets/icons/Java.png';
import js from '../../assets/icons/JS.png';
import jsp from '../../assets/icons/JSP.png';
import mongo from '../../assets/icons/MongoDB.svg';
import sql from '../../assets/icons/SQL.svg';
import vertx from '../../assets/icons/VertX.svg';
import reactIcon from '../../assets/icons/React.png';

import CircularChart from '../../components/Atoms/CircularChart/CircularChart';
import styles from './Skills.module.scss';

const Skills = () => {
    return (
        <div className={styles.bgCurve}>
        <div className={styles.bg}>
            <div className={cx(styles.pageContainer)}>
                <i className={cx(styles.top, styles.left)}></i>
                <i className={cx(styles.top, styles.right)}></i>
                <div className="row">
                    <div className={cx(styles.heading, 'col-sm-4')} >
                        specialities
                    </div>
                    <div className="d-flex col-sm-8">
                        <div className={styles.boxContainer}>
                            <CircularChart percent={220} src={reactIcon} secText="react JS" />
                        </div>
                        <div className={styles.boxContainer}>
                            <CircularChart percent={200} src={js} secText="html" />
                        </div>
                        <div className={styles.boxContainer}>
                            <CircularChart percent={200} src={css} secText="css" />
                        </div>
                    </div>
                </div>

                <div className="row" style={{marginTop:'5rem'}}>
                    <div className={cx(styles.heading, 'col-sm-4')}>
                        skills &amp; tools
                    </div>
                    <div className="col-sm-8">
                        <div>
                            <div className={styles.boxContainerSmall}>
                                <img src={java} alt="skill" height="38px" className="m-2" />
                            </div>
                            <div className={styles.boxContainerSmall}>
                                <img src={vertx} alt="skill" height="38px" className="m-2" />
                            </div>
                            <div className={styles.boxContainerSmall}>
                                <img src={jsp} alt="skill" height="38px" className="m-2" />
                            </div>
                        </div>
                        <div>
                            <div className={styles.boxContainerSmall}>
                                <img src={dthree} alt="skill" height="34px" className="m-2" />
                            </div>
                            <div className={styles.boxContainerSmall}>
                                <img src={html} alt="skill" height="38px" className="m-2" />
                            </div>
                            <div className={styles.boxContainerSmall}>
                                <img src={mongo} alt="skill" height="38px" className="m-2" />
                            </div>
                        </div>
                        <div>
                            <div className={styles.boxContainerSmall}>
                                <img src={sql} alt="skill" height="38px" className="m-2" />
                            </div>
                            <div className={styles.boxContainerSmall}>
                                <img src={reactIcon} alt="skill" height="38px" className="m-2" />
                            </div>
                            <div className={styles.boxContainerSmall}>
                                <img src={aws} alt="skill" height="38px" className="m-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </ div>
        </div>
        </div>
    )
}

export default Skills;