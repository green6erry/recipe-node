var actions = require('./actions');

var initialRecipeState = [
    //from node no?
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

var ingredientReducer = function(state, action) {
    state = state || initialIngredientState;
    if (action.type === actions.ADD_INGREDIENT) {
        return state.concat({
            name: action.ingredient,
            rating: null
        });
    }
    else if (action.type === actions.RATE_INGREDIENT) {
        // Find the index of the matching ingredient
        var index = -1;
        for (var i=0; i<state.length; i++) {
            var ingredient = state[i];
            if (ingredient.name === action.ingredient) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            throw new Error('Could not find ingredient');
        }

        var before = state.slice(0, i);
        var after = state.slice(i + 1);
        var newIngredient = Object.assign({}, ingredient, {rating: action.rating});
        return before.concat(newIngredient, after);
    }

    else if (action.type === actions.FETCH_INGREDIENT_DESC_SUCCESS) {
        // Find the index of the matching ingredient
        var index = -1;
        for (var i=0; i<state.length; i++) {
            var ingredient = state[i];
            if (ingredient.name === action.ingredient) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            throw new Error('Could not find ingredient');
        }

        var before = state.slice(0, i);
        var after = state.slice(i + 1);
        var newIngredient = Object.assign({}, ingredient, {
            description: action.description
        });
        return before.concat(newIngredient, after);
    }
    else if (action.type === actions.FETCH_INGREDIENT_DESC_ERROR) {
        // Find the index of the matching ingredient
        var index = -1;
        for (var i=0; i<state.length; i++) {
            var ingredient = state[i];
            if (ingredient.name === action.ingredient) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            throw new Error('Could not find ingredient');
        }

        var before = state.slice(0, i);
        var after = state.slice(i + 1);
        var newIngredient = Object.assign({}, ingredient, {
            description: 'N/A'
        });
        return before.concat(newIngredient, after);
    }

    return state;
};



exports.recipeReducer = recipeReducer;
exports.ingredientReducer = ingredientReducer;