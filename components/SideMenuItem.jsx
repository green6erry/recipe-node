var React = require('react');
var connect = require('react-redux').connect;


var actions = require('../js/actions');



var SideMenuItem = React.createClass({
    render: function(props){
      return (
        <li>
          <a href={this.props.link} data-value={this.props.dataValue}>{this.props.title}</a>
        </li>

      );
    }
});


var Container = connect()(SideMenuItem);

module.exports = Container;