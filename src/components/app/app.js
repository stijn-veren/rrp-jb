import { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from '../item-list'
import PersonDetails from '../person-details'

import './app.css'

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: 5,
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      }
    })
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    })
  }

  render() {
    const showPlanet = this.state.showRandomPlanet
    const planet = showPlanet ? <RandomPlanet /> : null
    const buttonColor = showPlanet ? 'secondary' : 'warning'
    const buttonText = showPlanet ? ' off' : ' on'

    return (
      <div className="container">
        <Header />

        {planet}

        <div className="d-grid mt-4">
          <button
            type="button"
            className={`btn btn-${buttonColor}`}
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
            <span className="text-danger">{buttonText}</span>
          </button>
        </div>

        <div className="row">
          <div className="col-12 col-md-5 mt-4">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-12 col-md-7 my-4">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    )
  }
}
