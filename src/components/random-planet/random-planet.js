import React, { Component } from 'react'

import SwapiService from '../../services/swapi-service'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'
import PlanetView from '../planet-view'

import './random-planet.css'

export default class RandomPlanet extends Component {
  swapiService = new SwapiService()

  state = {
    planet: {},
    loading: true,
    error: false,
  }

  componentDidMount() {
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, 1500)
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false })
  }

  onError = (err) => {
    this.setState({
      error: true,
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 59) + 1
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

    return (
      <div className="card border-secondary">
        <div className="card-body">
          <div className="row">{content}</div>
        </div>
      </div>
    )
  }
}
