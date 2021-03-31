import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    TextInput,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/FontAwesome';

import {showMessage} from 'react-native-flash-message';

import Logo from '../../assets/V1-Signup.png';

import {connect} from 'react-redux';

import {logout} from '../../redux/actions/auth';

class Navbar extends Component {
    state = {
        collapsed: true,
    };

    toogleExpanded = () => {
        this.setState({collapsed: !this.state.collapsed});
    };

    doLogout = async () => {
        await this.props.logout();
        showMessage({
            message: 'Success',
            description: 'Succesfully logged out',
            type: 'success',
        });
        this.props.navigation.replace('Login');
    };

    render() {
        const {
            collapsible,
            form,
            textInput,
            header,
            content,
            trademark,
            trademarkText,
        } = styles;
        return (
            <View>
                <View style={header}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <View>
                            <Image source={Logo} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.toogleExpanded}>
                        <Icon name="bars" size={25} />
                    </TouchableOpacity>
                </View>

                <Collapsible
                    style={collapsible}
                    collapsed={this.state.collapsed}
                    align="center">
                    <View style={form}>
                        <Icon name="search" size={25} color="grey" />
                        <TextInput style={textInput} placeholder="Search..." />
                    </View>

                    {/* <View style={[content, rowDirection]}>
                        <Text>Location </Text>
                        <TouchableOpacity>
                            <Icon name="caret-down" size={25} color="grey" />
                        </TouchableOpacity>
                    </View>
                    <View style={content}>
                        <TouchableOpacity>
                            <Text>Movies</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={content}>
                        <TouchableOpacity>
                            <Text>Cinemas</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={content}>
                        <TouchableOpacity>
                            <Text>Buy Ticket</Text>
                        </TouchableOpacity>
                    </View> */}

                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('Profile')
                        }>
                        <View style={content}>
                            <Text>Profile</Text>
                        </View>
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('AdminPage')
                        }>
                        <View style={content}>
                            <Text>Admin Page</Text>
                        </View>
                    </TouchableOpacity> */}

                    <TouchableOpacity onPress={this.doLogout}>
                        <View style={content}>
                            <Text>Log Out</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={trademark}>
                        <Text style={trademarkText}>
                            © 2020 Tickitz. All Rights Reserved.
                        </Text>
                    </View>
                </Collapsible>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 30,
        paddingVertical: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    collapsible: {
        backgroundColor: '#FFFFFF',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        alignItems: 'center',
        borderWidth: 0.3,
        borderColor: '#DADADA',
        backgroundColor: '#FFFFFF',
    },
    trademark: {
        paddingBottom: 32,
        paddingTop: 56,
        alignItems: 'center',
        borderWidth: 0.3,
        borderColor: '#DADADA',
        backgroundColor: '#FFFFFF',
    },
    trademarkText: {
        fontSize: 13,
        lineHeight: 22,
        letterSpacing: 0.75,
        color: '#6E7191',
    },
    form: {
        // flex: 1,
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderColor: '#DEDEDE',
        paddingHorizontal: 20,
        marginTop: 12,
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    textInput: {
        flex: 1,
        marginLeft: 10,
    },
    rowDirection: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

const mapStateToProps = (state) => ({auth: state.auth});

const mapDispatchToProps = {logout};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
