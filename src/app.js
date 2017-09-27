import React, {Component} from 'react';
import firebase from 'firebase';
import {View} from 'react-native';
import {Header} from './components/common/';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAbgDps4PvfUb-sYvOaiFFRvSLGbHn3RGw',
      authDomain: 'auth-61033.firebaseapp.com',
      databaseURL: 'https://auth-61033.firebaseio.com',
      projectId: 'auth-61033',
      storageBucket: 'auth-61033.appspot.com',
      messagingSenderId: '935812031084'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication"></Header>
        <LoginForm />
      </View>
    )
  }
}

export default App;