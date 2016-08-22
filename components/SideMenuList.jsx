var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');

var SideMenuItem = require('./SideMenuItem');


var SideMenuList = React.createClass({
    render: function(props){
      return (
          <aside className={this.props.classes}>
            <h2>{this.props.name}</h2>
            <ul>
              {this.props.items.map(function(item){
                return <SideMenuItem item={item} />;
              })}
            </ul>
          </aside>
      );
    }
});

var mapStateToProps = function(state, props) {
    return {
        classes: state.classes,
        name: state.name,
        items: state.items
    };
};

var Container = connect(mapStateToProps)(SideMenuList);

module.exports = Container;