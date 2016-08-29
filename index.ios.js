/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Ctrip extends Component {
  render() {
  	return (
  		<View style = {styles.container}>
  		<View style = {styles.item}>
      <Text>酒店</Text>
      </View>

      <View style = {styles.item}>
      <View style = {styles.center, styles.flex}>
      <Text>海外酒店</Text>
      </View>
      <View style = {styles.center, styles.flex}>
      <Text>特惠酒店</Text>
      </View>
      </View>

      <View style = {styles.item}>

      <View style = {styles.center, styles.flex}>
      <Text>团购</Text>
      </View>
      <View style = {styles.center, styles.flex}>
      <Text>客栈.公寓</Text>
      </View>
      </View> 

      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth:1,
    borderColor: 'red',
    flexDirection: 'row',
    marginTop:25,
    marginLeft:5,
    marginRight:5,
    height:84,
    borderRadius:5,
    padding:2,
    backgroundColor:'#FF0067',
  },
  item:{
  	flex:1,
  	height:80,
  	borderColor:'blue',
  	borderWidth:1
  },
  center:{
    justifyContent:'center',
    alignItems:'center',
  },
  flex:{
    flex:1,
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

AppRegistry.registerComponent('Ctrip', () => Ctrip);
