var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');


var TabContentEntry = require('./TabContentEntry');



var TabContentList = React.createClass({
  render: function(props){
    return(
      <div className="tab-content">
        {this.props.tabs.map(function(tab, index){
          return <TabContentEntry key={index} tab={tab} />
        })}
      </div>
    );
  }
})

var mapStateToProps = function(state, props) {
    return {
        tabs: state.tabs,
    };
};

var Container = connect(mapStateToProps)(TabContentList);

module.exports = Container;