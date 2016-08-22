
//https://github.com/github/fetch
var fetch = require('whatwg-fetch');


//Recipe Actions

var ADD_RECIPE = 'ADD_RECIPE';
var addRecipe = function(recipe) {
    return {
        type: ADD_RECIPE,
        recipe: recipe
    }
};

var RATE_RECIPE = 'RATE_RECIPE';
var rateRecipe = function(recipe, rating) {
    return {
        type: RATE_RECIPE,
        recipe: recipe,
        rating: rating
    };
};

var FETCH_RECIPE_DESC_SUCCESS = 'FETCH_RECIPE_DESC_SUCCESS';
var fetchRecipeDescSuccess = function(recipe, description) {
    return {
        type: FETCH_RECIPE_DESC_SUCCESS,
        recipe: recipe,
        description: description
    };
};

var FETCH_RECIPE_DESC_ERROR= 'FETCH_RECIPE_DESC_ERROR';
var fetchRecipeDescError = function(recipe, error) {
    return {
        type: FETCH_RECIPE_DESC_ERROR,
        recipe: recipe,
        error: error
    };
};

var fetchRecipeDesc = function(recipe) {
    return function(dispatch) {
        var url = 'http://localhost:4000/recipes/' + recipe;
        return fetch(url).then(function(response) {
            if (response.state < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var description = data.description;
            return dispatch(
                fetchRecipeDescSuccess(recipe, description)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchRecipeDescError(recipe, error)
            );
        });
    }
};

//---------end Recipe Actions


//Ingredient Actions

var ADD_INGREDIENT = 'ADD_INGREDIENT';
var addIngredient = function(ingredient) {
    return {
        type: ADD_INGREDIENT,
        ingredient: ingredient
    }
};

var RATE_INGREDIENT = 'RATE_INGREDIENT';
var rateIngredient = function(ingredient, rating) {
    return {
        type: RATE_INGREDIENT,
        ingredient: ingredient,
        rating: rating
    };
};

var FETCH_INGREDIENT_DESC_SUCCESS = 'FETCH_INGREDIENT_DESC_SUCCESS';
var fetchIngredientDescSuccess = function(ingredient, description) {
    return {
        type: FETCH_INGREDIENT_DESC_SUCCESS,
        ingredient: ingredient,
        description: description
    };
};

var FETCH_INGREDIENT_DESC_ERROR= 'FETCH_INGREDIENT_DESC_ERROR';
var fetchIngredientDescError = function(ingredient, error) {
    return {
        type: FETCH_INGREDIENT_DESC_ERROR,
        ingredient: ingredient,
        error: error
    };
};

var fetchIngredientDesc = function(ingredient) {
    return function(dispatch) {
        var url = 'http://localhost:4000/ingredients' + ingredient;
        return fetch(url).then(function(response) {
            if (response.state < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var description = data.description;
            return dispatch(
                fetchIngredientDescSuccess(ingredient, description)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchIngredientDescError(ingredient, error)
            );
        });
    }
};

//---------end Ingredient Actions

//User Actions

var ADD_USER = 'ADD_USER';
var addUser = function(user) {
    return {
        type: ADD_USER,
        user: user
    }
};

var REMOVE_USER = 'REMOVE_USER';
var removeUser = function(user) {
    return {
        type: REMOVE_USER,
        user: user,
    };
};

var FETCH_USER_DESC_SUCCESS = 'FETCH_USER_DESC_SUCCESS';
var fetchUserDescSuccess = function(user, description) {
    return {
        type: FETCH_USER_DESC_SUCCESS,
        user: user,
        description: description
    };
};

var FETCH_USER_DESC_ERROR= 'FETCH_USER_DESC_ERROR';
var fetchUserDescError = function(user, error) {
    return {
        type: FETCH_USER_DESC_ERROR,
        user: user,
        error: error
    };
};

var fetchUserDesc = function(user) {
    return function(dispatch) {
        var url = 'http://localhost:4000/users' + user;
        return fetch(url).then(function(response) {
            if (response.state < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var description = data.description;
            return dispatch(
                fetchUserDescSuccess(user, description)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchUserDescError(user, error)
            );
        });
    }
};

//---------end User ACTIONS



//Recipe exports
exports.ADD_RECIPE = ADD_RECIPE;
exports.addRecipe = addRecipe;
exports.RATE_RECIPE = RATE_RECIPE;
exports.rateRecipe = rateRecipe;

exports.FETCH_RECIPE_DESC_SUCCESS = FETCH_RECIPE_DESC_SUCCESS;
exports.fetchRecipeDescSuccess = fetchRecipeDescSuccess;
exports.FETCH_RECIPE_DESC_ERROR = FETCH_RECIPE_DESC_ERROR;
exports.fetchRecipeDescError = fetchRecipeDescError;

exports.fetchRecipeDesc = fetchRecipeDesc;

//---------end Recipe exports

//Ingredient exports
exports.ADD_INGREDIENT = ADD_INGREDIENT;
exports.addIngredient = addIngredient;
exports.RATE_INGREDIENT = RATE_INGREDIENT;
exports.rateIngredient = rateIngredient;

exports.FETCH_INGREDIENT_DESC_SUCCESS = FETCH_INGREDIENT_DESC_SUCCESS;
exports.fetchIngredientDescSuccess = fetchIngredientDescSuccess;
exports.FETCH_INGREDIENT_DESC_ERROR = FETCH_INGREDIENT_DESC_ERROR;
exports.fetchIngredientDescError = fetchIngredientDescError;


exports.fetchIngredientDesc = fetchIngredientDesc;

//----------end Ingredient exports

//User exports
exports.ADD_USER = ADD_USER;
exports.addUser = addUser;
exports.REMOVE_USER = REMOVE_USER;
exports.removeUser = removeUser;

exports.FETCH_USER_DESC_SUCCESS = FETCH_USER_DESC_SUCCESS;
exports.fetchUserDescSuccess = fetchUserDescSuccess;
exports.FETCH_USER_DESC_ERROR = FETCH_USER_DESC_ERROR;
exports.fetchUserDescError = fetchUserDescError;


exports.fetchUserDesc = fetchUserDesc;

//----------end User exports


