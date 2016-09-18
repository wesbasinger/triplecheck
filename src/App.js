var React = require('react');

var triples = require('./triples');

var Points = React.createClass({
  render: function() {
    return(
      <div>Points: {this.props.score}</div>
    )
  }
});

var ADisplay = React.createClass({
  render: function() {
    return(
      <span>A</span>
    )
  }
});

var BDisplay = React.createClass({
  render: function() {
    return(
      <span>B</span>
    )
  }
});

var CDisplay = React.createClass({
  render: function() {
    return(
      <span>C</span>
    )
  }
});

var Triple = React.createClass({
  render: function() {
    return(
      <div>
        <ADisplay />
        <BDisplay />
        <CDisplay />
      </div>
    )
  }
});

var InputBar = React.createClass({
  render: function() {
    return(
      <div>
        <input type="number" required="yes" value="" onChange={this.changeHandler} />
        <button onClick={this.handleClick}>Check</button>
      </div>
    )
  }
})

var App = React.createClass({

  getInitialState: function() {
    return {
      score: 0,
      triples: [],
      curr: ""
    }
  },

  componentWillMount: function() {
    this.setState({triples: triples});
  },

  componentDidMount: function() {
    this.setState({curr: this.state.triples.shift()})
  },

  render: function() {
    return(
      <div>
        <Points score={this.state.score}/>
        <Triple />
        <InputBar />
      </div>
    )
  }
})

module.exports = App;
