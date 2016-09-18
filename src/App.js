var React = require('react');

var triples = require('./triples');

var App = React.createClass({

  getInitialState: function() {
    return {
      score: 0,
      triples: []
    }
  },

  componentDidMount: function() {
    this.setState({triples: triples});
  },


  render: function() {
    return (
      <div>Hello World!</div>
    )
  }
})

module.exports = App;
