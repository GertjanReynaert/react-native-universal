'use strict';

var React = require('react-native');
var Device = require('./app/Device');
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
    if (Device.isIpad()) {
      return <MasterDetail list={this.state.contacts}/>;
    } else {
      return <IphoneLayout list={this.state.contacts}/>;
    }
  }
});

AppRegistry.registerComponent('reactNativeTest', () => reactNativeTest);
