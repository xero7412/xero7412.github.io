import React, { useState, useEffect, useRef } from 'react';
import styles from './HomePage.module.scss';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Information from '../Information/Information';
import menu from '../../assets/newIcons/menu.svg';
import './hm.css';
const initialState = {
    checked: localStorage.getItem("theme") === "dark" ? true : false,
}

const HomePage = () => {
    const [state, setState] = useState(initialState);
    const { checked } = state;
    const refer = useRef();
    useEffect(() => {
        // document
        //     .documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
        // document
        //     .getElementsByTagName("HTML")[0]
        //     .setAttribute("data-theme", localStorage.getItem("theme"));
        localStorage.setItem("theme", 'theme1');
    }, [])

    const myFunction = () => {
        var x = refer.current;
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }


    const toggleThemeChange = (colorTheme) => {
        // if (checked === false) {
            localStorage.setItem("theme", colorTheme);
            document
                .documentElement.setAttribute("data-theme", colorTheme);
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", colorTheme);
            setState({
                checked: true
            });
        // } else {
        //     localStorage.setItem("theme", "light");
        //     document
        //         .documentElement.setAttribute("data-theme", "light");
        //     document
        //         .getElementsByTagName("HTML")[0]
        //         .setAttribute("data-theme", "light");
        //     setState({
        //         checked: false
        //     });
        // }

        document.documentElement.classList.add("color-theme-in-transition");
        window.setTimeout(() => {
            document.documentElement.classList.remove("color-theme-in-transition");
        }, 1000);
    }

    return (
        <div className={styles.bg}>
            <div className={styles.pageContainer}>
            <div class="topnav" id="myTopnav" ref={refer}>
                <a href="##"></a>
                <a href="#one" > about </a>
                <a href="#two" > skills </a>
                <a href="#three" > experience </a>
                <a href="#four" > education </a>
                <a href="#five" > information </a>
                <a class="icon" onClick={() => myFunction()}>
                    <img src={menu} alt="f" height="24px" />
                </a>
            </div>
            </div>

            <div onClick={() => toggleThemeChange('theme1')}>
                theme 1
            </div>
            <div onClick={() => toggleThemeChange('theme2')}>
                theme 2
            </div>
            {/* <div className={styles.pageContainer}> */}
            {/* <label className={styles.switch}>
                <input type="checkbox"
                    checked={checked}
                    onChange={() => toggleThemeChange()}
                />
                <div className={cx(styles.slider, styles.round)}></div>
                </label> */}

            {/* </div> */}
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