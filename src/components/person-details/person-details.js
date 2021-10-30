import { Component } from 'react'

import './person-details.css'

export default class PersonDetails extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="card border-secondary">
            <div className="card-header">R2-D2</div>
            <div className="card-body">
              <div className="row">
                <div className="col col-sm-4">
                  <img
                    alt=""
                    className="img-fluid"
                    src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
                  />
                </div>

                <div className="col col-sm-8">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col col-sm-5 col-md-6">
                          <span className="term">Gender</span>
                        </div>
                        <div className="col col-sm-7 col-md-6">
                          <span>male</span>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col col-sm-5 col-md-6">
                          <span className="term">Birth Year</span>
                        </div>
                        <div className="col col-sm-7 col-md-6">
                          <span>43</span>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col col-sm-5 col-md-6">
                          <span className="term">Eye Color</span>
                        </div>
                        <div className="col col-sm-7 col-md-6">
                          <span>red</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
