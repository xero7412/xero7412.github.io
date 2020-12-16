import React from 'react';
import styles from './ProfilePic.module.scss';
import defaultPic from '../../../assets/icons/defaultPic.png';

const ProfilePic = () => {
    return (
        <>
            <div className={styles.textAlign}>
                <img src={defaultPic} alt="pic" height="140px" />
                <div className={styles.nameText}>
                    TOSHI SHARMA
                    </div>
                <div className={styles.smallText}>
                    front end engineer
                </div>
            </div>
        </>
    )
}

export default ProfilePic;
