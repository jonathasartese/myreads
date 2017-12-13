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
    query: PropTypes.string.isRequired
  }

  render() {
    const { books , updateQuery, query } = this.props
    //const { query } = this.state
    console.log(books)
    console.log(updateQuery)
    console.log(query)

    let showingBooks
    if (query) {
      if(books.error !== "empty query"){
        const match = new RegExp(escapeRegExp(query), 'i')
        showingBooks = books.filter((books) => match.test(books.title + books.authors))
        showingBooks.sort(sortBy('name'))
      }
    } else {
      showingBooks = []
    }


    return (
    <div className="search-books">
      <SearchInput
      updateQuery= {updateQuery}
      query={query}
      />
      <div className="search-books-results">
        <ol className="books-grid">
        {showingBooks.map((books) => (
            <li key = {books.id}>
              <BookInfo
              books={books}
              />
            </li>
          ))}

        </ol>
      </div>
    </div>
)
}
}

export default SearchPage
