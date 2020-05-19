import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";

import Home from './containers/Home/Home';
import cx from "classnames";
import styles from './App.module.scss';
import Resume from './containers/Resume/Resume';

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
        <div className={cx("px-0 mx-0 ", styles.header)}>
          <div className={styles.pageContainer}>
            <div className="row px-0 mx-0">
              <div>
                <Link to="/" className={styles.homeButton}>
                  <span role="img">⚙︎</span></Link>
              </div>
              <div className="ml-auto d-flex">
                <div className={styles.downloadLink}>Download&nbsp;&nbsp;⇲</div>

                <label className={styles.switch}>
                  <input type="checkbox"
                    checked={this.state.checked}
                    onChange={() => this.toggleThemeChange()}
                  />
                  <div className={cx(styles.slider, styles.round)}></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route path='/resume' exact component={Resume} />
          <Route path='/' exact component={Home} />
          
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
