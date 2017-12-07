import React, { Component }  from 'react'
import './../css/App.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import If from './../If'




class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  }


  render() {
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
            <h2 className="bookshelf-title"></h2>
            {rows.map((rows) => (
              <div>
                <p>{rows.shelf} </p>
                {books.map((books) => (
                  <p>{books.shelf} </p>
                ))}
              </div>
            ))}
                <If test ={books.shelf == 'read'}>
                  <div className="bookshelf-books">
                      <ol className="books-grid">
                      {books.map((books) => (
                          <li key = {books.id}>
                            <div className="book">
                              <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:'url(' + books.imageLinks.thumbnail + ')'}}></div>
                                <div className="book-shelf-changer">
                                  <select>
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>
                              <div className="book-title">{books.title}</div>
                              <div className="book-authors">{books.authors}</div>
                            </div>

                          </li>
                        ))}
                      </ol>
                  </div>
                </If>
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
