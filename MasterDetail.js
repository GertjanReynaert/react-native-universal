'use strict';

var React = require('react-native');
var ContactList = require('./ContactList');
var ContactDetail = require('./ContactDetail');
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

var styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
  },
  master: {
    width: 300
  },
  detail: {
    width: 724,
    backgroundColor: "#FFFFFF",
    padding: 20
  }
});

module.exports = MasterDetail;
