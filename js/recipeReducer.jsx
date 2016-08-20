var actions = require('./actions');

var initialRecipeState = [
    {   name: 'thing',
        description: 'description of thing',
        rating: '2'
    },
    {   name: 'thing2',
        description: 'description of thing2',
        rating: '3'
    }
];

//Recipe Reducer
var recipeReducer = function(state, action) {
    state = state || initialRecipeState;
    if (action.type === actions.ADD_RECIPE) {
        return state.concat({
            name: action.recipe,
            rating: null
        });
    }
    else if (action.type === actions.RATE_RECIPE) {
        // Find the index of the matching recipe
        var index = -1;
        for (var i=0; i<state.length; i++) {
            var recipe = state[i];
            if (recipe.name === action.recipe) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            throw new Error('Could not find recipe');
        }

        var before = state.slice(0, i);
        var after = state.slice(i + 1);
        var newRecipe = Object.assign({}, recipe, {rating: action.rating});
        return before.concat(newRecipe, after);
    }

    else if (action.type === actions.FETCH_RECIPE_DESC_SUCCESS) {
        // Find the index of the matching recipe
        var index = -1;
        for (var i=0; i<state.length; i++) {
            var recipe = state[i];
            if (recipe.name === action.recipe) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            throw new Error('Could not find recipe');
        }

        var before = state.slice(0, i);
        var after = state.slice(i + 1);
        var newRecipe = Object.assign({}, recipe, {
            description: action.description
        });
        return before.concat(newRecipe, after);
    }
    else if (action.type === actions.FETCH_RECIPE_DESC_ERROR) {
        // Find the index of the matching recipe
        var index = -1;
        for (var i=0; i<state.length; i++) {
            var recipe = state[i];
            if (recipe.name === action.recipe) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            throw new Error('Could not find recipe');
        }

        var before = state.slice(0, i);
        var after = state.slice(i + 1);
        var newRecipe = Object.assign({}, recipe, {
            description: 'N/A'
        });
        return before.concat(newRecipe, after);
    }

    return state;
};



exports.recipeReducer = recipeReducer;



