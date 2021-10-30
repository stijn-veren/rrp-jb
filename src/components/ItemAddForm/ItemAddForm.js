import { Component } from 'react'

import './ItemAddForm.css'

export default class ItemAddForm extends Component {
  state = {
    label: '',
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.label)
    this.setState({
      label: '',
    })
  }

  render() {
    return (
      <form className="item-add-form d-flex my-3" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control mr-1"
          placeholder={this.placeholderText}
          aria-label={this.placeholderText}
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary" id="item-add-button">
          Add Item
        </button>
      </form>
    )
  }
}
