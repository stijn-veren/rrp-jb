import { Component } from 'react'

import SwapiService from '../../services/swapi-service'

import './random-planet.css'

export default class RandomPlanet extends Component {
  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  }

  constructor() {
    super()
    this.updatePlanet()
  }

  swapiService = new SwapiService()

  updatePlanet() {
    const id = Math.floor(Math.random() * 60)
    this.swapiService.getPlanet(id).then((planet) => {
      this.setState({
        id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
      })
    })
  }

  render() {
    const { id, name, population, rotationPeriod, diameter } = this.state

    return (
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
              <h4>{name}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col col-md-5">
                      <span className="term">Population</span>
                    </div>
                    <div className="col col-md-7">
                      <span>{population}</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col col-md-5">
                      <span className="term">Rotation Period</span>
                    </div>
                    <div className="col col-md-7">
                      <span>{rotationPeriod}</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col col-md-5">
                      <span className="term">Diameter</span>
                    </div>
                    <div className="col col-md-7">
                      <span>{diameter}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
