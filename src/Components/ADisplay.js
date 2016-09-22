var React = require('react');

var ADisplay = React.createClass({
  render: function() {
    if (this.props.maskIndex === 0) {
      return <span>*</span>
    } else {
      return(
        <span>{this.props.a}</span>
      )
    }
  }
});

module.exports = ADisplay;
