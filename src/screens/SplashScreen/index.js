import React from 'react';
import {View, ImageBackground, StyleSheet, Image, Text} from 'react-native';
import Logo from '../../assets/V1-Signup.png';

function SplashScreen({navigation}) {
    setTimeout(() => {
        navigation.replace('Register');
    }, 2000);
    return (
        // <ImageBackground
        //     style={{flex: 1}}
        //     source={require('../../assets/Tickitz.png')}>
        //     <Text>Indra</Text>
        // </ImageBackground>
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
