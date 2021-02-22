import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import logo from '../../assets/V1-Signup.png';

const ForgotPassword = () => {
    return (
        <View style={style.container}>
            <Image source={logo} />
            <View>
                <Text style={style.title}>Forgot Password</Text>
                <Text style={style.text}>
                    we'll send a link to your email shortly
                </Text>
            </View>

            <View>
                <Text>Email</Text>
                <TextInput
                    style={style.form}
                    keyboardType="email-address"
                    placeholder="write your email"
                />
            </View>

            <TouchableOpacity>
                <View style={button.primary}>
                    <Text style={button.text}>Activate now</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        paddingTop: 54.19,
        paddingHorizontal: 24,
        paddingBottom: 88,
    },
    title: {
        fontWeight: '600',
        fontSize: 26,
        lineHeight: 31.47,
        letterSpacing: 0.5,
        marginTop: 46.48,
    },
    text: {
        fontSize: 15,
        lineHeight: 19,
        letterSpacing: 0.1,
        color: '#8692A6',
        marginBottom: 46,
    },
    form: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#DEDEDE',
        backgroundColor: '#FCFDFE',
        paddingLeft: 20,
        marginTop: 12,
        marginBottom: 25,
    },
});

const button = StyleSheet.create({
    primary: {
        backgroundColor: '#5F2EEA',
        height: 64,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
    },
});

export default ForgotPassword;
