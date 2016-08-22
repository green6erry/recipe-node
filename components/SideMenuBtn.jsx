var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');





var SideMenuBtn = React.createClass({
  render: function(props) {
    return (
        <label className={this.props.classes} for={this.props.sideToggleId}>
          {this.props.name}
        </label>
    );
  }
});


var mapStateToProps = function(state, props) {
    return {
        classes: state.classes,
        sideToggleId: state.sideToggleId,
        name: state.name

    };
};

var Container = connect(mapStateToProps)(SideMenuBtn);

module.exports = Container;