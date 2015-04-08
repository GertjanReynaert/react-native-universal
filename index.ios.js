'use strict';

var React = require('react-native');
var ContactFactory = require('./app/factories/contact_factory');
var MasterDetail = require('./app/MasterDetail');
var {
  AppRegistry
} = React;

var reactNativeTest = React.createClass({
  getInitialState: function() {
    var factory = new ContactFactory();
    return { contacts: factory.createList(100) };
  },

  render: function() {
    return <MasterDetail list={this.state.contacts}/>;
  }
});

AppRegistry.registerComponent('reactNativeTest', () => reactNativeTest);
