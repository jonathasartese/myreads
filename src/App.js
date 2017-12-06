import React from 'react'
// import * as BooksAPI from './utils/BooksAPI'
import './css/App.css'
import SearchPage from './components/SearchPage'
import ListBooks from './components/ListBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
          <ListBooks />
      )}/>
      <Route path='/search' render={() => (
          <SearchPage />
      )}/>

      </div>
    )
  }
}

export default BooksApp
