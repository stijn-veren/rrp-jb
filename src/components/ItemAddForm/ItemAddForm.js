import { Component } from 'react'

import './ItemAddForm.css'

export default class ItemAddForm extends Component {
  render() {
    const placeholderText = 'What needs to be done'
    return (
      <form className="item-add-form d-flex">
        <input
          type="text"
          className="form-control mr-1"
          placeholder={placeholderText}
          aria-label={placeholderText}
          aria-describedby="item-add-button"
          onChange={this.onLabelChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="item-add-button"
          onClick={() => this.props.onItemAdded('Hello World')}
        >
          Add Item
        </button>
      </form>
    )
  }
}
