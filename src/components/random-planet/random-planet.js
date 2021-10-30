import React, { Component } from 'react'

import SwapiService from '../../services/swapi-service'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'

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

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet

  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <h4 class="text-center">{name}</h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <img
            alt=""
            className="img-fluid"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          />
        </div>
        <div className="col-8 ps-3">
          <div className="row">
            <div className="col">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-12 col-sm-auto col-md-5">
                      <span className="term fw-bold">Population</span>
                    </div>
                    <div className="col col-sm-auto col-md-7">
                      <span>{population}</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-12 col-sm-auto col-md-5">
                      <span className="term fw-bold">Rotation Period</span>
                    </div>
                    <div className="col col-sm-auto col-md-7">
                      <span>{rotationPeriod}</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-12 col-sm-auto col-md-5">
                      <span className="term fw-bold">Diameter</span>
                    </div>
                    <div className="col col-sm-auto col-md-7">
                      <span>{diameter}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
