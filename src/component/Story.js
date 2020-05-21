import React, { Component } from "react";
import axios from "axios";
import "./scss/Story.scss";
import SelectHero from "./SelectHero";

class Story extends Component {
  state = {
    id_list: [589, 720, 165, 638, 309, 356, 107, 238],
    superHero: [],
    selectedHero: "",
    mountHero: false,
    mountGame: false,
    ourHeroUrl: "",
    id_male: "",
    mountChoseMale: false,
  };
  componentDidMount = () => {
    this.state.id_list.map((element) => {
      return axios
        .get(`https://superheroapi.com/api.php/10158157868173814/${element}`)
        .then((response) => {
          let temp = response.data;
          this.setState({
            superHero: [...this.state.superHero, temp],
            selectedHero: temp.id,
            ourHeroUrl: temp.image.url,
          });
        })
        .catch((error) => console.error(`something went wrong: ${error}`));
    });
    return axios
      .get(`https://superheroapi.com/api.php/10158157868173814/498`)
      .then((response) => {
        this.setState({ id_male: response.data.image.url });
      })
      .catch((error) => console.error(`something went wrong: ${error}`));
  };
  selectHeroOnClick = (chosenHero) => {
    this.setState({ selectedHero: chosenHero.id });
    this.setState({
      id_list: this.state.id_list.filter(
        (item) => item !== parseInt(chosenHero.id)
      ),
      ourHeroUrl: chosenHero.image.url,
    });
    this.toggleMountGameMount();
  };
  toggleMountSelectHero = () => {
    this.setState({ mountHero: !this.state.mountHero });
  };

  toggleMountGameMount = () => {
    this.setState({ mountGame: !this.state.mountGame });
  };
  toggleMountChoseMale = () => {
    this.setState({ mountChoseMale: !this.state.mountChoseMale });
  };
  render() {
    return (
      <div>
        {this.state.mountHero === true ? (
          <SelectHero
            superHero={this.state.superHero}
            selectHeroOnClick={this.selectHeroOnClick}
            mountGame={this.state.mountGame}
            id_list={this.state.id_list}
            selectedHero={this.state.selectedHero}
            ourHeroUrl={this.state.ourHeroUrl}
            maleUrl={this.state.id_male}
            toggleMountChoseMale={this.toggleMountChoseMale}
            mountChoseMale={this.state.mountChoseMale}
          />
        ) : (
          <section className="start">
            <h2 className="start--title">Artechmis</h2>
            <div className="start--wrap container-fluid">
              <div className="eye--wrapper">
                <div className="robot--img" />
              </div>
            </div>
            <div className="wrapper ">
              <div className="start--typo slide_story">
                <span>You will never have a job in tech easily!</span>
              </div>
              <div className="circle--wrap">
                <button
                  type="button"
                  onClick={this.toggleMountSelectHero}
                  className="circle--typo btn btn-link"
                >
                  Choose a heroine
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}
export default Story;
