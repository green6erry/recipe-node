var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('./js/store');
var RecipeList = require('./components/RecipeList');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
            <RecipeList />
        </Provider>,
        document.getElementById('app')
    );
});