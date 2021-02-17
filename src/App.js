import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
// import Router from './router';
import Register from './screens/Register';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Router /> */}
      <Register />
    </NavigationContainer>
  );
};

export default App;
