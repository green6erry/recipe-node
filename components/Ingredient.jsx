var React = require('react');
var connect = require('react-redux').connect;

var StarRater = require('./star-rater');


var actions = require('../js/actions');

var Ingredient = React.createClass({
    componentDidMount: function() {
        this.props.dispatch(
            actions.fetchDescription(this.props.ingredient.name)
        );
    },
    changeRating: function(rating) {
        this.props.dispatch(
            actions.rateIngredient(this.props.ingredient.name, rating)
        );
    },
    render: function() {
        return (
            <div className="ingredient">
                {this.props.ingredient.name} - {this.props.ingredient.description}
                &nbsp;
                <StarRater rating={this.props.ingredient.rating}
                           onChange={this.changeRating} />
            </div>
        );
    }
});

var Container = connect()(Ingredient);

module.exports = Container;