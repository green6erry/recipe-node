var React = require('react');
var connect = require('react-redux').connect;

var Recipe = require('./Recipe');
var actions = require('../js/actions');

var RecipeList = React.createClass({
        addRecipe: function() {
        var recipeName = this.refs.recipeName.value;
        this.props.dispatch(actions.addRecipe(recipeName));
    },
});

var mapStateToProps = function(state, props) {
    return {
        recipes: state
    };
};

var Container = connect(mapStateToProps)(RecipeList);

module.exports = Container;