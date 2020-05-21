import React, { Component } from "react";
import axios from "axios";

import winPopUp from "./images/winPopUp.svg";
import tryAgain from "./images/tryAgain.svg";

const access_token = "2560077217542151";
class Compare extends Component {
  state = {
    myChar: {
      powerstats: {
        inteligence: " ",
        strength: "",
        speed: "",
      },
      image: {
        url: "",
      },
      name: "",
    },
    enemy: {
      powerstats: {
        inteligence: "",
        strength: "",
        speed: "",
      },
      image: { url: "" },
      name: "",
    },
    flag: 0,
    mount: false,
  };
  componentDidMount = () => {
    const selectedHero = this.props.selectedHero;
    const enemyChar = this.props.enemyId[
      Math.floor(Math.random() * this.props.enemyId.length)
    ];
    this.props.spliceEnemyId(enemyChar);
    axios.get(`/${access_token}/${selectedHero}`).then((res) => {
      this.setState({ myChar: res.data });
    });
    axios
      .get(`/${access_token}/${enemyChar}`)
      .then((res) => {
        this.setState({ enemy: res.data });
      })
      .then(console.log(this.state.enemy));
  };
  result(myStats, enemyStats) {
    if (myStats >= enemyStats) {
      this.setState({ flag: 1 });
      this.props.addMyAlly();
    } else {
      this.setState({ flag: 2 });
    }
  }

  handlerunmount = () => {
    this.setState({ mount: false });
  };
  getIntelligence = () => {
    this.result(
      this.state.myChar.powerstats.intelligence,
      this.state.enemy.powerstats.intelligence
    );
    this.setState({ mount: true });
  };
  getStrength = () => {
    this.result(
      this.state.myChar.powerstats.strength,
      this.state.enemy.powerstats.strength
    );
    this.setState({ mount: true });
  };
  getSpeed = () => {
    this.result(
      this.state.myChar.powerstats.speed,
      this.state.enemy.powerstats.speed
    );
    this.setState({ mount: true });
  };

  render() {
    return (
      <div className="displayBlock">
        {this.state.flag === 1 || this.state.flag === 2 ? (
          this.state.flag === 1 ? (
            <div class="pop--bg">
              <img class="pop--win" src={winPopUp} alt="Winning" />
              <p class="pop-text">You collected more allies!</p>
              <button
                className="circle--typo btn btn-link"
                onClick={this.props.handlerCUnmount}
              >
                Next challenge
              </button>
            </div>
          ) : (
            <div>
              <div class="pop--bg">
                <img class="pop--win" src={tryAgain} alt="tryAgain" />
              </div>
              <button
                className="circle--typo btn btn-link"
                onClick={this.props.handlerCUnmount}
              >
                Next challenge
              </button>
            </div>
          )
        ) : (
          <div>
            <div className="avatars--container ">
              <div className="avatars--row">
                <h1 className="avatars_h1">{this.state.myChar.name} </h1>
                <div className="avatars_col ">
                  <img
                    className="choosen_img_game"
                    src={this.state.myChar.image.url}
                    alt="myChar"
                  />
                  <div className="avatars--power">
                    <span> {this.state.myChar.powerstats.intelligence}</span>
                    <br></br>
                    <span> {this.state.myChar.powerstats.strength}</span>
                    <br></br>
                    <span> {this.state.myChar.powerstats.speed}</span>
                    <br></br>
                  </div>
                </div>
              </div>
              <p className="avatars_p">vs</p>
              <div className="avatars--row">
                <h1 className="avatars_h1">{this.state.enemy.name} </h1>
                <div className="avatars_col">
                  <img
                    className="choosen_img_game"
                    src={this.state.enemy.image.url}
                    alt="myChar"
                  />
                  <div className="avatars--power">
                    <span> {this.state.enemy.powerstats.intelligence}</span>
                    <br></br>
                    <span> {this.state.enemy.powerstats.strength}</span>
                    <br></br>
                    <span> {this.state.enemy.powerstats.speed}</span>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>

            <div className="button--compare_wrap">
              <button
                className="circle--typo btn btn-link Buttons"
                onClick={this.getIntelligence}
              >
                Intelligence
              </button>
              <button
                className="circle--typo btn btn-link Buttons"
                onClick={this.getStrength}
              >
                Strength
              </button>
              <button
                className="circle--typo btn btn-link Buttons"
                onClick={this.getStrength}
              >
                Speed
              </button>
            </div>

            <div className="allies--wrapper ">
              {this.props.myAlliesUrl
                ? this.props.myAlliesUrl.map((item, index) => (
                    <img key={index} src={item} alt="my allies" />
                  ))
                : null}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Compare;
