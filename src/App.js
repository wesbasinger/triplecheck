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
    if (this.props.maskIndex === 0) {
      return <span>*</span>
    } else {
      return(
        <span>{this.props.a}</span>
      )
    }
  }
});

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

var Triple = React.createClass({

  render: function() {

    return(
      <div>
        <ADisplay a={this.props.curr[0]} maskIndex={this.props.maskIndex}/>
        <BDisplay b={this.props.curr[1]} maskIndex={this.props.maskIndex}/>
        <CDisplay c={this.props.curr[2]} maskIndex={this.props.maskIndex}/>
      </div>
    )
  }
});

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
})

var App = React.createClass({

  getInitialState: function() {
    return {
      score: 0,
      triples: [],
      curr: "",
      maskIndex: null
    }
  },

  componentWillMount: function() {
    this.setState({triples: triples});
  },

  componentDidMount: function() {
    this.setState({curr: this.state.triples.shift(), maskIndex: this.rand()})
  },

  rand: function() {
    return Math.floor(Math.random() * (2));
  },

  handleCheck: function(missingValue) {
    if (Number(missingValue) === this.state.curr[this.state.maskIndex]) {
      console.log("Got it!");
    } else {
      console.log("Nope, try again!");
    }
  },

  render: function() {
    return(
      <div>
        <Points score={this.state.score}/>
        <Triple curr={this.state.curr} maskIndex={this.state.maskIndex}/>
        <InputBar onCheck={this.handleCheck}/>
      </div>
    )
  }
})

module.exports = App;
