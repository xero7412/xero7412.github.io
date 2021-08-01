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
                    <ul className={styles.timeline}>
                        <li className={styles.event}>
                            <div className={styles.flag} data-aos="fade-right">
                                <div className={styles.flagContent}>2019</div>
                            </div>
                            <div className={styles.boldText}>Registration</div>
                            <div className={styles.text}>Get here on time, it's first come first serve. Be.</div>
                        </li>
                        <li className={styles.event}>
                            <div className={styles.flag} data-aos="fade-right">
                                <div className={styles.flagContent}>2019</div>
                            </div>
                            <div className={styles.boldText}>Registration</div>
                            <div className={styles.text}>Get here on time, it's first come way.</div>
                        </li>
                        <li className={styles.event}>
                            <div className={styles.flag} data-aos="fade-right">
                                <div className={styles.flagContent}>2019</div>
                            </div>
                            <div className={styles.boldText}>Registration</div>
                            <div className={styles.text}>Get here on time, it's firsurned away.</div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Education;