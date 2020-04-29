import React, { Component } from 'react';
// import styles from "../../App.css";
import stylei from './PageOne.module.scss';
import styles from './PageOnee.module.scss';


class PageOne extends Component{


    render(){
        let ji;
        if(localStorage.getItem("theme") === "dark" ) {
           ji = styles
        }else ji = stylei
        return(
            <p className={ji.re}>
                Almost before we knew it
            </p>
        )
    }
}

export default PageOne;