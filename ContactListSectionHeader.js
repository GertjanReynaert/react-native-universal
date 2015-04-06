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
    paddingLeft: 10,
    padding: 5,
    backgroundColor: '#EEEEEE',
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
    fontWeight: "bold"
  },
});

module.exports = ContactListSectionHeader;
