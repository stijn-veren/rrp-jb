import { Component } from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorBoundry from '../error-boundry'
import SwapiService from '../../services/swapi-service'
import DummySwapiService from '../../services/dummy-swapi-service'
import Row from '../row'

import { SwapiServiceProvider } from '../swapi-service-context'

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from '../sw-components'

import './app.css'

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    swapiService: new DummySwapiService(),
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService

      return {
        swapiService: new Service(),
      }
    })
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      }
    })
  }

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />

            {planet}

            <Row left={<PersonList />} right={<PersonDetails itemId={11} />} />

            <Row left={<PlanetList />} right={<PlanetDetails itemId={5} />} />

            <Row
              left={<StarshipList />}
              right={<StarshipDetails itemId={9} />}
            />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
}
