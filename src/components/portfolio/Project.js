import React, { Component } from "react";
import iconplus from "../../img/icons8-plus.svg";

export default class Project extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  handleExit = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    let { name, languagesIcons, source, info, picture } = this.props.item;
    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((iconPath, index) => (
            <img
              className="imgIcons"
              src={iconPath}
              alt={`Icone ${index}`}
              key={index}
            />
          ))}
          <h3>{name}</h3>
          <img
            className="imgProject"
            src={picture}
            alt=""
            onClick={this.handleInfo}
          />
          <span className="infos" onClick={this.handleInfo}>
            <img src={iconplus}></img>
          </span>

          {this.state.showInfo && (
            <div className="showInfos">
              <div className="infosContent">
                <div className="head">
                  <h2>{name}</h2>
                  <div className="sourceCode">
                    <a
                      href={source}
                      rel="noopener noreferrer"
                      className="button"
                      target="_blank"
                    >
                      Code source
                    </a>
                  </div>
                  <p className="text">{info}</p>
                </div>
                <div className="button return" onClick={this.handleInfo}>
                  Retourner sur la page
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}