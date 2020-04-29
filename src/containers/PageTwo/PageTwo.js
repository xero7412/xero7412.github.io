import React, { Component } from 'react';
// import styles from "../../App.css";
import stylei from './PageTwo.module.scss';
import styles from './PageTwoo.module.scss';


class PageOne extends Component{


    render(){
        let ji;
        if(localStorage.getItem("theme") === "dark" ) {
           ji = styles
        }else ji = stylei
        return(
            <p className={ji.re}>
                oh well hello
            </p>
        )
    }
}

export default PageOne;