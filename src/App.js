import React, {Component } from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './css/App.css'
import SearchPage from './components/SearchPage'
import ListBooks from './components/ListBooks'
import { Route } from 'react-router-dom'


class BooksApp extends Component {

  state = {
    books: [],
    query: '',
    search: []
  }


  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    BooksAPI.search(query).then((search) => {
      this.setState({ search  })
    })
  }
/*
  ChangeShelf(contact) {
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        contacts: state.contacts.concat([ contact ])
      }))
    })
  }
*/
  render() {
    const { books, query, search } = this.state;

    return (
      <div className="app">
      <Route exact path='/' render={() => (
          <ListBooks
          books={books}
          />
      )}/>
      <Route path='/search' render={() => (
          <SearchPage
          books={search}
          updateQuery= {this.updateQuery}
          query={this.state.query}
          />
      )}/>
      </div>
    )
  }
}

export default BooksApp
