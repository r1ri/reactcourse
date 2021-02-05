import React, { Component } from 'react'
import _ from 'lodash';

export default class TableBody extends Component {
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => <tr>
          {columns.map(c => <td>{_.get(item, c.path)}</td>)}
        </tr>)}
      </tbody> 
    );
  }
}
