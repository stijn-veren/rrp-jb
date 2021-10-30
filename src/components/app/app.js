import { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import ToggleButton from '../toggle-button'
import ErrorButton from '../error-button'
import ErrorIndicator from '../error-indicator'
import PeoplePage from '../people-page'

import './app.css'

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false,
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      }
    })
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className="container">
        <Header />

        {this.state.showRandomPlanet ? <RandomPlanet /> : null}

        <div className="row mt-4">
          <div className="col d-grid">
            <ToggleButton
              toggleRandomPlanet={this.toggleRandomPlanet}
              showPlanet={this.state.showRandomPlanet}
            />
          </div>
          <div className="col d-grid">
            <ErrorButton />
          </div>
        </div>

        <PeoplePage />
      </div>
    )
  }
}
