import React, { Component }  from 'react'
import './../css/App.css'
import PropTypes from 'prop-types'
import If from './../If'
import BookInfo from './BookInfo'

class ListBookContent extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    ChangeShelf: PropTypes.func.isRequired
  }

  render(){
    const { books , ChangeShelf } = this.props
    const rows = [
        { shelf: 'currentlyReading', books },
        { shelf: 'wantToRead', books },
        { shelf: 'read', books }
      ];
    return(
        <div className="list-books-content">
            <div className="bookshelf">
                {rows.map((rows) => (
                    <div key={rows.shelf} >  
                    <h2 className="bookshelf-title">{rows.shelf}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books.map((books) => (
                                <div key = {books.id}>
                                    <If test ={books.shelf === rows.shelf}>
                                    <li >
                                        <BookInfo
                                        books={books}
                                        ChangeShelf= {ChangeShelf}
                                        />
                                    </li>
                                    </If>
                                </div>
                                ))}
                            </ol>
                        </div>
                    </div>
                ))}  
            </div>
        </div>
    )
  }
}

export default ListBookContent
