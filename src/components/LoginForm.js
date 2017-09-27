import React, {Component} from 'react';
import firebase from 'firebase';
import {Text} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress() {
    const {email, password} = this.state;
    this.setState({error: '', loading: true});
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess())
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(this.onLoginSuccess())
          .catch(this.onLoginFail())
      })
  }
  onLoginSuccess(){
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  };
  onLoginFail(){
    this.setState({
      loading: false,
      error: 'Authentication Failed'
    })
  };

  renderButton() {
    if(this.state.loading) {
      return <Spinner size="small"/>
    }else {
      return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
    }
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({email})}/>
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            secure={true}
            value={this.state.password}
            onChangeText={password => this.setState({password})}/>
        </CardSection>
        <Text style={styles.errTextStyle}>{this.state.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errTextStyle : {
    fontSize: 20,
    color: '#FD0A54',
    textAlign: 'center',
    padding: 10
  }
}

export default LoginForm;