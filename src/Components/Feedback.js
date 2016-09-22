var React = require('react');

var Feedback = React.createClass({
  render: function() {
    return (
      <div>
       {this.props.feedback}
      </div>
    )
  }
})

module.exports = Feedback;
