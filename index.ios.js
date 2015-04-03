'use strict';

var React = require('react-native');
var Contact = require('./models/contact');
var ListViewCell = require('./ListViewCell');
var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
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
    for(var i = 0; i < 100; i++) {
      var contacts = this.state.contacts;
      contacts.push(new Contact);
      this.setState({
        contacts: contacts,
        dataSource: this.getDataSource(contacts)
      });
    }
  },

  getDataSource: function(contacts) {
    return this.state.dataSource.cloneWithRows(contacts);
  },

  renderRow: function(rowdata) {
    return <ListViewCell contact={rowdata}/>;
  },

  renderSectionHeader: function() {
    return (
      <View style={styles.row}>
        <Text>Section Header</Text>
      </View>
    );
  },

  render: function() {
    return <ListView style={styles.listview} dataSource={this.state.dataSource} renderRow={this.renderRow} renderSectionHeader={this.renderSectionHeader}/>;
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
