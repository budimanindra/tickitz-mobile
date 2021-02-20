import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// import Router from './router';
import Register from './screens/Register';
import Login from './screens/Login';
import ForgotPassword from './screens/ForgotPassword';
import Home from './screens/Home';
import MovieDetails from './screens/MovieDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          component={Register}
          options={{headerShown: false}}
          name="Register"
        />
        <Stack.Screen
          component={Login}
          options={{headerShown: false}}
          name="Login"
        />
        <Stack.Screen
          component={ForgotPassword}
          options={{headerShown: false}}
          name="ForgotPassword"
        /> */}
        {/* <Stack.Screen
          component={Home}
          options={{headerShown: false}}
          name="Home"
        /> */}
        <Stack.Screen
          component={MovieDetails}
          options={{headerShown: false}}
          name="MovieDetails"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
