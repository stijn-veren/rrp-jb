import { Component } from 'react'

import './item-list.css'

export default class ItemList extends Component {
  render() {
    return (
      <div class="card border-secondary">
        <div class="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Luke Skywalker</li>
            <li className="list-group-item">Darth Vader</li>
            <li className="list-group-item">R2-D2</li>
          </ul>
        </div>
      </div>
    )
  }
}
