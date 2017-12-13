import React, { Component }  from 'react'
import './../css/App.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import If from './../If'
import BookInfo from './BookInfo'

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render(){
    const { books } = this.props
    const rows = [
      { shelf: 'currentlyReading', books },
      { shelf: 'wantToRead', books },
      { shelf: 'read', books }
    ];

    return (

    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">
            {rows.map((rows) => (
              <div key={rows.shelf} >
                    <p>{rows.shelf}</p>

                  {books.map((books) => (
                  <div>
                    <If test ={books.shelf === rows.shelf}>

                        <div className="bookshelf-books">
                          <ol className="books-grid">
                            <li key = {books.id}>
                              <BookInfo books={books}/>
                            </li>
                        </ol>
                      </div>
                    </If>
                  </div>
                  ))}
              </div>

            ))}
            </h2>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
  }
}

export default ListBooks
