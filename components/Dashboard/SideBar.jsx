var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');

var SideBarBox = require ('./SideBarBox');

var SideBar = React.createClass({
  render: function(props){
    return(
        <div id="sticky-sidebar">
            <h2> Profile</h2>
            {this.sideBarBoxes.map(function(box, index){
              return <SideBarBox key={index} box={box} />;
            })} 
        </div>
    );
  }
})

var mapStateToProps = function(state, props) {
    return {
        sideBarBoxes: state.sideBarBoxes,
    };
};

var Container = connect(mapStateToProps)(SideBar);

module.exports = Container;