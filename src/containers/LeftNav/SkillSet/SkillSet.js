import React from 'react';
import cx from 'classnames';
import aws from '../../../assets/icons/AWS.png';
import css from '../../../assets/icons/CSS.png';
import dthree from '../../../assets/icons/DThree.svg';
import html from '../../../assets/icons/HTML.png';
import java from '../../../assets/icons/Java.png';
import js from '../../../assets/icons/JS.png';
import jsp from '../../../assets/icons/JSP.png';
import mongo from '../../../assets/icons/MongoDB.svg';
import sql from '../../../assets/icons/SQL.svg';
import vertx from '../../../assets/icons/VertX.svg';
import reactIcon from '../../../assets/icons/React.png';

import CircularChart from '../../../components/Atoms/CircularChart/CircularChart';
import styles from './SkillSet.module.scss';

const SkillSet = () => {
    return (
        <div>
            <div className={cx(styles.headingSmallBold, "mt-5")}>
                specialities
            </div>
            <div className="d-flex mt-4">
                <CircularChart percent={220} src={reactIcon} secText="react JS" />
                <CircularChart percent={200} src={js} secText="html" />
                <CircularChart percent={200} src={css} secText="css" />
            </div>
            <div className={cx(styles.headingSmallBold, "mt-5")}>
                skills
            </div>
            <div className="d-flex mt-4">
                <img src={java} alt="skill" height="38px" className="m-2" />
                <img src={vertx} alt="skill" height="38px" className="m-2" />
                <img src={jsp} alt="skill" height="38px" className="m-2"/>
                
            </div>
            <div className="d-flex">
                <img src={dthree} alt="skill" height="34px" className="m-2"/>
                <img src={html} alt="skill" height="38px" className="m-2"/>
                <img src={mongo} alt="skill" height="38px" className="m-2"/>
            </div>
            <div className="d-flex">
                <img src={sql} alt="skill" height="38px" className="m-2"/>
                <img src={reactIcon} alt="skill" height="38px" className="m-2" />
                <img src={aws} alt="skill" height="38px"className="m-2" />
            </div>
        </ div>
    )
}

export default SkillSet;