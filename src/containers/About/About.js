import React from 'react';
import styles from './About.module.scss';
import defaultPic from '../../assets/icons/toshiSharma.jpg';
import cx from 'classnames'

const About = () => {

    return (
        <div className={cx(styles.pageContainer, 'row')}>
            <div className={cx(styles.defaultPic)}><img height="350px" src={defaultPic} alt="default"/></div>
            <div className={cx(styles.aboutCard)}>
                <div className={styles.heading}>
                    Hi! I'm Toshi 
                    {/* <i class="icon-editPen"></i>  */}
                </div>
                <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis malesuada ornare. Vestibulum enim
                nibh, consectetur eu finibus quis, tempus at mi. Donec pellentesque orci a diam luctus mattis. Praesent
                euismod sapien mi, et fringilla nisi interdum convallis. Vestibulum diam odio, vehicula id interdum at, accumsan tristique
                </div>
            </div>
        </div>
    )
}
export default About;