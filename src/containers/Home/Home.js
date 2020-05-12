import React, { Component } from "react";
import styles from "./Home.module.scss";
import defaultPic from "../../assets/icons/defaultPic.png";
// import arrow from "../../assets/icons/interface.svg";
import cx from "classnames";
import Footer from "../../components/molecule/Footer/Footer";


class Home extends Component {

    render() {
        return (
            <React.Fragment>

                <div className={styles.homePage}>
                    <div className="container">
                        <div className={styles.centerImage}>
                        <img src={defaultPic} alt="default pic" style={{marginBottom:"3rem"}}/>
                    
                            <div className={styles.infoText}>Hi, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore </div>
                            <div className={styles.infoText2}>some clever line which has to be very very good</div>
                        </div>
                        
                        <div className="row mb-4">
                            <div className={cx(styles.homeTabs,"col-sm-6")}>
                                <div className={cx(styles.homeTabsContent,"mx-1")}>
                                know me<br/>
                                </div>
                                
                                {/* <img src={arrow} alt="img" style={{width:"20px"}}/> */}

                            </div>
                            <div className={cx(styles.homeTabs,"col-sm-6")}>
                                <div className={cx(styles.homeTabsContent,"mx-1")}>
                                know me better
                                </div>
                                
                            </div>

                        </div>
                        

                    </div>
                    <Footer />

                </div>
            </React.Fragment>
        )
    }
}


export default Home;