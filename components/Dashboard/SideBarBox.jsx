var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');

var SideBarBox = React.createClass(){
  render: function(props){
    return (
      <div id="sidecontent"+{this.props.id} className="cf"><span>{this.props.content}</span></div>
  }
}


var mapStateToProps = function(state, props) {
    return {
        id: state.id,
        content: state.content
    };
};

var Container = connect(mapStateToProps)(SideBarBox);

module.exports = Container;