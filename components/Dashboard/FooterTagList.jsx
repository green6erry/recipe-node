var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');

var FooterTagBox = require('./FooterTagBox');





var FooterTagList = React.createClass({
  render: function(props){
    return (
          <div id="footer-wrapper" className="cf">
            <h2> Your Tags</h2>
            {this.props.tags.map(function(tag, index){
              return <FooterTagBox key={index} tag={tag} />
            })}
          </div>
      )
  }
})

var mapStateToProps = function(state, props) {
    return {
        tags: state.tags
    };
};

var Container = connect(mapStateToProps)(FooterTagList);

module.exports = Container;