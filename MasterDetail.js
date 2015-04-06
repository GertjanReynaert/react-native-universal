'use strict';

var React = require('react-native');
var ContactList = require('./ContactList');
var {
  AppRegistry,
  StyleSheet,
  View,
  Text
} = React;

var MasterDetail = React.createClass({
  getInitialState: function() {
    return {
      list: this.props.list,
      selected: undefined
    };
  },

  render: function() {
    return (
      <View style={styles.screen}>
        <View style={styles.master}>
          <ContactList contacts={this.state.list}/>
        </View>
        <View style={styles.detail}>
          <Text>Test</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
  },
  master: {
    width: 300
  },
  detail: {
    width: 724
  }
});

module.exports = MasterDetail;
