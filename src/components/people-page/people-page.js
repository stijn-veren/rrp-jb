import React, { Component } from 'react'

import ItemList from '../item-list'
import PersonDetails from '../person-details'
import ErrorBoundry from '../error-boundry'
import Row from '../row'

import './people-page.css'
import SwapiService from '../../services/swapi-service'

export default class PeoplePage extends Component {
  swapiService = new SwapiService()

  state = {
    selectedPerson: 3,
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson })
  }

  render() {
    const itemList = (
      <ErrorBoundry>
        <ItemList
          onItemSelected={this.onPersonSelected}
          getData={this.swapiService.getAllPeople}
        >
          {(i) => `${i.name} (${i.birthYear})`}
        </ItemList>
      </ErrorBoundry>
    )

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    )

    return <Row left={itemList} right={personDetails} />
  }
}
