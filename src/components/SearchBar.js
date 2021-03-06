import React, { Component }  from 'react'
import './../css/App.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBar extends Component {
  static propTypes = {
    updateQuery: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired
  }
  render() {
    const { updateQuery, query } = this.props
    return (
      <div className="search-books-bar">
        <Link className="close-search" to='/'>Close</Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
        </div>
)
}
}

export default SearchBar
