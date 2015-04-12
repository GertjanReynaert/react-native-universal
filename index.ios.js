'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var ContactFactory = require('./app/factories/contact_factory');
var MasterDetail = require('./app/iPad/MasterDetail');
var IphoneLayout = require('./app/iPhone/IphoneLayout');
var {
  AppRegistry
} = React;

var reactNativeTest = React.createClass({
  getInitialState: function() {
    var factory = new ContactFactory();
    return { contacts: factory.createList(100) };
  },

  render: function() {
    var x = Dimensions.get("window").width;
    var y = Dimensions.get("window").height;

    console.log("width:", x, ", height:", y);

    var iPad = [768, 1024];
    var iPhone = [375, 667];

    if (iPad.indexOf(x) > -1 && iPad.indexOf(y) > -1) {
      return <MasterDetail list={this.state.contacts}/>;
    } else {
      return <IphoneLayout list={this.state.contacts}/>;
    }
  }
});

AppRegistry.registerComponent('reactNativeTest', () => reactNativeTest);
