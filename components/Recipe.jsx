var React = require('react');
var connect = require('react-redux').connect;

var StarRater = require('./StarRater');

//to-do: var IngredientList = require('./Ingredient-List');

var actions = require('../js/actions');

var Recipe = React.createClass({
    componentDidMount: function() {
        this.props.dispatch(
            actions.fetchDescription(this.props.recipe.name)
        );
    },
    changeRating: function(rating) {
        this.props.dispatch(
            actions.rateRecipe(this.props.recipe.name, rating)
        );
    },
    render: function() {
        return (
            <div className="recipe">
                {this.props.recipe.name} - {this.props.recipe.description}
                &nbsp;
                <StarRater rating={this.props.recipe.rating}
                           onChange={this.changeRating} />
            </div>
        );
    }
});

var Container = connect()(Recipe);

module.exports = Container;