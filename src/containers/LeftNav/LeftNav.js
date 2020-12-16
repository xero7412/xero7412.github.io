import React from 'react';
import Information from './Information/Information';
import styles from './LeftNav.module.scss';
import ProfilePic from './ProfilePic/ProfilePic';
import SkillSet from './SkillSet/SkillSet';

const LeftNav = () =>{
    return(
        <div className={styles.paddingLeftNav}>
        <ProfilePic />
        <SkillSet />
        <Information/>
        <div className={styles.downloadBar}>
            download cv
        </div>
        </ div>
    )
}

export default LeftNav