import { Component } from 'react'

import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner'

import './item-list.css'

export default class ItemList extends Component {
  swapiService = new SwapiService()

  state = {
    peopleList: null,
  }

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({
        peopleList,
      })
    })
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          role="button"
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      )
    })
  }

  render() {
    const { peopleList } = this.state

    if (!peopleList) {
      return <Spinner />
    }

    const items = this.renderItems(peopleList)

    return (
      <div className="card border-secondary">
        <div className="card-body">
          <ul className="list-group list-group-flush">{items}</ul>
        </div>
      </div>
    )
  }
}
