import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getData, getCurrentCity } from "../api/api";
import AllCities from "./AllCities";

class App extends Component {
  state = {
    data: [],
    currentCity: []
  };

  componentDidMount() {
    this.populateData();
  }

  populateData = () => {
    let data = [];
    getData().then(res => {
      data = res.data.slice(0, 5);
      const locations = [];
      for (let location of data) {
        let {
          Key,
          Country,
          AdministrativeArea: { EnglishName }
        } = location;
        let id = Key;
        let country = Country.EnglishName;
        let city = EnglishName;
        locations.push({ id, country, city });
      }
      this.setState({ data: locations }, function() {
        console.log(this.state.data);
      });
    });
  };

  getCurrentCity = id => {
    const { history } = this.props;
    const { data } = this.state;
    const currentCity = data.find(location => location.id === id);
    const {country, city} = currentCity;
    getCurrentCity(id).then(res => {
      const { data } = res;
      this.setState({ currentCity: data }, function() {
        console.log(this.state.currentCity);
        history.push({
          pathname: `/city/${id}`,
          state: { currentCity: this.state.currentCity, country, city }
        });
      });
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <div className="content">
          <AllCities data={data} getCurrentCity={this.getCurrentCity} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
