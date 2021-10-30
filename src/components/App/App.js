import { Component } from 'react'

import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import TodoList from '../TodoList'
import ItemStatusFilter from '../ItemStatusFilter'
import ItemAddForm from '../ItemAddForm'

import './App.css'

export default class App extends Component {
  maxId = 0

  state = {
    items: [
      this.createItem('Drink Coffee'),
      this.createItem('Make Awesome App'),
      this.createItem('Have a lunch'),
    ],
    filter: 'all',
    search: '',
  }

  createItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    }
  }

  getIndexById(arr, id) {
    return arr.findIndex((el) => el.id === id)
  }

  deleteItem = (id) => {
    this.setState(({ items }) => {
      const idx = this.getIndexById(items, id)
      return {
        items: [...items.slice(0, idx), ...items.slice(idx + 1)],
      }
    })
  }

  addItem = (label) => {
    this.setState(({ items }) => {
      const item = this.createItem(label)
      return {
        items: [...items, item],
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const i = this.getIndexById(arr, id)
    const item = { ...arr[i], [propName]: !arr[i][propName] }

    return [...arr.slice(0, i), item, ...arr.slice(i + 1)]
  }

  toggleImportant = (id) => {
    this.setState(({ items }) => {
      return {
        items: this.toggleProperty(items, id, 'important'),
      }
    })
  }

  toggleDone = (id) => {
    this.setState(({ items }) => {
      return {
        items: this.toggleProperty(items, id, 'done'),
      }
    })
  }

  onSearchChange = (search) => {
    this.setState({ search })
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  searchItems(items, search) {
    if (search.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
    })
  }

  filterItems(items, filter) {
    switch (filter) {
      case 'active':
        return items.filter((item) => !item.done)
      case 'done':
        return items.filter((item) => item.done)
      case 'all':
      default:
        return items
    }
  }

  render() {
    const { items, search, filter } = this.state

    const visibleItems = this.searchItems(
      this.filterItems(items, filter),
      search
    )

    const doneCount = items.filter((el) => el.done).length
    const todoCount = items.length - doneCount

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />

        <div className="top-panel d-flex my-3">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>

        <TodoList
          items={visibleItems}
          onDeleted={this.deleteItem}
          toggleImportant={this.toggleImportant}
          toggleDone={this.toggleDone}
        />

        <ItemAddForm addItem={this.addItem} />
      </div>
    )
  }
}
