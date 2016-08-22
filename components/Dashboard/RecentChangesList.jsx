var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');

var RecentChangesEntry = require('./RecentChangesEntry');

var RecentChangesList = React.createClass({
  render: function(props){
    return(
      <div id="main">
        <h3>Recent Changes</h3>
          {this.props.entries.map(function(entry, index){
            return <RecentChangesEntry key={index} entry={entry} />
          })}
      </div>
    );
  }
})

var mapStateToProps = function(state, props) {
    return {
        entries: state.entries,
    };
};

var Container = connect(mapStateToProps)(RecentChangesList);

module.exports = Container;
