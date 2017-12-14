import React, { Component }  from 'react'
import './../css/App.css'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import BookInfo from './BookInfo'
import SearchInput from './SearchBar'

class SearchPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateQuery: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    ChangeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books , updateQuery, query, ChangeShelf } = this.props
    let nofound

    let showingBooks
    if(query){
      if(books.error){
        showingBooks = []
        nofound = "Your search '"+ query + "' did not match any book."
      }else {
        nofound =""
        const match = new RegExp(escapeRegExp(query), 'i')
        showingBooks = books.filter((books) => match.test(books.title + books.authors))
        showingBooks.sort(sortBy('name'))
      }
    }else{
      showingBooks = []
    }

    return (
    <div className="search-books">
      <SearchInput
      updateQuery= {updateQuery}
      query={query}
      />
      <div className="search-books-results">
        <h3>{nofound}</h3>
        <ol className="books-grid">
        {showingBooks.map((books) => (
            <li key = {books.id}>
              <BookInfo
              books={books}
              ChangeShelf= {ChangeShelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
)}}

export default SearchPage
