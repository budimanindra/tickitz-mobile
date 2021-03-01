import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';

import {connect} from 'react-redux';

import {logout} from '../../redux/actions/auth';

import Footer from '../../components/Footer';

import ebv from '../../assets/sponsor1.png';
import cineone from '../../assets/sponsor2.png';
import hiflix from '../../assets/sponsor3.png';

class AdminPage extends Component {
    doLogout = async () => {
        await this.props.logout();
    };

    render() {
        return (
            <ScrollView>
                <Text style={text.titleSection}>Movie Description</Text>
                <View style={style.container}>
                    <View style={style.cardPoster}>
                        <Image
                            source={{
                                uri:
                                    'https://xl.movieposterdb.com/06_11/1999/0211145/xl_145343_0211145_08062632.jpg',
                            }}
                            style={style.poster}
                        />
                    </View>
                    <TouchableOpacity onPress={this.doLogout}>
                        <View style={style.outlinePrimary}>
                            <Text style={style.text}>Add description</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Text style={text.titleSection}>Premiere Location</Text>
                <View style={style.container2}>
                    <View style={style.rowSpaceAround}>
                        <TouchableOpacity>
                            <View style={style.payment}>
                                <Image style={style.imageEbv} source={ebv} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={style.payment}>
                                <Image
                                    style={style.imageHiflix}
                                    source={hiflix}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={style.payment}>
                                <Image
                                    style={style.imageCineone}
                                    source={cineone}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.rowSpaceAround}>
                        <TouchableOpacity>
                            <View style={style.payment}>
                                <Image style={style.imageEbv} source={ebv} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={style.payment}>
                                <Image
                                    style={style.imageHiflix}
                                    source={hiflix}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={style.payment}>
                                <Image
                                    style={style.imageCineone}
                                    source={cineone}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Footer />
            </ScrollView>
        );
    }
}

const style = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 16,
        marginBottom: 32,
        paddingHorizontal: 40,
        paddingTop: 40,
        paddingBottom: 42,
        backgroundColor: 'white',
        borderRadius: 15,
    },
    container2: {
        marginHorizontal: 25,
        marginTop: 16,
        marginBottom: 32,
        paddingHorizontal: 10,
        paddingTop: 40,
        paddingBottom: 42,
        backgroundColor: 'white',
        borderRadius: 15,
    },
    poster: {
        width: 159,
        height: 244,
        borderRadius: 15,
    },
    cardPoster: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#A0A3BD',
        alignItems: 'center',
        padding: 32,
    },
    outlinePrimary: {
        borderColor: '#5F2EEA',
        borderWidth: 1,
        borderRadius: 10,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    text: {
        color: '#5F2EEA',
    },
    rowSpaceAround: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    payment: {
        marginVertical: 10,
        width: 80,
        height: 32,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageCineone: {
        width: 72.9,
        height: 12.49,
    },
    imageHiflix: {
        width: 71.73,
        height: 22.03,
    },
    imageEbv: {
        width: 69.6,
        height: 25.53,
    },
});

const text = StyleSheet.create({
    titleSection: {
        marginLeft: 24,
        marginTop: 32,
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0.75,
        color: '#000000',
    },
});

const mapStateToProps = (state) => ({auth: state.auth});

const mapDispatchToProps = {logout};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
