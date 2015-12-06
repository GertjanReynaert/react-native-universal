'use strict';

var React = require('react-native');
var ContactList = require('../ContactList');
var ContactDetail = require('../ContactDetail');
var {
  StyleSheet,
  View
} = React;

var MasterDetail = React.createClass({
  getInitialState: function() {
    return {
      list: this.props.list,
      selected: this.props.list[0]
    };
  },

  setSelected: function(contact) {
    this.setState({ selected: contact });
  },

  render: function() {
    return (
      <View style={styles.screen}>
        <View style={styles.master}>
          <ContactList contacts={this.state.list} setContact={this.setSelected}/>
        </View>
        <View style={styles.detail}>
          <ContactDetail contact={this.state.selected}/>
        </View>
      </View>
    );
  }
});

var MASTER_WIDTH = 350;
var styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
  },
  master: {
    width: MASTER_WIDTH,
    paddingTop: 30
  },
  detail: {
    flex: 1,
    padding: 20
  }
});

module.exports = MasterDetail;
