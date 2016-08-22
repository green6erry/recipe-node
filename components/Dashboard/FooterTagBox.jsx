var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');




var FooterTagBox = React.createClass({
  render: function(props){
    return (
      <div className="boxi">{this.props.content}</div>
      );
  }
})


var mapStateToProps = function(state, props) {
    return {
        content: state.content
    };
};

var Container = connect(mapStateToProps)(FooterTagBox);

module.exports = Container;