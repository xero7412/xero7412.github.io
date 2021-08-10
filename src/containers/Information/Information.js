import React from 'react';
import styles from './Information.module.scss';
import cx from 'classnames';
import location from '../../assets/newIcons/location.svg';
import mail from '../../assets/newIcons/gmail.svg';
import github from '../../assets/newIcons/github.png';
import linkedin from '../../assets/newIcons/linkedin.svg';

const Information = () => {

    console.log(`../../assets/Toshi_Sharma_(Resume)_${document.getElementsByTagName("HTML")[0].getAttribute("data-theme")}.pdf`)
    return (
        <div className={styles.bg}>
            <div className={cx(styles.pageContainer)}>
                <div className="row mx-0">
                    <div className="col-sm-6 mx-0 px-0 mt-2">
                        <a className={cx(styles.text)} href="https://mail.google.com/mail/?view=cm&fs=1&to=toshisharma7412@gmail.com&body=Hi! Toshi" target='_blank' rel="noopener noreferrer">
                            <img src={mail} alt="img" height="36px" className="mr-2" />toshisharma7412@gmail.com
                        </a>
                        <br />
                        <a className={cx(styles.text, 'mt-5')} href="https://www.google.com/search?q=bengaluru+india" target='_blank' rel="noopener noreferrer">
                            <img src={location} alt="img" height="36px" className="mr-2" />Bengaluru, India
                        </a>
                    </div>
                    <div className="col-sm-6 mx-0 px-0 mt-2">
                        <a href={`/Toshi_Sharma_(Resume)_${document.getElementsByTagName("HTML")[0].getAttribute("data-theme")}.pdf`} download className={styles.btn}>download 
                        <div style={{transform: 'rotate(90deg)', display:'inline-block', marginLeft: '8px'}}>⇥</div></a>
                        <br />
                        <br />
                        <a href="https://github.com/xero7412" target='_blank' rel="noopener noreferrer"><img src={github} alt="" height="42px" className="mr-2" /></a>
                        <a href="https://www.linkedin.com/in/xero7412/" target='_blank' rel="noopener noreferrer"><img src={linkedin} alt="" height="54px" /></a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;