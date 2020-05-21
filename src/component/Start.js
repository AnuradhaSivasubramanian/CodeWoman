import React, { Component } from "react";
import "./scss/Global.scss";
import "./scss/start.scss";
import Story from "./Story";

class Start extends Component {
  state = {
    mountStory: false,
  };

  toggleStoryMount = () => {
    this.setState({ mountStory: !this.state.mountStory });
  };

  render() {
    return (
      <div>
        {this.state.mountStory === true ? (
          <Story />
        ) : (
          <section className="start">
            <h2 className="start--title">Artechmis</h2>
            <div className="start--wrap container-fluid">
              <div className="eye--wrapper ">
                <div className="eye--img"></div>
                <div className="eye--img_pupille"></div>
              </div>

              <div className="start--typo_wrap wrapper ">
                <p className="start--typo slide">
                  {" "}
                  Super <br></br>Heroine
                </p>
              </div>
              <div className="circle--wrap">
                <button
                  type="button"
                  onClick={this.toggleStoryMount}
                  className="btn from-right"
                >
                  Play the Game
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default Start;
