import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import logo from '../../assets/V1-Signup.png';

const Register = () => {
  return (
    <View style={style.container}>
      <Image source={logo} />
      <View>
        <Text style={style.title}>Sign Up</Text>
      </View>
      <View>
        <Text>Email</Text>
        <TextInput style={style.form} placeholder="write your email" />
        <Text>Password</Text>
        <TextInput style={style.form} placeholder="write your password" />
      </View>
      <Button
        style={style.button}
        onPress={() => Alert.alert('tombol ditekan')}
        title="Join for free"
        color="#5F2EEA"
        // disabled
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: 54.19,
    paddingHorizontal: 24,
  },
  title: {
    fontWeight: '600',
    fontSize: 26,
    lineHeight: 31.47,
    letterSpacing: 0.5,
    marginTop: 46.48,
    marginBottom: 41,
  },
  form: {
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: '#FCFDFE',
    paddingLeft: 20,
    marginTop: 12,
    marginBottom: 25,
  },
  button: {
    borderRadius: 4,
    width: 327,
    height: 64,
  },
});

export default Register;
