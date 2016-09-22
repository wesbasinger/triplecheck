var React = require('react');

var InputBar = React.createClass({

  getInitialState: function() {
    return {
      userInput: ""
    }
  },

  changeHandler: function(e) {
    this.setState({userInput: e.target.value})
  },

  handleClick: function(e) {
    this.setState({userInput: ""});
    this.props.onCheck(this.state.userInput);
  },

  render: function() {
    return(
      <div>
        <input type="number" required="yes" value={this.state.userInput} onChange={this.changeHandler} />
        <button onClick={this.handleClick}>Check</button>
      </div>
    )
  }
});

module.exports = InputBar;
