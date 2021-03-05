import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import Logo from '../../assets/V1-Signup.png';
import GoogleIcon from '../../assets/icon-google.png';
import FbIcon from '../../assets/icon-facebook.png';

import {login} from '../../redux/actions/auth';

class Login extends Component {
    state = {
        visible: true,
        email: '',
        password: '',
    };

    doLogin = async () => {
        const {email, password} = this.state;
        await this.props.login(email, password);
    };

    render() {
        return (
            <ScrollView>
                <View style={style.container}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Image source={Logo} />
                    </TouchableOpacity>
                    <View>
                        <Text style={style.title}>Sign In</Text>
                    </View>

                    <View>
                        <Text>Email</Text>
                        <TextInput
                            style={style.form}
                            keyboardType="email-address"
                            placeholder="write your email"
                            onChangeText={(email) => this.setState({email})}
                        />
                    </View>

                    <Text>Password</Text>
                    <View style={style.form}>
                        <TextInput
                            style={style.textInput}
                            placeholder="write your password"
                            secureTextEntry={this.state.visible}
                            onChangeText={(password) =>
                                this.setState({password})
                            }
                        />
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({visible: !this.state.visible})
                            }>
                            <Icon name="eye" size={25} />
                        </TouchableOpacity>
                    </View>

                    <Text style={style.alertText}>
                        {this.props.auth.errorMsg}
                    </Text>

                    <TouchableOpacity onPress={this.doLogin}>
                        <View style={button.primary}>
                            <Text style={button.text}>Sign in</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={style.spacing}>
                        <Text>Forgot your password ?</Text>
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate('ForgotPassword')
                            }>
                            <Text style={style.clickableText}> Reset now</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={style.orText}>Or</Text>

                    <View style={button.contentDirection}>
                        <TouchableOpacity>
                            <View style={button.card}>
                                <Image
                                    source={GoogleIcon}
                                    style={button.googleIcon}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={button.card}>
                                <Image source={FbIcon} style={button.fbIcon} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

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
        marginBottom: 41,
    },
    form: {
        // flex: 1,
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: '#FCFDFE',
        borderColor: '#DEDEDE',
        paddingHorizontal: 20,
        marginTop: 12,
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
    },
    spacing: {
        marginTop: 32,
        flexDirection: 'row',
    },
    orText: {
        marginVertical: 32,
        textAlign: 'center',
        color: '#AAAAAA',
        fontSize: 12,
        lineHeight: 15,
    },
    clickableText: {
        color: '#5F2EEA',
    },
    alertText: {
        color: '#fd1c5f',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: -10,
        borderRadius: 5,
    },
});

const button = StyleSheet.create({
    contentDirection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
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
    card: {
        width: 64,
        height: 64,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    fbIcon: {
        width: 24,
        height: 24,
    },
    googleIcon: {
        width: 24,
        height: 24,
    },
});

const mapStateToProps = (state) => ({auth: state.auth});

const mapDispatchToProps = {login};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
