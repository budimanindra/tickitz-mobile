import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Footer from '../../components/Footer';

import userAvatar from '../../assets/user.png';
import star from '../../assets/star.png';
import ebv from '../../assets/sponsor1.png';
import cineone from '../../assets/sponsor2.png';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const DetailsAccount = () => {
    return (
        <ScrollView>
            <View style={style.container}>
                <View style={style.rowSpaceBetween}>
                    <Text>INFO</Text>
                    <TouchableOpacity>
                        <Icon name="ellipsis-h" color="#5F2EEA" size={25} />
                    </TouchableOpacity>
                </View>
                <View style={style.centeredContent}>
                    <Image style={style.userAvatar} source={userAvatar} />
                    <Text style={text.userName}>Jonas El Rodriguez</Text>
                    <Text style={text.userStatus}>Moviegoers</Text>
                </View>
                <View style={style.lineStyle1} />
                <Text style={text.titleSmall}>Loyalty Points</Text>
                <View>
                    <View style={style.userCard}>
                        <View style={style.rowSpaceBetween}>
                            <Text style={text.cardMoviegoers}>Moviegoers</Text>
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
                        placeholder="Jonas El Rodriguez"
                    />
                </View>
                <Text style={text.settingsValue}>E-mail</Text>
                <View style={style.form}>
                    <TextInput
                        style={style.textInput}
                        placeholder="jonasrodrigu123@gmail.com"
                    />
                </View>
                <Text style={text.settingsValue}>Phone Number</Text>
                <View style={style.form}>
                    <TextInput
                        style={style.textInput}
                        keyboardType="phone-pad"
                        placeholder="081445687121"
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
                        secureTextEntry={true}
                    />
                    <TouchableOpacity>
                        <Icon name="eye" size={15} />
                    </TouchableOpacity>
                </View>
                <Text style={text.settingsValue}>Confirm</Text>
                <View style={style.form}>
                    <TextInput
                        style={style.textInput}
                        placeholder="repeat your new password"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity>
                        <Icon name="eye" size={15} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View style={style.primary}>
                        <Text style={style.text}>Update Changes</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Footer />
        </ScrollView>
    );
};

const OrderHistory = () => {
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
};

const Tab = createMaterialTopTabNavigator();

export default function Profile() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Details Account" component={DetailsAccount} />
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
