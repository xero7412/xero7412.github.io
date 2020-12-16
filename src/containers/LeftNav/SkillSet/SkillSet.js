import React from 'react';
import cx from 'classnames';
import defaultSkill from '../../../assets/icons/JSP.png';
import CircularChart from '../../../components/Atoms/CircularChart/CircularChart';
import styles from './SkillSet.module.scss';

const SkillSet = () => {
    return (
        <>
            <div className={cx(styles.headingSmallBold, "mt-5")}>
                specialities
            </div>
            <div className="d-flex mt-4">
                <CircularChart percent={130} text="80%" secText="react JS" />
                <CircularChart percent={100} text="40%" secText="html" />
                <CircularChart percent={100} text="50%" secText="css" />
            </div>
            <div className={cx(styles.headingSmallBold, "mt-5")}>
                skills
            </div>
            <div className="d-flex mt-4">
                <img src={defaultSkill} alt="skill"/>
                <img src={defaultSkill} alt="skill"/>
                <img src={defaultSkill} alt="skill"/>
                <img src={defaultSkill} alt="skill"/>
            </div>
            <div className="d-flex">
                <img src={defaultSkill} alt="skill"/>
                <img src={defaultSkill} alt="skill"/>
                <img src={defaultSkill} alt="skill"/>
                <img src={defaultSkill} alt="skill"/>
            </div>
            <div className="d-flex">
                <img src={defaultSkill} alt="skill"/>
                <img src={defaultSkill} alt="skill"/>
                <img src={defaultSkill} alt="skill"/>
            </div>
        </>
    )
}

export default SkillSet;