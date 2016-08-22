var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('./js/store');
var Page = require('./components/Page');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
            <Page />
        </Provider>,
        document.getElementById('app')
    );
});