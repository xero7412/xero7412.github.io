import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './HomePage.module.scss';
import LeftNav from '../LeftNav/LeftNav';
import RightSection from '../RightSection/RightSection';
import About from '../RightSection/About/About';
import ProfilePic from '../LeftNav/ProfilePic/ProfilePic';
import SkillSet from '../LeftNav/SkillSet/SkillSet';
import Information from '../LeftNav/Information/Information';

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
        <div className={cx("row mx-0 px-0",styles.bg)}>
            <div id="image" className="col-xs-12 col-sm-3  mx-0 px-0"><ProfilePic/></div>
            <div id="headline" className="col-xs-12 col-sm-9  mx-0 px-0 pull-right">
                <About/>
            </div>
            
            <div id="caption" className="col-xs-12 col-sm-3  mx-0 px-0"><SkillSet/></div>
            
            <div id="qty" className="col-xs-12 col-sm-9 pull-right  mx-0 px-0"><RightSection/></div>
            <div id="desc" className={cx("col-xs-12 col-sm-3 mx-0 px-0",styles.infoCard)}><Information/></div>
            
            {/*<div className={cx(styles.leftNav,'col-sm-3')}>
             <label className={styles.switch}>
                  <input type="checkbox"
                    checked={checked}
                    onChange={() => toggleThemeChange()}
                  />
                  <div className={cx(styles.slider, styles.round)}></div>
                </label> 
                <LeftNav/>      
            </div>
            <div className={cx(styles.rightNav,'col-sm-9')}>
                <RightSection/>
            </div>  
    */}

        </div>
    )
}

export default HomePage;