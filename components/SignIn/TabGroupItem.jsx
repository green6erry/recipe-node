var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');




var TabGroupItem = React.createClass{(
  render: function(props){
    return (
      <li className={this.props.classes}>
        <a href={this.props.link}>{this.props.title}</a>
      </li>
      );
    }
)};

var mapStateToProps = function(state, props) {
    return {
        classes: state.classes,
        link: state.link,
        title: state.title
    };
};

var Container = connect(mapStateToProps)(TabGroupItem);

module.exports = Container;