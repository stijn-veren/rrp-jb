import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BookListItem from '../book-list-item'
import { withBookstoreService } from '../components/hoc'
import { booksLoaded } from '../actions'

import './book-list.css'

class BookList extends Component {
  componentDidMount() {
    // 1. receive data
    const { bookstoreService } = this.props
    const data = bookstoreService.getBooks()
    console.log(data)

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

// const mapStateToProps = (state) => {
//   return {
//     books: state.books,
//   }
// }
const mapStateToProps = ({ books }) => {
  return { books }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      booksLoaded,
    },
    dispatch
  )
}

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
)
