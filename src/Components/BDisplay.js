var React = require('react');

var BDisplay = React.createClass({
  render: function() {
    if (this.props.maskIndex === 1) {
      return <span>*</span>
    } else {
      return(
        <span>{this.props.b}</span>
      )
    }
  }
});

module.exports = BDisplay;
