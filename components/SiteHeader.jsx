var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');




var SiteHeader = React.createClass({
  render: function() {
    return (
      <div id="menuwrap">
        <div id="menu"><span>recipe log</span></div>
      </div>
    );
  }
})


var Container = connect()(SiteHeader);

module.exports = Container;