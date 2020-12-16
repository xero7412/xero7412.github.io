import React from 'react';
import cx from 'classnames';
import styles from './HomePage.module.scss';
import LeftNav from '../LeftNav/LeftNav';
import RightSection from '../RightSection/RightSection';

const HomePage = () => {
    return(
        <div className={"row mx-0 px-0"}>
            <div className={cx(styles.leftNav,'col-sm-3')}>
                <LeftNav/>      
            </div>
            <div className={cx(styles.rightNav,'col-sm-9')}>
                <RightSection/>
            </div>
            
            
        </div>
    )
}

export default HomePage;