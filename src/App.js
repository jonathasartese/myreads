import React, {Component } from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './css/App.css'
import SearchPage from './components/SearchPage'
import ListBooks from './components/ListBooks'
import { Route } from 'react-router-dom'


class BooksApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      query: '',
      search: []
    }
    this.ChangeShelf = this.ChangeShelf.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    if(query){
      BooksAPI.search(query).then((search) => {
        this.setState({ search })
      })
    }
  }

  ChangeShelf = (book, targetshelf) => {
      BooksAPI.update(book, targetshelf).then((book)=>{
        book.shelf = targetshelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])
      })
    )})
  }

  render() {
    const { books, search } = this.state;
    return (
      <div className="app">
      <Route exact path='/' render={() => (
          <ListBooks
          books={books}
          ChangeShelf= {this.ChangeShelf}
          />
      )}/>
      <Route path='/search' render={() => (
          <SearchPage
          books={search}
          updateQuery= {this.updateQuery}
          query={this.state.query}
          ChangeShelf= {this.ChangeShelf}
          />
      )}/>
      </div>
    )
  }
}

export default BooksApp
