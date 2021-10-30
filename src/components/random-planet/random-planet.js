import React, { Component } from 'react'

import SwapiService from '../../services/swapi-service'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'
import PlanetView from './planet-view'

import './random-planet.css'

export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false,
  }

  constructor() {
    super()
    this.updatePlanet()
  }

  swapiService = new SwapiService()

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false })
  }

  onError = (err) => {
    this.setState({
      error: true,
    })
  }

  updatePlanet() {
    // const id = Math.floor(Math.random() * 60)
    const id = 15
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const { planet, loading, error } = this.state

    const content = error ? (
      <ErrorIndicator />
    ) : loading ? (
      <Spinner />
    ) : (
      <PlanetView planet={planet} />
    )

    return <div className="row">{content}</div>
  }
}
