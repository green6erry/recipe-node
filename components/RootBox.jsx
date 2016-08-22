var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');





var RootBox = React.createClass({
  render: function(props) {
    return (
      <div className="boxi" id={this.props.boxId}>
        {this.props.content}
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
        boxId: state.boxId,
        content: state.content
    };
};

var Container = connect(mapStateToProps)(RootBox);

module.exports = Container;