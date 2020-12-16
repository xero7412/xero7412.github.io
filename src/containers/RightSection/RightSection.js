import React from 'react';
import cx from 'classnames';
import styles from './RightSection.module.scss';

const RightSection = () => {

    return (
        <div className={styles.paddingSection}>
            <div className={styles.aboutCard}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis malesuada ornare. Vestibulum enim
                nibh, consectetur eu finibus quis, tempus at mi. Donec pellentesque orci a diam luctus mattis. Praesent
                euismod sapien mi, et fringilla nisi interdum convallis. Vestibulum diam odio, vehicula id interdum at, accumsan tristique
            </div>
            <div className={cx(styles.headingSmallBold, "mt-5 mb-4")}>
                experiences
            </div>
            <div className="row mx-0 px-0">
                <div className={"col-sm-6 pr-2 pl-0 mx-0"}>
                    <div className={styles.expCard}>
                        <div className={styles.expHeading}>
                            company name
                        </div>
                        <div className={styles.expSubHeading}>
                            duration
                        </div>
                        <div className={styles.cardText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis malesuada ornare. Vestibulum enim
                            nibh, consectetur eu finibus quis, tempus at mi. Donec pellentesque orci a diam luctus mattis. Praesent
                            euismod sapien mi
                        </div>
                    </div>
                </div>
                <div className={"col-sm-6 pl-2 pr-0 mx-0"}>
                    <div className={styles.expCard}>
                        <div className={styles.expHeading}>
                            company name
                        </div>
                        <div className={styles.expSubHeading}>
                            duration
                        </div>
                        <div className={styles.cardText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis malesuada ornare. Vestibulum enim
                            nibh, consectetur eu finibus quis, tempus at mi. Donec pellentesque orci a diam luctus mattis. Praesent
                            euismod sapien mi
                        </div>
                    </div>
                </div>
                <div className={"col-sm-6 pr-2 pl-0 mx-0 mt-4"}>
                    <div className={styles.expCard}>
                        <div className={styles.expHeading}>
                            company name
                        </div>
                        <div className={styles.expSubHeading}>
                            duration
                        </div>
                        <div className={styles.cardText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis malesuada ornare. Vestibulum enim
                            nibh, consectetur eu finibus quis, tempus at mi. Donec pellentesque orci a diam luctus mattis. Praesent
                            euismod sapien mi
                        </div>
                    </div>
                </div>
                <div className={"col-sm-6 pl-2 pr-0 mx-0 mt-4"}>
                    <div className={styles.expCard}>
                        <div className={styles.expHeading}>
                            company name
                        </div>
                        <div className={styles.expSubHeading}>
                            duration
                        </div>
                        <div className={styles.cardText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis malesuada ornare. Vestibulum enim
                            nibh, consectetur eu finibus quis, tempus at mi. Donec pellentesque orci a diam luctus mattis. Praesent
                            euismod sapien mi
                        </div>
                    </div>
                </div>
                <div className={cx(styles.headingSmallBold, "mt-5 mb-4")}>
                    education
                </div>
                <div className="row mx-0 px-0">
                    <div className={"col-sm-6 pr-2 pl-0 mx-0"}>
                        <div className={styles.expCard}>
                            <div className={styles.expHeading}>
                                company name
                        </div>
                            <div className={styles.expSubHeading}>
                                duration
                        </div>
                            <div className={styles.cardText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis malesuada ornare. Vestibulum enim
                                nibh, consectetur eu finibus quis, tempus at mi. Donec pellentesque orci a diam luctus mattis. Praesent
                                euismod sapien mi
                        </div>
                        </div>
                    </div>
                    <div className={"col-sm-6 pl-2 pr-0 mx-0"}>
                        <div className={styles.expCard}>
                            <div className={styles.expHeading}>
                                company name
                        </div>
                            <div className={styles.expSubHeading}>
                                duration
                        </div>
                            <div className={styles.cardText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis malesuada ornare. Vestibulum enim
                                nibh, consectetur eu finibus quis, tempus at mi. Donec pellentesque orci a diam luctus mattis. Praesent
                                euismod sapien mi
                        </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default RightSection;