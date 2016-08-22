var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');

var RootBox = require('./RootBox');





var RootBoxesList = React.createClass({
  render: function(props) {
    return (
      <div id="options-wrapper" className="cf">
        {this.props.boxes.map(function(box, index){
          return <RootBox key={index} box={box} />
        })}
      </div>
    );
  }
})

var mapStateToProps = function(state, props) {
    return {
        boxes: state.boxes
    };
};

var Container = connect(mapStateToProps)(RootBoxesList);

module.exports = Container;