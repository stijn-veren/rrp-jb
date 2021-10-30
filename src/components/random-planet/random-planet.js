import { Component } from 'react'

import './random-planet.css'

export default class RandomPlanet extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <img
            alt=""
            className="img-fluid"
            src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
          />
        </div>
        <div className="col-8 ps-3">
          <div className="row">
            <div className="col">
              <h4>Planet Name</h4>
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
                      <span>123124</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col col-md-5">
                      <span className="term">Rotation Period</span>
                    </div>
                    <div className="col col-md-7">
                      <span>43</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col col-md-5">
                      <span className="term">Diameter</span>
                    </div>
                    <div className="col col-md-7">
                      <span>100</span>
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
