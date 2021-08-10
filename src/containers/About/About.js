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
                    I’m a front-end developer who is passionate about bringing static designs to life with quality code. I have been in this industry for 2.5+ years and have developed great proficiency in  SCSS, JavaScript, and ReactJS.
                    <br /> <br />
                    I thrive on learning something new every day, always open to grab onto technologies and trends. I’m a go-getter and like facing new challenges from time to time. I have experience in working in agile methodology and enjoy collaborating with different teams to deliver awesome products.
                </div>
            </div>
        </div>
    )
}
export default About;