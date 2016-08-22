var React = require('react');
var connect = require('react-redux').connect;


var actions = require('../js/actions');


var BackToTopBtn = require('./BackToTopBtn');
var ContentWrap = require('./ContentWrap');
var SideMenuList = require('./SideMenuList');

var Page = React.createClass({
  render: function(props) {
      return (
        <div>
          <input type='checkbox' id='sideToggle1' hidden />
          <input type='checkbox' id='sideToggle2' hidden />

          {this.props.sideMenuLists.map(function(item){
            return <SideMenuList item={item} />
          })}

          <ContentWrap />
          <BackToTopBtn />

        </div>
      );
    }
});

var mapStateToProps = function(state, props) {
    return {
        sideMenuLists: state.sideMenuLists,
    };
};
   


var Container = connect(mapStateToProps)(Page);

module.exports = Container;
