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
  ListView
} = React;

var reactNativeTest = React.createClass({
  getInitialState: () => {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => { return r1 !== r2; }
    });

    return {
      dataSource: ds.cloneWithRows(['test1', 'test2'])
    };
  },

  renderRow: (rowdata) => {
    return (
      <View style={styles.row}>
        <Text>{ rowdata }</Text>
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
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD'
  }
});

AppRegistry.registerComponent('reactNativeTest', () => reactNativeTest);
