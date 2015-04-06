'use strict';

var React = require('react-native');
var Contact = require('./models/contact');
var MasterDetail = require('./MasterDetail');
var {
  AppRegistry,
} = React;

var reactNativeTest = React.createClass({
  getInitialState: function() {
    var contacts = [];
    for(var i = 0; i < 100; i++) {
      contacts.push(new Contact());
    }

    return { contacts: contacts };
  },

  render: function() {
    return <MasterDetail list={this.state.contacts}/>;
  }
});

AppRegistry.registerComponent('reactNativeTest', () => reactNativeTest);
