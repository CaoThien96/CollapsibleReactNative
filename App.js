/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import CollapsibleWrapper from './components/CollapsibleWrapper'
const instructions = Platform.select({
  ios: 'Press Cload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const mockupData = [1,2,3].map(el=>{
  return {
    title:`Collapsible so ${el}`,
    children:[
      {
        title:'Children so 1'
      },,
      {
        title:'Children so 2'
      },
      {
        title:'Children so 3'
      },
      {
        title:'Children so 4'
      }
    ]
  }
})
type Props = {};
export default class App extends Component<Props> {
  renderHeader = (item,expanded,handleExpanded)=>{
    return (
      <View>
        <TouchableOpacity onPress={handleExpanded}>
          <Text>{expanded ? "Dong" : "Mo"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{alert(item.title)}}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  renderContent = (item)=>{
    return (
      <TouchableOpacity onPress={()=>alert(item.title)}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <CollapsibleWrapper
          data={mockupData}
          renderHeader={this.renderHeader}
          renderContent = {this.renderContent}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
