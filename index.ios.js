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
    var getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID].name;
    };

    var getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[sectionID].data[rowID];
    };

    var datasource = new ListView.DataSource({
      getRowData: getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (r1, r2) => r1 !== r2
    });

    var contacts = [];
    for(var i = 0; i < 100; i++) {
      contacts.push(new Contact());
    }

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var data = [];
    var sectionIDs = alphabet.map((char) => {
      return alphabet.indexOf(char);
    });
    var rowIDs = [];

    for(var i = 0, len = alphabet.length; i < len; i++) {
      var filteredContacts = contacts.filter((contact) => {
        return contact.lastName.toUpperCase().indexOf(alphabet[i]) === 0;
      });

      var section = {
        name: alphabet[i],
        data: filteredContacts
      };

      rowIDs[i] = filteredContacts.map((contact) => {
        return filteredContacts.indexOf(contact);
      });

      data.push(section);
    }

    return {
      dataSource: datasource.cloneWithRowsAndSections(data, sectionIDs, rowIDs),
      contacts: contacts
    };
  },

  renderRow: function(rowdata) {
    return <ListViewCell contact={rowdata}/>;
  },

  renderSectionHeader: function(sectionData) {
    return (
      <View style={styles.row}>
        <Text>{sectionData}</Text>
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
