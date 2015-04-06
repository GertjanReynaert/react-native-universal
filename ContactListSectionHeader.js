'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text
} = React;

var ContactListSectionHeader = React.createClass({
  render: function() {
    return (
      <View style={styles.sectionHeader}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  sectionHeader: {
    padding: 3,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#DDDDDD'
  },
});

module.exports = ContactListSectionHeader;
