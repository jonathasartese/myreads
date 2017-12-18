import React, { Component }  from 'react'
import './../css/App.css'
import PropTypes from 'prop-types'

class Selectshelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    ChangeShelf: PropTypes.func.isRequired
  }

  state = {
    value: this.props.books.shelf
  }

  handleChange = (event) => {
      this.setState({value: event.target.value});
      this.props.ChangeShelf(this.props.books,event.target.value )
      
  }
  render(){
      return(
        <form >
          <div className="book-shelf-changer">
            <select value={this.state.value} onChange={this.handleChange} >
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </form>
      )}}

  export default Selectshelf
