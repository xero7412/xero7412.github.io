import React from 'react';
import styles from './Information.module.scss';
import cx from 'classnames';

const Information = () => {
    return (
        <>
            <div className={cx(styles.headingSmallBold, "mt-5 mb-4")}>
                education
        </div>
            <div>
                location
        </div>
            <div>
                number
        </div>
            <div>
                email
        </div>
        </>
    )
}

export default Information;