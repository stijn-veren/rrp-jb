import { Component } from 'react'

import ItemList from '../item-list'
import PersonDetails from '../person-details'
import ErrorIndicator from '../error-indicator'

import './people-page.css'

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 3,
    hasError: false,
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    })
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className="row">
        <div className="col-12 col-md-5 mt-4">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-12 col-md-7 my-4">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    )
  }
}
