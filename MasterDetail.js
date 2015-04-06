'use strict';

var React = require('react-native');
var ContactList = require('./ContactList');
var {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text
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
          <View style={styles.hero}>
            <Image style={styles.heroImage} source={{uri: this.state.selected.avatar}} />
            <View style={styles.heroTextBox}>
              <Text style={styles.text}>{ this.state.selected.fullName }</Text>
              <Text style={styles.heroText}>{ this.state.selected.company }</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Phone</Text>
            <Text>{ this.state.selected.phone }</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Work</Text>
            <Text>{ this.state.selected.cellphone }</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Private</Text>
            <Text>{ this.state.selected.email }</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Work</Text>
            <Text>{ this.state.selected.emailWork }</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Home</Text>
            <Text>{ this.state.selected.address }</Text>
            <Text>{ this.state.selected.zipcode } { this.state.selected.city }</Text>
            <Text>{ this.state.selected.country }</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>Birthday</Text>
            <Text>{ this.state.selected.birthday }</Text>
          </View>
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
    color: "blue",
    marginBottom: 5
  },
});

module.exports = MasterDetail;
