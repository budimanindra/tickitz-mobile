import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Logo from '../../assets/V1-Signup.png';

function SplashScreen({navigation}) {
    setTimeout(() => {
        navigation.replace('Register');
    }, 2000);
    return (
        <View style={style.center}>
            <Image source={Logo} />
        </View>
    );
}

const style = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

export default SplashScreen;
