import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

export default class todoWarmUp extends Component {
  constructor() {
    super();
    this.state = {
      todos: [1,2,3,8]
    };
  }

  handleChange(e) {
    console.log(e);
  }

  handlePress(e) {
    console.log(e);
  }

  render() {
    let { todos } = this.state;
    return (
      <View style={styles.container}>
        {todos.map((todo, i) => <Text key={i}>{todo}</Text>) }
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChange={e => this.handleChange(e)} />
        <TouchableHighlight onPress={e => this.handlePress(e)}>
          <Text>BOOM</Text>
        </TouchableHighlight>
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('todoWarmUp', () => todoWarmUp);
