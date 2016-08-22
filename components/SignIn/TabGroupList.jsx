var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');


var TabGroupItem = require('./TabGroupItem');




var TabGroupList = React.createClass{(
  render: function(props){
    return (
      <ul className="tab-group">
        {this.props.tabs.map(function(tab, index){
          return <TabItem key={index} tab={tab} />
          });
        }
      </ul>
      );
    }
)};
          
var mapStateToProps = function(state, props) {
    return {
        tabs: state.tabs
    };
};

var Container = connect(mapStateToProps)(TabGroupList);

module.exports = Container;