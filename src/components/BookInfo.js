import React, { Component }  from 'react'
import './../css/App.css'
import PropTypes from 'prop-types'
import Selectshelf from './Selectshelf'

class BookInfo extends Component {
  static propTypes = {
    books: PropTypes.object.isRequired,
    ChangeShelf: PropTypes.func.isRequired
  }

  render(){
    const { books , ChangeShelf } = this.props
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193,
            backgroundImage:'url(' + books.imageLinks.thumbnail + ')'}}>
          </div>
          <Selectshelf
          books = {books}
          ChangeShelf= {ChangeShelf}
          />
        </div>
        <div className="book-title">{books.title}</div>
        <div className="book-authors">{books.authors}</div>
      </div>

    )
  }
}

export default BookInfo
