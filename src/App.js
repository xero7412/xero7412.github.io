import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Home from './containers/Home/Home';
import cx from "classnames";
import styles from './App.module.scss';

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
      <React.Fragment>
        <div className={cx("px-0 mx-0", styles.background)}>
          <div className="container">
            <label className={styles.switch}>
              <input type="checkbox"
                checked={this.state.checked}
                onChange={() => this.toggleThemeChange()}
              />
              <div className={cx(styles.slider, styles.round)}></div>
            </label>
          </div>
        </div>
        
        <Route path='/' exact component={Home} />

      </React.Fragment>
    );
  }
}

export default App;
