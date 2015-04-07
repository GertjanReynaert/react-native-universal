'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Image,
  Text
} = React;

var ContactDetail = React.createClass({
  render: function() {
    return (
      <View style={styles.detail}>
        <View style={styles.hero}>
          <Image style={styles.heroImage} source={{uri: this.props.contact.avatar}} />
          <View style={styles.heroTextBox}>
            <Text style={styles.text}>{ this.props.contact.fullName }</Text>
            <Text style={styles.heroText}>{ this.props.contact.company }</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Phone</Text>
          <Text>{ this.props.contact.phone }</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Work</Text>
          <Text>{ this.props.contact.cellphone }</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Private</Text>
          <Text>{ this.props.contact.email }</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Work</Text>
          <Text>{ this.props.contact.emailWork }</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Home</Text>
          <Text>{ this.props.contact.address }</Text>
          <Text>{ this.props.contact.zipcode } { this.props.contact.city }</Text>
          <Text>{ this.props.contact.country }</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Birthday</Text>
          <Text>{ this.props.contact.birthday }</Text>
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
  },
  hero: {
    flexDirection: "row",
    alignItems: "center",
  },
  heroImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10
  },
  heroTextBox: {
    flexDirection: "column"
  },
  heroText: {
    color: "#888888"
  },
  item: {
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#DDDDDD",
  },
  label: {
    color: "#007AFF",
    marginBottom: 5
  },
});

module.exports = ContactDetail;
