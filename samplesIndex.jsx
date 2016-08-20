var React = require('react');
var ReactDOM = require('react-dom');

var router = require('react-router');
var Router = router.Router;

var IndexRoute = router.IndexRoute;
var Route = router.Route;
var hashHistory = router.hashHistory;




var Person = React.createClass({
    getInitialState: function() {
        return {
            highlight: false
        };
    },
    onClick: function() {
        this.setState({
            highlight: !this.state.highlight
        });
    },
    render: function() {
        var classes = 'person ' + (this.state.highlight ? 'highlight' : '');
        return (
            <div className={classes} onClick={this.onClick}>
                <div className="person-name">{this.props.name}</div>
                <img className="person-img" src={this.props.imageUrl} />
                <div className="person-job">
                    {this.props.job}
                </div>
            </div>
        );
    }
});

Person.defaultProps = {
    imageUrl: 'http://www.gravatar.com/avatar/?d=identicon'
};



var FlashCard = React.createClass({
    getInitialState: function() {
        return {
            english: 'Grapefruit',
            french: 'Pamplemousse',
            selected: 'english'
        }
    },

    onCardClick: function() {
        if (this.state.selected == 'english') {
            this.setState({
                selected: 'french'
            });
        }
        else {
            if (this.state.selected == 'french') {
                this.setState({
                    selected: 'english'
                });
            }
        }
    },
    render: function() {
        return <Card text={this.state[this.state.selected]}
                     onClick={this.onCardClick} />;
    }
});

var Card = function(props) {
    var style = {
        border: '1px solid black',
        height: '100px',
        lineHeight: '100px',
        width: '300px',
        textAlign: 'center',
        fontSize: '2em'
    };
    return (
        <div onClick={props.onClick} style={style}>
            {props.text}
        </div>
    );
};

var InputWithButton = React.createClass({
    onButtonClick: function() {
        console.log(this.textInput.value);
    },

    render: function() {
        return (
            <div>
                <input type="text" ref={function(element) {
                    this.textInput = element;
                }.bind(this)} />
                <button type="button" onClick={this.onButtonClick}>
                    Click me!
                </button>
            </div>
        );
    }
});

var PersonList = function() {
    return (
        <div className="person-list">
            <Person name="Derek Zoolander"
                    imageUrl="http://uifaces.com/assets/static/images/zoolander.jpg"
                    job="Male model" />
            <Person name="Donald Knuth"
                    imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                    job="Clever chap" />
            <FlashCard />
            <InputWithButton />

        </div>
        
    );
};







// </Route>



var CONTACTS = {
    0: {
        id: 0,
        name: 'Sarah Hughes',
        phoneNumber: '01234 567890'
    },
    1: {
        id: 1,
        name: 'Tim Taylor',
        phoneNumber: '02345 678901'
    },
    2: {
        id: 2,
        name: 'Sam Smith',
        phoneNumber: '03456 789012'
    }
};

var Link = router.Link;

var Contact = function(props) {
    return (
        <div>
            <strong>
                <Link to={'/contacts/' + props.id}>
                    {props.name}
                </Link>
            </strong>
            &nbsp;
            {props.phoneNumber}
        </div>
    );
};

var ContactList = function(props) {
    var contacts = Object.keys(props.contacts).map(function(contactId, index) {
        var contact = props.contacts[contactId];
        return (
            <li key={index}>
                <Contact id={contact.id} name={contact.name}
                         phoneNumber={contact.phoneNumber} />
            </li>
        );
    });
    return (
        <ul>
            {contacts}
        </ul>
    );
};


var ContactListContainer = function() {
    return <ContactList contacts={CONTACTS} />;
};

var ContactContainer = function(props) {
    var contact = CONTACTS[props.params.contactId];
    return <Contact id={contact.id} name={contact.name}
                    phoneNumber={contact.phoneNumber} />;
};


var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;


var IndexRoute = router.IndexRoute;

var App = function(props) {
    return (
        <div>
            <h1>
                Contacts App
            </h1>
            <div>
                {props.children}
            </div>
        </div>
    );
};



var routes = (
    <Router history={hashHistory}>
        <Route path="/cheese" component={PersonList} />
        <Route path="/contacts" component={App}>
            <IndexRoute component={ContactListContainer} />
            <Route path=":contactId" component={ContactContainer} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app')
    );
});





