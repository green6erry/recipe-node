var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');


var BackToTopBtn = React.createClass({
  render: function() {
    console.log('render back to top button');
    return (
      <div className='back-to-top' id='back-to-top' title='Back to top'>
        <i className='fa fa-chevron-up'></i>
      </div>
    );
  }
});


var Container = connect()(BackToTopBtn);

module.exports = Container;