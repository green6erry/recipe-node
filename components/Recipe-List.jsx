var React = require('react');
var connect = require('react-redux').connect;

var Recipe = require('./Recipe');
var actions = require('../js/actions');


var IngredientItem = React.createClass({
	render: function(props){
		console.log('buutt');
		return (
	        <li key={this.props.id}>
	            <strong>{this.props.name}</strong>&nbsp;
	            {this.props.description} &nbsp;
	            {this.props.calories} &nbsp;
	            <p> Rating: {this.props.rating} </p>
	        </li>
    	);
	}
});


var RecipeItem = React.createClass({
	render: function(props){
		return (
			<li>
				<h3> {this.props.item.name} </h3>
				<p> {this.props.item.description}</p>
				<ul>
					{this.props.ingredients.map(function(item){
	    				return <IngredientItem item={item} />;
	    			})}
				</ul>
				<span> rating 2 </span>
			</li>
		);  			
	}
});

var RecipeList = React.createClass({
    addRecipe: function() {
    var recipeName = this.refs.recipeName.value;
    this.props.dispatch(actions.addRecipe(recipeName));
    },

    render: function(props){

    	return(
    		<div>
	    		<ul>
	    			{this.props.recipes.map(function(item){
	    				return <RecipeItem item={item} />;
	    			})}
    			</ul>
    		</div>
    	);
    }

});

var mapStateToProps = function(state, props) {
    return {
        recipes: state
    };
};

var Container = connect(mapStateToProps)(RecipeList);

module.exports = Container;