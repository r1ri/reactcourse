import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

export default class Like extends Component {
  state = {
    liked: false
  }

  render() {
    let icon = this.props.liked===false ? farHeart : faHeart
    return (
      <FontAwesomeIcon icon={ icon } style={{cursor: 'pointer'}} onClick={this.props.onLike} />
    );
  }
}
