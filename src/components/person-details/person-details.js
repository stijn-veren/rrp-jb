import { Component } from 'react'
import SwapiService from '../../services/swapi-service'

import './person-details.css'

export default class PersonDetails extends Component {
  swapiService = new SwapiService()

  state = {
    person: null,
  }

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson()
    }
  }

  updatePerson() {
    const { personId } = this.props
    if (!personId) {
      return
    }

    this.swapiService.getPerson(personId).then((person) => {
      this.setState({ person })
    })
  }

  render() {
    if (!this.state.person) {
      return <span>Select a person from a list</span>
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person

    return (
      <div className="row">
        <div className="col">
          <div className="card border-secondary">
            <div className="card-header">
              {name} {this.props.personId}
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col col-sm-4">
                  <img
                    alt=""
                    className="img-fluid"
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
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
                          <span>{gender}</span>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col col-sm-5 col-md-6">
                          <span className="term">Birth Year</span>
                        </div>
                        <div className="col col-sm-7 col-md-6">
                          <span>{birthYear}</span>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col col-sm-5 col-md-6">
                          <span className="term">Eye Color</span>
                        </div>
                        <div className="col col-sm-7 col-md-6">
                          <span>{eyeColor}</span>
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
