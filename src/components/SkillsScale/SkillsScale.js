import React, { Component } from "react";
import styles from "./SkillsScale.module.scss";

class SkillsScale extends Component {
    createTable = () => {

        let children = []
        for (let j = 0; j < this.props.count; j++) {
            children.push(<span className={styles.dot}></span>)
        }
        for(let j = 0 ; j < 5 - this.props.count; j++){
            children.push(<span className={styles.dotSmall}></span>)
        }
        return children
    }
    render() {

        return (
            <React.Fragment>
                <div className="ml-2">{this.createTable()}</div>
            </React.Fragment>
        )
    }
}

export default SkillsScale;
