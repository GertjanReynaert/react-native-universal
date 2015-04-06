'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} = React;

var ContactCell = React.createClass({
  getInitialState: function() {
    return {
      username: this.props.contact.fullName,
      url: this.props.contact.avatar
    };
  },

  selectContact: function() {
    this.props.setContact(this.props.contact);
  },

  render: function() {
    return (
      <TouchableHighlight onPress={this.selectContact}>
        <View style={styles.row}>
          <Image style={styles.image} source={{uri: this.state.url}} />
          <Text style={styles.text}>{ this.state.username }</Text>
        </View>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  }
});

module.exports = ContactCell;
