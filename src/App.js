import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

// import Home from './containers/Home/Home';
// import cx from "classnames";
// import styles from './App.module.scss';
// import Resume from './containers/Resume/Resume';
// import home from "./assets/icons/home.png";

import HomePage from './containers/HomePage/HomePage';
import AOS from 'aos';

class App extends Component {

  state = {
    checked: localStorage.getItem("theme") === "dark" ? true : false,
    theme: localStorage.getItem("theme")
  };

  componentDidMount() {
    document
      .documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
      AOS.init();
  }

  toggleThemeChange = () => {
    const { checked } = this.state;
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      document
        .documentElement.setAttribute("data-theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "dark");
      this.setState({
        checked: true
      });
    } else {
      localStorage.setItem("theme", "light");
      document
        .documentElement.setAttribute("data-theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "light");
      this.setState({
        checked: false
      });
    }


    // const theme = this.state.theme === "light" ? "dark" : "light";
    document.documentElement.classList.add("color-theme-in-transition");
    // this.setState({ theme });
    // document.documentElement.setAttribute("data-theme", theme);
    window.setTimeout(() => {
      document.documentElement.classList.remove("color-theme-in-transition");
    }, 1000);
  };



  render() {
    return (
      <HomePage />
      // <React.Fragment>

      //   <div className={cx("px-0 mx-0 ", styles.header)}>
      //     <div className={styles.pageContainer}>
      //       <div className="row px-0 mx-0">
      //         <div>
      //           <Link to="/" className={styles.homeButton}>
      //             <span role="img">
      //               <img src={home} alt="home" style={{ height: "41px", width: "41px" }} />
      //             </span>
      //           </Link>
      //         </div>
      //         <div className="ml-auto d-flex">
      //           <div className={styles.downloadLink}>Download&nbsp;&nbsp;⇲</div>

      //           <label className={styles.switch}>
      //             <input type="checkbox"
      //               checked={this.state.checked}
      //               onChange={() => this.toggleThemeChange()}
      //             />
      //             <div className={cx(styles.slider, styles.round)}></div>
      //           </label>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   <Router>
      //     <Route
      //       render={({ location }) => {
      //         return (
      //           <TransitionGroup component={null}>
      //             <CSSTransition
      //               timeout={300}
      //               classNames={"page"}
      //               key={location.key}
      //             >
      //               <Switch location={location}>
      //                 <Route path='/' exact component={Home} />
      //                 <Route path='/resume' exact component={Resume} />


      //               </Switch>
      //             </CSSTransition>
      //           </TransitionGroup>

      //         )
      //       }} />

      //   </Router>
      // </React.Fragment>

    );
  }
}

export default App;
