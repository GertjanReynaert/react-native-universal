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
    this.setState({
      selected: contact
    });
  },

  render: function() {
    return (
      <View style={styles.screen}>
        <View style={styles.master}>
          <ContactList contacts={this.state.list} setContact={this.setSelected}/>
        </View>
        <View style={styles.detail}>
          <View style={styles.item}>
            <Image style={styles.image} source={{uri: this.state.selected.avatar}} />
            <Text style={styles.text}>{ this.state.selected.fullName }</Text>
          </View>
          <View style={styles.item}>
            <View style={styles.row}>
              <Text>{ this.state.selected.address }</Text>
            </View>
            <View style={styles.row}>
              <Text>{ this.state.selected.zipcode }</Text>
              <Text>{ this.state.selected.city }</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Text>{ this.state.selected.phone }</Text>
            <Text>{ this.state.selected.cellphone }</Text>
          </View>
          <View style={styles.item}>
            <Text>{ this.state.selected.email }</Text>
            <Text>{ this.state.selected.emailWork }</Text>
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
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#EEEEEE",
    borderRadius: 2
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  }
});

module.exports = MasterDetail;
