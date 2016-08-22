var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');





var PageHeader = React.createClass({
  render: function(props){
    return (
      <div id="header">
            <h1>{this.props.title}</h1>
            <p>{this.props.subtitle}</p>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
        title: state.title,
        subtitle: state.subtitle
    };
};

var Container = connect(mapStateToProps)(PageHeader);

module.exports = Container;