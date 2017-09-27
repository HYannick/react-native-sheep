import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {props.headerText}
      </Text>
    </View>
  );
}

const styles = {
  textStyle: {
    fontSize: 20,
    color: '#fff'
  },
  viewStyle: {
    backgroundColor: '#EF746F',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 9,
    position: 'relative'
  }
};

export {Header};