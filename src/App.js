import React, {Component } from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './css/App.css'
import SearchPage from './components/SearchPage'
import ListBooks from './components/ListBooks'
import { Route } from 'react-router-dom'


class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
          <ListBooks />
      )}/>
      <Route path='/search' render={() => (
          <SearchPage books={this.state.books}/>
      )}/>
      </div>
    )
  }
}

export default BooksApp
