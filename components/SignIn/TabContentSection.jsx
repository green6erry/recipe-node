var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');


var TabContentField = require('./TabContentField');



var TabContentSection = React.createClass({
  render: function(props){
    return (
        <div className={this.props.classes}>
          {this.props.fields.map(function(field, index){
            return <TabContentField key={index} field={field} />
          })}
        </div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
        classes: state.classes,
        fields: state.fields,
    };
};

var Container = connect(mapStateToProps)(TabContentSection);

module.exports = Container;