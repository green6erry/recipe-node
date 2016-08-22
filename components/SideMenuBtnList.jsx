var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');

var SideMenuBtn = require('./SideMenuBtn');





var SideMenuBtnList = React.createClass({
  render: function(props) {
    return (
      <div>
        {this.props.sideMenus.map(function(sideMenu){
                return <SideMenuBtn sideMenu={sideMenu} />;
              })}
      </div>
      );
    }
});

var mapStateToProps = function(state, props) {
    return {
        sideMenus: state.sideMenus,
    };
};

var Container = connect(mapStateToProps)(SideMenuBtnList);

module.exports = Container;