import React from 'react';
import styles from './About.module.scss';
import defaultPic from '../../assets/newIcons/toshiSharma.jpg';
import cx from 'classnames'

const About = () => {

    return (
        <div className={cx(styles.pageContainer, 'row')}>
            <div className={cx(styles.defaultPic)} data-aos="fade-right" data-aos-delay="700"><img height="350px" src={defaultPic} alt="default" className={styles.pic} /></div>
            <div className={cx(styles.aboutCard)} data-aos="fade-left" data-aos-delay="700">
                <div className={styles.heading}>
                    Hi! I'm Toshi
                    {/* <i class="icon-editPen"></i>  */}
                </div>
                <div className={styles.text}>
                    I'm a Senior Software Development Engineer with 7 years of experience building and scaling React and React Native
                    applications. Currently leading technical execution for the Insurance pod at Jupiter Money.
                    <br /> <br />Proficient in JavaScript,
                    TypeScript, React, React Native, and Node.js, with proven success in optimizing performance, reducing costs, and
                    driving user engagement across web and mobile platforms.
                </div>
            </div>
        </div>
    )
}
export default About;