import React from 'react';
import styles from './CircularChart.module.scss';

const CircularChart = ({ text, percent, secText }) => {
    return (
        <>
            <section>
                <svg className={styles.circleChart} viewbox="0 0 80 80" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                    <circle stroke="#efefef" stroke-width="5" fill="none" cx="40" cy="40" r="30" />
                    <circle className={styles.circleChart__circle} stroke-width="5" stroke-dasharray={`${percent},100`} stroke-linecap="round" fill="none" cx="40" cy="40" r="30" />
                    <g className={styles.circleChart__info}>
                        <text x="40" y="40" alignment-baseline="central" text-anchor="middle" font-size="16">{text}</text>
                    </g>
                </svg>
                <div className={styles.secText}>{secText}</div>
            </section>
        </>
    )
}

export default CircularChart;