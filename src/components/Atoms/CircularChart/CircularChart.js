import React from 'react';
import styles from './CircularChart.module.scss';

const CircularChart = ({ src, percent, secText }) => {
    return (
        <>
            <section>
                <svg className={styles.circleChart} viewBox="0 0 90 90" width="90" height="90" xmlns="http://www.w3.org/2000/svg">
                    <circle stroke="#efefef" strokeWidth="5" fill="none" cx="45" cy="45" r="35" />
                    <circle className={styles.circleChart__circle} strokeWidth="5" strokeDasharray={`${percent},290`} strokeLinecap="round" fill="none" cx="45" cy="45" r="35" />
                    <g className={styles.circleChart__info}>
                        <image href={src} height="40" x="28%" y="28%" />
                    </g>
                </svg>
            </section>
        </>
    )
}

export default CircularChart;