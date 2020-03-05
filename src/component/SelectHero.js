import React, { Component } from "react";
import axios from "axios";
import HeroList from "./HeroList";
class SelectHero extends Component {
  state = {
    id_list: [589, 720, 165, 638, 309, 356, 107, 238, 643],
    superHero: [],
    selectHeroMount: false,
    selectedHero: ""
  };

  componentDidMount() {
    this.state.id_list.map(element => {
      return axios
        .get(`http://superheroapi.com/api.php/10158157868173814/${element}`)
        .then(response => {
          let temp = response.data;
          this.setState({
            superHero: [...this.state.superHero, temp],
            selectedHero: temp.id
          });
        })
        .catch(error => console.error(`something went wrong: ${error}`));
    });
  }

  selectHeroOnClick = chosenHero => {
    this.setState({ selectedHero: chosenHero.id, selectHeroMount: true });
  };

  render() {
    return (
      <div>
        {this.state.superHero.map((item, index) => (
          <HeroList key={index} obj={item} onClick={this.selectHeroOnClick} />
        ))}
      </div>
    );
  }
}
export default SelectHero;