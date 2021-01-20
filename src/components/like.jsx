import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

export default class Like extends Component {
  state = {
    liked: false
  }
  getIcon= () => {

    return this.state.liked===false ? farHeart : faHeart
  }
  handleClick = () => {
    let liked = !(this.state.liked);
    console.log("test")
    this.setState({liked})
  }
  render() {
    return (
       <FontAwesomeIcon icon={ this.getIcon() } onClick={this.handleClick} />
    );
  }
}
