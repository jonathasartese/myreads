import React, { Component }  from 'react'
import './../css/App.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListBookContent from './ListBookContent'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    ChangeShelf: PropTypes.func.isRequired
  }

  render(){
    const { books , ChangeShelf} = this.props
    return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
        </div>
        <ListBookContent 
        books={books}
        ChangeShelf= {ChangeShelf}
        />
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
  }
}

export default ListBooks
