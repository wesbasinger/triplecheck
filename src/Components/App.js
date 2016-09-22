var React = require('react');

var triples = require('../triples');

var Feedback = require('./Feedback');
var Points = require('./Points');
var Triple = require('./Triple');
var InputBar = require('./InputBar');

var App = React.createClass({

  getInitialState: function() {
    return {
      score: 0,
      triples: [],
      curr: "",
      maskIndex: null,
      feedback: "Welcome to the game.  Guess the missing value in the Pythagorean triple.  Click to check your answer"
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

    var pleasantPhrases = [
      "Great job!",
      "You got it!",
      "Excellent!",
      "Another point for you!"
    ];

    var lessPleasantPhrases = [
      "Ooh, not quite.",
      "Try again.",
      "That's just wrong..."
    ]

    if (Number(missingValue) === this.state.curr[this.state.maskIndex]) {
      var currPoints = this.state.score;
      this.setState(
        {
          score: currPoints + 1,
          curr: this.state.triples.shift(),
          maskIndex: this.rand(),
          feedback: pleasantPhrases[Math.floor(Math.random() * pleasantPhrases.length)]
        }
      );
    } else {
      this.setState(
        {
          curr: this.state.triples.shift(),
          feedback: lessPleasantPhrases[Math.floor(Math.random() * lessPleasantPhrases.length)]
        }
      );
    }
  },

  render: function() {
    return(
      <div>
        <Feedback feedback={this.state.feedback} />
        <Points score={this.state.score}/>
        <Triple curr={this.state.curr} maskIndex={this.state.maskIndex}/>
        <InputBar onCheck={this.handleCheck}/>
      </div>
    )
  }
})

module.exports = App;
