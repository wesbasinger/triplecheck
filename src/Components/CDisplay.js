var React = require('react');

var CDisplay = React.createClass({
  render: function() {
    if (this.props.maskIndex === 2) {
      return <span>*</span>
    } else {
      return(
        <span>{this.props.c}</span>
      )
    }
  }
});

module.exports = CDisplay;
