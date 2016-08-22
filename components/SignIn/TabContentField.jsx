var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');






var TabContentField = React.createClass({
  render: function(props){
    return (
      <div className="field-wrap">
          <label>
              {this.props.label}
              <span className="req">*</span>
          </label>
          <input type={this.props.type} {this.props.required} autocomplete="off" />
      </div>
    );
  }
})

var mapStateToProps = function(state, props) {
    return {
        label: state.label,
        type: state.type,
        required: state.required
    };


var Container = connect(mapStateToProps)(TabContentField);

module.exports = Container;