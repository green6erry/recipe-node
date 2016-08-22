var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');


var TabContentSection = require('./TabContentSection');



var TabContentEntry = React.createClass({
  

  render: function(props){
    return (
      <div id={this.props.id}>
        <h1>{this.props.header}</h1>
        <form action="http://localhost:4000/users" method="post">
            {this.props.sections.map(function(section, index){
              return <TabContentSection key={index} section={section} />
            })}
            <p>{this.props.altSubmitBtn}</p>
            <button type="submit" className="button button-block">
              {this.props.submitBtn}
            </button> 
        </form>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
        id: state.id,
        header: state.header,
        sections: state.sections,
        submitBtn: state.submitBtn,
        altSubmitBtn: state.altSubmitBtn
    };
};

var Container = connect(mapStateToProps)(TabContentEntry);

module.exports = Container;