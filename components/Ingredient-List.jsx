var React = require('react');
var connect = require('react-redux').connect;

var Ingredient = require('./Ingredient');
var actions = require('../js/actions');

var IngredientList = React.createClass({
        addIngredient: function() {
        var ingredientName = this.refs.ingredientName.value;
        this.props.dispatch(actions.addIngredient(ingredientName));
    },
});

var mapStateToProps = function(state, props) {
    return {
        ingredients: state
    };
  };

var Container = connect(mapStateToProps)(IngredientList);

module.exports = Container;