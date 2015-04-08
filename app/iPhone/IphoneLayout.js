'use strict';

var React = require('react-native');
var ContactList = require('../ContactList');

var IphoneLayout = React.createClass({
  selectContact: function(contact) {
    debugger;
  },

  render: function() {
    return <ContactList contacts={this.props.list} setContact={this.selectContact}/>;
  }
});

module.exports = IphoneLayout;
