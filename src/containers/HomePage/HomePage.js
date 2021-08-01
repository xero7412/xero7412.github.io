/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.scss';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Information from '../Information/Information';
import menu from '../../assets/newIcons/menu.svg';
import cx from 'classnames';

const initialState = {
    classStr: false,
    strc: '',
    dropdown: false,
}

const HomePage = () => {
    const [state, setState] = useState(initialState);
    const { classStr, strc, dropdown } = state;
    useEffect(() => {
        localStorage.setItem("theme", 'theme1');
    }, [])

    const myFunction = () => {
        setState({
            ...state,
            classStr: !classStr
        })
    }

    useEffect(() => {
        let strring = '';
        if (classStr) {
            strring = (cx("ml-auto", styles.topnav, styles.responsive))
        } else {
            strring = (cx("ml-auto", styles.topnav))
        }
        console.log(strring)
        setState({
            ...state,
            strc: strring
        })
    },[classStr])


    const toggleThemeChange = (colorTheme) => {
        // if (checked === false) {
        localStorage.setItem("theme", colorTheme);
        document
            .documentElement.setAttribute("data-theme", colorTheme);
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", colorTheme);

        document.documentElement.classList.add("color-theme-in-transition");
        window.setTimeout(() => {
            document.documentElement.classList.remove("color-theme-in-transition");
        }, 1000);

        setState({
            ...state,
            dropdown: false
        })
    }

    const handleThemeDropwon = () => {
        setState({
            ...state,
            dropdown: !dropdown
        })
    }

    console.log(localStorage.getItem("theme"))

    return (
        <div className={styles.bg}>
            <div className={cx(styles.pageContainer)}>
                <div className={strc}>
                    <a onClick={() => handleThemeDropwon()}>
                        <div className={styles[document.getElementsByTagName("HTML")[0].getAttribute("data-theme")]} />
                    </a>
                    <a href="#one" > about </a>
                    <a href="#two" > skills </a>
                    <a href="#three" > experience </a>
                    <a href="#four" > education </a>
                    <a href="#five" > information </a>
                    <a className={styles.icon} onClick={() => myFunction()}>
                        <img src={menu} alt="f" height="24px" />
                    </a>
                </div>
                {
                dropdown && <div className={styles.dropdownMenu}>
                    <div onClick={() => toggleThemeChange('theme1')} className={styles.theme1}>
                        
                    </div>
                    <div onClick={() => toggleThemeChange('theme2')} className={styles.theme2}>
                    </div>
                </div>
            }
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