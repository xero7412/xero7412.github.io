import React from 'react';
import cx from 'classnames';
import styles from './Experience.module.scss';
import 'aos/dist/aos.css';

const Experience = () => {

    return (
        <div className={styles.bg}>
            <div className={cx(styles.pageContainer)}>
                <div className={cx(styles.heading)}>
                    experiences
                </div>
                <div>
                    <div className={cx(styles.card, "px-0 mt-5 mx-0")}>
                        <div className={cx(styles.cardContainerLeft)} data-aos="fade-down">
                            company name
                            <br />
                            duration
                        </div>
                        <div className={cx(styles.cardContainerRight)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis malesuada ornare. Vestibulum enim
                            nibh, consectetur eu finibus quis, tempus at mi. Donec pellentesque orci a diam luctus mattis. Praesent
                            euismod sapien mi
                        </div>
                    </div>
                    <div className={cx(styles.card, "px-0 mt-5 mx-0")}>
                        <div className={cx(styles.cardContainerLeft)} data-aos="fade-down">
                            company name
                            <br />
                            duration
                        </div>
                        <div className={cx(styles.cardContainerRight)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis malesuada ornare. Vestibulum enim
                            nibh, consectetur eu finibus quis, tempus at mi. Donec pellentesque orci a diam luctus mattis. Praesent
                            euismod sapien mi
                        </div>
                    </div>
                    <div className={cx(styles.card, "mt-5 mx-0")}>
                        <div className={cx(styles.cardContainerLeft)} data-aos="fade-down">
                            company name
                            <br />
                            duration
                        </div>
                        <div className={cx(styles.cardContainerRight)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis malesuada ornare. Vestibulum enim
                            nibh, consectetur eu finibus quis, tempus at mi. Donec pellentesque orci a diam luctus mattis. Praesent
                            euismod sapien mi
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Experience;