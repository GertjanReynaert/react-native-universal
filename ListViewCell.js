'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
} = React;

var ListViewCell = React.createClass({
  getInitialState: function() {
    return {
      username: this.props.contact.username,
      url: this.props.contact.image_urls.normal
    };
  },

  render: function() {
    return (
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: this.state.url}} />
        <Text style={styles.text}>{ this.state.username }</Text>
      </View>
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

module.exports = ListViewCell;
