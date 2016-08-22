var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');

var SiteHeader = require('./SiteHeader');
var SideMenuBtnList = require('./SideMenuBtnList');
var Dashboard = require('../containers/Dashboard');



var ContentWrap = React.createClass({
    render: function(props) {
      return (
        <div id='contentWrap'> 
          <SiteHeader header={this.props.header} />
          <SideMenuBtnList sideMenus={this.props.sideMenus} />
          <Dashboard content={this.props.content} />
        </div>
      );
    }
});

var mapStateToProps = function(state, props) {
    return {
        header: state.header,
        sideMenus: state.sideMenus,
        content: state.content
    };
};

var Container = connect(mapStateToProps)(ContentWrap);

module.exports = Container;