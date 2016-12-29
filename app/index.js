'use strict';

import styles from './Div.css';
var React = require('react');
var ReactDOM = require('react-dom');

var ExampleComp = React.createClass({
  render: function(){
    return (
      <div className="texter">
      Div inside div
      </div>
    )
  }
});

var Entry = React.createClass({
  render: function(){
    return (
      <div className="myDiv">
        <ExampleComp />
      </div>
    )
  }
});

ReactDOM.render(<Entry />, document.getElementById('content'));
