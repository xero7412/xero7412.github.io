import React from 'react';
import cx from 'classnames';
import styles from './Education.module.scss';
import 'aos/dist/aos.css';

const Education = () => {

    return (
        <div className={styles.bg}>
            <div className={cx(styles.pageContainer)}>
                <div className={cx(styles.heading)}>
                    education
                </div>
                <div>
                    <ul className={styles.timeline} data-aos="fade-down">
                        <li className={styles.event}>
                            <div className={styles.flag} data-aos="fade-right">
                                <div className={styles.flagContent}>2019</div>
                            </div>
                            <div className={styles.boldText}>BACHELOR OF TECHNOLOGY IN ELECTRONICS AND COMMUNICATION</div>
                            <div className={styles.text}>Jaypee University of Engineering and Technology, Guna</div>
                            <i>CGPA : 8.2</i>
                        </li>
                        <li className={styles.event}>
                            <div className={styles.flag} data-aos="fade-right">
                                <div className={styles.flagContent}>2015</div>
                            </div>
                            <div className={styles.boldText}>SENIOR SECONDARY EDUCATION</div>
                            <div className={styles.text}>Central Board of Secondary Education</div>
                            <i>percentage : 73%</i>
                        </li>
                        <li className={styles.event}>
                            <div className={styles.flag} data-aos="fade-right">
                                <div className={styles.flagContent}>2013</div>
                            </div>
                            <div className={styles.boldText}>HIGHER SECONDARY EDUCATION</div>
                            <div className={styles.text}>Central Board of Secondary Education</div>
                            <i>CGPA : 10</i>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Education;