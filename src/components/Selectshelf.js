import React, { Component }  from 'react'
import './../css/App.css'
import PropTypes from 'prop-types'

class Selectshelf extends Component {

  static propTypes = {
    shelf: PropTypes.string.isRequired
  }

  //componentDidMount(){}
  constructor(props) {
    super(props);
    this.state = {value: props.shelf};

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render(){
      const {shelf} = this.props
      return(
        <form >
          <div className="book-shelf-changer">
            <select value={this.state.value} onChange={this.handleChange}>
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
