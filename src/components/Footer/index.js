import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';

import Logo from '../../assets/Tickitz.png';

import Icon_fb from '../../assets/icon_fb.png';
import Icon_yt from '../../assets/icon_yt.png';
import Icon_ig from '../../assets/icon_ig.png';
import Icon_tw from '../../assets/icon_tw.png';
import Sponsor1 from '../../assets/sponsor1.png';
import Sponsor2 from '../../assets/sponsor2.png';
import Sponsor3 from '../../assets/sponsor3.png';

class Footer extends Component {
    render() {
        return (
            <ScrollView>
                <View style={style.container}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Image source={Logo} style={button.logo} />
                    </TouchableOpacity>
                    <Text style={style.slogan}>
                        Stop waiting in line. Buy tickets conveniently, watch
                        movies quietly.
                    </Text>
                    <Text style={style.subTitle}>Explore</Text>
                    <View style={style.rowDirection}>
                        <TouchableOpacity>
                            <Text style={button.menu}>Cinemas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={button.menu}>Movies List</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={button.menu}>Notification</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={button.menu}>My Ticket</Text>
                    </TouchableOpacity>
                    <Text style={style.subTitle}>Our Sponsor</Text>
                    <View style={style.rowDirection}>
                        <TouchableOpacity>
                            <Image style={button.sponsor1} source={Sponsor1} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={button.sponsor2} source={Sponsor2} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={button.sponsor3} source={Sponsor3} />
                        </TouchableOpacity>
                    </View>
                    <Text style={style.subTitle}>Follow us</Text>

                    <View style={style.rowDirectionFlexStart}>
                        <TouchableOpacity>
                            <Image style={style.space} source={Icon_fb} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={style.space} source={Icon_ig} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={style.space} source={Icon_tw} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={style.space} source={Icon_yt} />
                        </TouchableOpacity>
                    </View>
                    <Text style={style.footer}>
                        © 2020 Tickitz. All Rights Reserved.
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingVertical: 72,
    },
    slogan: {
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.75,
        color: '#6E7191',
    },
    subTitle: {
        marginTop: 50,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    rowDirection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowDirectionFlexStart: {
        flexDirection: 'row',
    },
    space: {
        marginRight: 40,
    },
    footer: {
        marginTop: 70,
        fontSize: 13,
        lineHeight: 22,
        fontWeight: '400',
        letterSpacing: 0.75,
        color: '#6E7191',
    },
});

const button = StyleSheet.create({
    logo: {
        width: 141,
        height: 37,
        marginBottom: 24,
    },
    menu: {
        fontSize: 14,
        lineHeight: 26,
        letterSpacing: 0.75,
        color: '#6E7191',
    },
    sponsor1: {
        width: 80,
        height: 30,
    },
    sponsor2: {
        width: 107,
        height: 17,
    },
    sponsor3: {
        width: 77,
        height: 24,
    },
});

export default Footer;
