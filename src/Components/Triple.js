var React = require('react');

var ADisplay = require('./ADisplay');
var BDisplay = require('./BDisplay');
var CDisplay = require('./CDisplay');

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

module.exports = Triple;
