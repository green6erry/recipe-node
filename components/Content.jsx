var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../js/actions');

var PageHeader = require('./PageHeader');
var RootBoxesList = require('./RootBoxesList');


var PAGES = {
    {
      id: 0,
      name: 'Root',
      header: 'Welcome to Recipe Log!',
      subHeader: 'Easily adjust servings, measurements, and more',
      content: {
          boxes:[
            {
              content: 'Quick Add',
              boxId: 0
            },{
              content: 'Sign-In',
              boxId: 1
            },{
              content: 'About',
              boxId: 2
            }

          }]
          render: function (){
            return <RootBoxesList boxes={boxes} />;
          } 
      }
    },

    {
      id: 1,
      name: 'Dashboard',
      header: 'Dashboard',
      subHeader: '',
      content: {
          recentChanges:[
            {
              id: 0,
              content: 'Edited Recipe',
              category: 'Recipes'
            },{
              id: 1,
              content: 'Added Ingredient',
              category: 'Ingredients'
            },{
              id: 2,
              content: 'Added Recipe',
              category: 'Recipes'
            }
          ],
          sideBarBoxes:[
            {
              id: 0,
              content: 'My Profile',
            },{
              id: 1,
              content: 'My Recipes',
            },{
              id: 2,
              content: 'My Ingredients',
            }
          ],
          footerTags:[
            {
              id: 0,
              content: 'Vegan',
            },{
              id: 1,
              content: 'Gluten-Free',
            },{
              id: 2,
              content: 'Vegtastic!',
            }
          ],
          render: function (){
            return 
            <RecentChangesList boxes={this.recentChanges} />
            <SideBar boxes={this.sideBarBoxes} />
            <FooterTags tags={this.footerTags} />;
          } 
      }
    },
}



var RecentChangesEntry = React.createClass({
  render: funtion(props){
    return (
      <div id='box'+{this.props.id}>
        <h2>{this.props.content}</h2>
        <p>{this.props.category}</p>
      </div>
      );
  }
})


var mapStateToProps = function(state, props) {
    return {
        id: state.id,
        content: state.content,
        category: state.category
    };
};

var Container = connect(mapStateToProps)(RecentChangesEntry);

module.exports = Container;




var SideBar = React.createClass({
  render: function(props){
    return(
            <div id="sticky-sidebar">
                <h2> Profile</h2>
                <div id="sidecontent2" class="cf"><span>Profile</span></div>
                <div id="sidecontent2" class="cf"><span>My Ingredients</span></div>
                <div id="sidecontent3" class="cf"><span>My Recipes</span></div>
              </div>
            </div>
    );
  }
})




<div id='content'>
<RecentChangesList />
<SideBar />
<FooterTags />
</div>











var Content = React.createClass({
  var page = PAGES[props.params.pageId];
  render: function(props){
    return (
        <div id="pageContent">
          <PageHeader header={page.pageHeader} />
          {page.content}
          <span className="cf"></span>
          <div id="credit"><span>AGB</span></div>
      </div>
      );
  }
})


var Container = connect()(Content);

module.exports = Container;