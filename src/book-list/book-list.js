import { Component } from 'react'
import { connect } from 'react-redux'

import BookListItem from '../book-list-item'
import { withBookstoreService } from '../components/hoc'
import { booksLoaded } from '../actions'
import { compose } from '../utils'

import './book-list.css'

class BookList extends Component {
  componentDidMount() {
    // 1. receive data
    const { bookstoreService } = this.props
    const data = bookstoreService.getBooks()

    // 2. dispatch action to store
    this.props.booksLoaded(data)
  }

  render() {
    const { books } = this.props
    return (
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = ({ books }) => {
  return { books }
}

const mapDispatchToProps = { booksLoaded }

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList)
