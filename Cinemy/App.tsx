import React from 'react';
import {Text, View} from 'react-native';

const HelloWorldApp = () => {
  const x = 'Hello World!';
  console.log(x);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
    </View>
  );
};
export default HelloWorldApp;
