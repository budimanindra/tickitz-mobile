import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    TextInput,
    Modal,
} from 'react-native';

import {REACT_APP_API_URL} from '@env';

import Icon from 'react-native-vector-icons/FontAwesome';

import http from '../../helpers/http';

import {showMessage} from 'react-native-flash-message';

import {connect} from 'react-redux';

import {updateProfileDetails, getUser} from '../../redux/actions/auth';

import Footer from '../../components/Footer';

import userAvatar from '../../assets/user.png';
import star from '../../assets/star.png';
import ebv from '../../assets/sponsor1.png';
import cineone from '../../assets/sponsor2.png';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

class DetailsAccount extends Component {
    state = {
        visible: true,
        modalVisible: false,
        photo: null,
        email: '',
        password: '',
        fullName: '',
        phoneNumber: '',
        repassword: '',
    };

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    };

    openGallery = () => {
        const options = {mediaType: 'photo'};
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
            } else if (response.fileSize > 1 * 1024 * 1024) {
                showMessage({
                    message: 'Failed to update photo profile',
                    description: 'File size too large, max 2MB',
                    type: 'danger',
                });
            } else if (response.errorMessage) {
                showMessage({
                    message: 'Failed to update photo profile',
                    description: 'Please input jpeg, jpg, or png photo file',
                    type: 'danger',
                });
            } else {
                showMessage({
                    message: 'Successfully to select photo profile',
                    description: 'Please press upload photo image',
                    type: 'info',
                    autoHide: false,
                });
                this.setState({photo: response});
            }
        });
    };

    openCamera = () => {
        const options = {mediaType: 'photo'};
        launchCamera(options, (response) => {
            if (response.didCancel) {
            } else if (response.fileSize > 1 * 1024 * 1024) {
                showMessage({
                    message: 'Failed to update photo profile',
                    description: 'File size too large, max 2MB',
                    type: 'danger',
                });
            } else if (response.errorMessage) {
                showMessage({
                    message: 'Failed to update photo profile',
                    description: 'Please input jpeg, jpg, or png photo file',
                    type: 'danger',
                });
            } else {
                showMessage({
                    message: 'Successfully to update photo profile',
                    description: 'Please press upload photo image',
                    type: 'info',
                    autoHide: false,
                });
                this.setState({photo: response});
            }
        });
    };

    uploadPhoto = async () => {
        const token = this.props.auth.token;
        const fileUpload = {
            uri: this.state.photo.uri,
            type: this.state.photo.type,
            name: this.state.photo.fileName,
        };
        const file = new FormData();
        file.append('photo', fileUpload);
        await http(token).patch('/profile/update-profile-photo', file);
        await this.props.getUser(token);
        showMessage({
            message: 'Uploading your photo...',
            type: 'warning',
        });
        setTimeout(() => {
            showMessage({
                message: 'Successfully to update photo profile',
                type: 'success',
            });
            this.setModalVisible(false);
        }, 3000);
    };

    doUpdateProfileDetails = async () => {
        const {email, password, fullName, phoneNumber, repassword} = this.state;
        if (password === repassword) {
            const token = this.props.auth.token;
            await this.props.updateProfileDetails(
                email,
                password,
                fullName,
                phoneNumber,
                token,
            );
            await this.props.getUser(token);
            if (this.props.auth.errorMsg === '') {
                showMessage({
                    message: 'Success',
                    description: 'Succesfully to update user profile',
                    type: 'success',
                });
            } else {
                showMessage({
                    message: 'Failed',
                    description: 'Failed to update user profile',
                    type: 'danger',
                });
            }
        } else {
            showMessage({
                message: 'Failed to update user profile',
                description: 'Password didnt match',
                type: 'danger',
            });
        }
    };

    async componentDidMount() {
        if (Object.keys(this.props.auth.profile).length === 0) {
            const token = this.props.auth.token;
            await this.props.getUser(token);
        }
    }

    render() {
        const {modalVisible} = this.state;
        return (
            <ScrollView>
                <View style={style.centeredModal}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            this.setModalVisible(!modalVisible);
                        }}>
                        <View style={style.centeredModal}>
                            <View style={style.modalView}>
                                <Text style={style.modalText}>
                                    Do you want to change your photo ?
                                </Text>
                                <TouchableOpacity
                                    style={style.button}
                                    onPress={() => this.openGallery()}>
                                    <Text style={style.textStyle}>
                                        Choose photo from gallery
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={style.button}
                                    onPress={() => this.openCamera()}>
                                    <Text style={style.textStyle}>
                                        Take new photo from camera
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={style.buttonSelected}
                                    onPress={() => this.uploadPhoto()}>
                                    <Text style={style.textStyle}>
                                        Update with selected photo
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>

                <View style={style.container}>
                    <View style={style.rowSpaceBetween}>
                        <Text>INFO</Text>
                        <TouchableOpacity
                            onPress={() => this.setModalVisible(true)}>
                            <Icon name="ellipsis-h" color="#5F2EEA" size={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={style.centeredContent}>
                        <TouchableOpacity
                            onPress={() => this.setModalVisible(true)}>
                            <Image
                                style={style.userAvatar}
                                source={
                                    this.props.auth.profile.photo
                                        ? {
                                              uri: `${REACT_APP_API_URL}/${this.props.auth.profile.photo}`,
                                          }
                                        : userAvatar
                                }
                            />
                        </TouchableOpacity>
                        <Text style={text.userName}>
                            {this.props.auth.profile.fullName !== null
                                ? this.props.auth.profile.fullName
                                : 'User'}
                        </Text>
                        <Text style={text.userStatus}>Moviegoers</Text>
                    </View>
                    <View style={style.lineStyle1} />
                    <Text style={text.titleSmall}>Loyalty Points</Text>
                    <View>
                        <View style={style.userCard}>
                            <View style={style.rowSpaceBetween}>
                                <Text style={text.cardMoviegoers}>
                                    Moviegoers
                                </Text>
                                <Image style={style.star} source={star} />
                            </View>
                            <View style={style.rowFlexStart}>
                                <Text style={text.cardPointsValue}>320 </Text>
                                <Text style={text.cardPointsTitle}>points</Text>
                            </View>
                        </View>
                        <Text style={text.becomeMaster}>
                            180 points become a master
                        </Text>
                    </View>
                </View>

                <Text style={text.accountSettings}>Account Settings</Text>
                <View style={style.container}>
                    <Text style={text.settingsTitle}>Details Information</Text>
                    <View style={style.lineStyle1} />
                    <Text style={text.settingsValue}>Full Name</Text>
                    <View style={style.form}>
                        <TextInput
                            style={style.textInput}
                            placeholder={
                                this.props.auth.profile.fullName || 'User'
                            }
                            onChangeText={(fullName) =>
                                this.setState({fullName})
                            }
                        />
                    </View>
                    <Text style={text.settingsValue}>E-mail</Text>
                    <View style={style.form}>
                        <TextInput
                            style={style.textInput}
                            placeholder={
                                this.props.auth.profile.email ||
                                'user@gmail.com'
                            }
                            onChangeText={(email) => this.setState({email})}
                        />
                    </View>
                    <Text style={text.settingsValue}>Phone Number</Text>
                    <View style={style.form}>
                        <TextInput
                            style={style.textInput}
                            keyboardType="phone-pad"
                            placeholder={
                                this.props.auth.profile.phoneNumber ||
                                '081234567890'
                            }
                            onChangeText={(phoneNumber) =>
                                this.setState({phoneNumber})
                            }
                        />
                    </View>
                </View>

                <View style={style.container}>
                    <Text style={text.settingsTitle}>Account and Privacy</Text>
                    <View style={style.lineStyle1} />
                    <Text style={text.settingsValue}>New Password</Text>
                    <View style={style.form}>
                        <TextInput
                            style={style.textInput}
                            placeholder="write your new password"
                            secureTextEntry={this.state.visible}
                            onChangeText={(password) =>
                                this.setState({password})
                            }
                        />
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({visible: !this.state.visible})
                            }>
                            <Icon name="eye" size={15} />
                        </TouchableOpacity>
                    </View>
                    <Text style={text.settingsValue}>Confirm</Text>
                    <View style={style.form}>
                        <TextInput
                            style={style.textInput}
                            placeholder="repeat your new password"
                            secureTextEntry={this.state.visible}
                            onChangeText={(repassword) =>
                                this.setState({repassword})
                            }
                        />
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({visible: !this.state.visible})
                            }>
                            <Icon name="eye" size={15} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={this.doUpdateProfileDetails}>
                        <View style={style.primary}>
                            <Text style={style.text}>Update Changes</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Footer />
            </ScrollView>
        );
    }
}

class OrderHistory extends Component {
    render() {
        return (
            <ScrollView>
                <View style={style.container2}>
                    <Image source={cineone} />
                    <Text style={text.schedule}>
                        Tuesday, 07 July 2020 - 04:30pm
                    </Text>
                    <Text style={text.movie}>Spider-Man: Homecoming</Text>
                    <View style={style.lineStyle1} />
                    <TouchableOpacity>
                        <View style={style.success}>
                            <Text style={style.text}>Ticket in active</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={style.container2}>
                    <Image source={ebv} />
                    <Text style={text.schedule}>
                        Monday, 14 June 2020 - 02:00pm
                    </Text>
                    <Text style={text.movie}>Avengers: End Game</Text>
                    <View style={style.lineStyle1} />
                    <View style={style.disabled}>
                        <Text style={style.text}>Ticket used</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({auth: state.auth});

const mapDispatchToProps = {updateProfileDetails, getUser};

const DetailsAccountConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DetailsAccount);

const Tab = createMaterialTopTabNavigator();

export default function Profile() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Details Account"
                component={DetailsAccountConnected}
            />
            <Tab.Screen name="Order History" component={OrderHistory} />
        </Tab.Navigator>
    );
}

const style = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        marginVertical: 35,
        paddingHorizontal: 40,
        paddingTop: 40,
        paddingBottom: 80,
        backgroundColor: 'white',
        borderRadius: 15,
    },
    container2: {
        marginHorizontal: 24,
        marginVertical: 35,
        paddingHorizontal: 40,
        paddingTop: 25,
        paddingBottom: 32,
        backgroundColor: 'white',
        borderRadius: 15,
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowFlexStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    userAvatar: {
        marginVertical: 32,
        width: 136,
        height: 136,
        borderRadius: 136 / 2,
    },
    centeredContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    lineStyle1: {
        borderWidth: 0.5,
        borderColor: '#DEDEDE',
        marginBottom: 40,
    },
    star: {
        width: 42.41,
        height: 40.39,
    },
    userCard: {
        backgroundColor: '#5F2EEA',
        paddingVertical: 18,
        paddingHorizontal: 15,
        borderRadius: 12,
        marginVertical: 30,
    },
    form: {
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
    success: {
        backgroundColor: '#00BA88',
        height: 64,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabled: {
        backgroundColor: '#6E7191',
        height: 64,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: '#5F2EEA',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        margin: 5,
        // elevation: 2,
        backgroundColor: 'white',
    },
    buttonSelected: {
        borderRadius: 20,
        padding: 10,
        marginTop: 50,
        backgroundColor: 'white',
    },
    textStyle: {
        color: '#5F2EEA',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
});

const text = StyleSheet.create({
    userName: {
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 34,
        letterSpacing: 0.75,
    },
    userStatus: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.75,
        marginBottom: 40,
        color: '#4E4B66',
    },
    titleSmall: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 28,
        letterSpacing: 0.75,
        color: '#4E4B66',
    },
    cardMoviegoers: {
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 34,
        letterSpacing: 0.75,
        color: 'white',
    },
    cardPointsValue: {
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 38,
        letterSpacing: 0.75,
        color: 'white',
        marginTop: 40,
    },
    cardPointsTitle: {
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 24,
        letterSpacing: 0.75,
        color: 'white',
        marginTop: 51,
    },
    becomeMaster: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 32,
        letterSpacing: 0.75,
        color: '#4E4B66',
        textAlign: 'center',
    },
    accountSettings: {
        marginLeft: 24,
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0.75,
        color: '#14142B',
    },
    settingsTitle: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 28,
        letterSpacing: 0.75,
        color: '#14142B',
    },
    settingsBody: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20,
        color: '#4E4B66',
    },
    schedule: {
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 22,
        letterSpacing: 0.25,
        color: '#AAAAAA',
        marginTop: 18,
        marginBottom: 10,
    },
    movie: {
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 28,
        letterSpacing: 0.75,
        color: '#000000',
        marginBottom: 32,
    },
});
