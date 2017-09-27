import React from 'react';
import {Text, View} from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
     {props.children}
    </View>
  );
}

const styles = {
  containerStyle: {
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
};

export {Card};