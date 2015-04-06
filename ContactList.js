'use strict';

var React = require('react-native');
var ContactCell = require('./ContactCell');
var ContactListSectionHeader = require('./ContactListSectionHeader');
var {
  StyleSheet,
  ListView
} = React;

var ContactList = React.createClass({
  getInitialState: function() {
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

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var data = [];
    var rowIDs = [];

    for(var i = 0, len = alphabet.length; i < len; i++) {
      var filteredContacts = this.props.contacts.filter((contact) => {
        return contact.lastName.toUpperCase().indexOf(alphabet[i]) === 0;
      });

      if (filteredContacts.length > 0) {
        var section = {
          name: alphabet[i],
          data: filteredContacts
        };

        rowIDs[rowIDs.length] = filteredContacts.map((contact) => {
          return filteredContacts.indexOf(contact);
        });

        data.push(section);
      }
    }

    var sectionIDs = data.map((section) => {
      return data.indexOf(section);
    });

    return {
      dataSource: datasource.cloneWithRowsAndSections(data, sectionIDs, rowIDs)
    };
  },

  renderRow: function(rowdata) {
    return <ContactCell contact={rowdata}/>;
  },

  renderSectionHeader: function(sectionData) {
    return <ContactListSectionHeader text={sectionData}/> ;
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

module.exports = ContactList;
