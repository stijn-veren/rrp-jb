import { Component } from 'react'

import './TodoListItem.css'

export default class TodoListItem extends Component {
  render() {
    const { label, important = false } = this.props

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal',
    }

    return (
      <span className="todo-list-item">
        <span
          className="todo-list-item-label"
          style={style}
          onClick={() => console.log(`Done: ${label}`)}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fas fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="far fa-trash-alt" />
        </button>
      </span>
    )
  }
}
