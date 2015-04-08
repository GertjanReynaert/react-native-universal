'use strict';

var React = require('react-native');
var {
  NavigatorIOS,
  StyleSheet
} = React;
var ContactList = require('../ContactList');

var IphoneLayout = React.createClass({
  selectContact: function(contact) {
    debugger;
  },

  render: function() {
    return (
      <NavigatorIOS
      style={styles.container}
      initialRoute={{
      title: 'Contacts',
      component: ContactList,
      passProps: {
        contacts: this.props.list,
        setContact: this.selectContact
      }
    }} />
           );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = IphoneLayout;
