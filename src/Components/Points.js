var React = require('react');

var Points = React.createClass({
  render: function() {
    return(
      <div>Points: {this.props.score}</div>
    )
  }
});

module.exports = Points;
