var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');

var RecentChangesEntry = React.createClass({
  render: funtion(props){
    return (
      <div id='box'+{this.props.id}>
        <div className='recentChangeThumb'>{this.props.picture}</div>
        <h2>{this.props.content}</h2>
        <p>{this.props.category}</p>
      </div>
      );
  }
})


var mapStateToProps = function(state, props) {
    return {
        id: state.id,
        picture: state.picture,
        content: state.content,
        category: state.category
    };
};

var Container = connect(mapStateToProps)(RecentChangesEntry);

module.exports = Container;