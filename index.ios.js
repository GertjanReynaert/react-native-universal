/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} = React;

var reactNativeTest = React.createClass({
  getInitialState: () => {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => { return r1 !== r2; }
      }),
      contacts: []
    };
  },

  componentWillMount: function() {
    for(var i = 0; i < 25; i++) {
      fetch('http://uifaces.com/api/v1/random')
      .then((response) => response.text())
      .then((response) => {
        response = JSON.parse(response);
        var contacts = this.state.contacts;
        contacts.push(response);
        this.setState({
          contacts: contacts,
          dataSource: this.getDataSource(contacts)
        });
      })
      .catch((error) => {
        console.warn(error);
      });
    }
  },

  getDataSource: function(contacts) {
    return this.state.dataSource.cloneWithRows(contacts);
  },

  renderRow: (rowdata) => {
    return (
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: rowdata.image_urls.normal}} />
        <Text style={styles.text}>{rowdata.username}</Text>
      </View>
    );
  },

  render: function() {
    return <ListView style={styles.listview} dataSource={this.state.dataSource} renderRow={this.renderRow}>Test</ListView>;
  }
});

var styles = StyleSheet.create({
  listview: {
    paddingTop: 30,
  },
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

AppRegistry.registerComponent('reactNativeTest', () => reactNativeTest);
