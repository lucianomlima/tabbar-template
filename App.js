/**
 * App2Sales React Native App Template
 * https://github.com/app2sales/a2s-template
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          App2Sales Template
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
