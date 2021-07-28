import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './HomePage.module.scss';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Information from '../Information/Information';

const initialState = {
    checked: localStorage.getItem("theme") === "dark" ? true : false,
}

const HomePage = () => {
    const [state, setState] = useState(initialState);
    const { checked } = state;

    useEffect(() => {
        document
            .documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"));
    }, [])

    const toggleThemeChange = () => {
        if (checked === false) {
            localStorage.setItem("theme", "dark");
            document
                .documentElement.setAttribute("data-theme", "dark");
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", "dark");
            setState({
                checked: true
            });
        } else {
            localStorage.setItem("theme", "light");
            document
                .documentElement.setAttribute("data-theme", "light");
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", "light");
            setState({
                checked: false
            });
        }

        document.documentElement.classList.add("color-theme-in-transition");
        window.setTimeout(() => {
            document.documentElement.classList.remove("color-theme-in-transition");
        }, 1000);
    };

    return (
        <div className={styles.bg}>
            <div className={styles.pageContainer}>
                {/* <label className={styles.switch}>
                <input type="checkbox"
                    checked={checked}
                    onChange={() => toggleThemeChange()}
                />
                <div className={cx(styles.slider, styles.round)}></div>
                </label> */}
                
                <div className={styles.headerNavBar}>
                    <a href="#one" className={styles.navBtn}> about </a>
                    <a href="#two" className={styles.navBtn}> skills </a>
                    <a href="#three" className={styles.navBtn}> experience </a>
                    <a href="#four" className={styles.navBtn}> education </a>
                    <a href="#five" className={styles.navBtn}> information </a>
                </div>
            </div>
            <div className={styles.aboutBg}>
              <div id="one" className={styles.sectionA}><About /></div>
            </div>
            
            <div id="two" className={styles.aboutSection}><Skills /></div>
            <div id="three" className={styles.sections}> <Experience /></div>
            <div id="four" className={styles.sections}><Education /></div>
            <div id="five" className={styles.sections}> <Information /></div>
        </div>
    )
}

export default HomePage;