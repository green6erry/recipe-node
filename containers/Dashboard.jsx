var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');


var RootBoxesList = require('../components/RootBoxesList');



var Dashboard = React.createClass({
  render: function(props){
    return (
      <div id='content'>
          <RootBoxesList boxes={this.props.boxes} />
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
        boxes: state.boxes
    }
};

var Container = connect(mapStateToProps)(Dashboard);

module.exports = Container;