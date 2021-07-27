import React from 'react';
import styles from './Information.module.scss';
import cx from 'classnames';
import mobile from '../../assets/icons/Phone.png';
import location from '../../assets/icons/Location.png';
import mail from '../../assets/icons/Mail.png';


const Information = () => {
    return (
        <div className={styles.bg}>
            <div className={cx(styles.pageContainer)}>
                <div className={cx(styles.text)}>
                    <img src={mobile} alt="img" height="24px" /> +91 7240915612
                </div>
                <div className={cx(styles.text)}>
                    <img src={mail} alt="img" height="28px" /> toshisharma7412@gmail.com
                </div>
                <div className={cx(styles.text)}>
                    <img src={location} alt="img" height="26px" /> bangalore
                </div>
            </div>
        </div>
    )
}

export default Information;