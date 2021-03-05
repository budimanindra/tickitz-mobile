import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    TextInput,
} from 'react-native';

import http from '../../helpers/http';

import {connect} from 'react-redux';

import Footer from '../../components/Footer';

import Icon from 'react-native-vector-icons/FontAwesome';

import Success from '../../assets/success.png';
import Barcode from '../../assets/barcode.png';

export class TicketResults extends Component {
    state = {seatBought: [], price: 0, date: '', time: ''};

    async componentDidMount() {
        const {date, totalPrice, seatBought, time} = this.props.route.params;
        this.setState({
            seatBought: seatBought,
            price: totalPrice,
            date: date,
            time: time,
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={style.container}>
                    <View style={style.sectionCard}>
                        <View style={style.centerDirection}>
                            <Image source={Success} />
                            <Text style={style.thanksText}>Thank You!</Text>
                            <Text style={style.infoText}>
                                Your transaction was successful
                            </Text>
                            <View style={style.rowDirection}>
                                <Image source={Barcode} />
                                <Image source={Barcode} />
                                <Image source={Barcode} />
                            </View>
                        </View>

                        <View style={style.movieDetailsDirection}>
                            <View style={text.MovieSpecificationFlex}>
                                <Text style={text.MovieSpecificationKey}>
                                    Movie
                                </Text>
                                <Text style={text.MovieSpecificationValue}>
                                    {this.props.movie.details.name}
                                </Text>
                            </View>
                            <View style={text.MovieSpecificationFlex}>
                                <Text style={text.MovieSpecificationKey}>
                                    Category
                                </Text>
                                <Text style={text.MovieSpecificationValue}>
                                    PG-13
                                </Text>
                            </View>
                        </View>

                        <View style={style.movieDetailsDirection}>
                            <View style={text.MovieSpecificationFlex}>
                                <Text style={text.MovieSpecificationKey}>
                                    Date
                                </Text>
                                <Text style={text.MovieSpecificationValue}>
                                    {this.state.date}
                                </Text>
                            </View>
                            <View style={text.MovieSpecificationFlex}>
                                <Text style={text.MovieSpecificationKey}>
                                    Time
                                </Text>
                                <Text style={text.MovieSpecificationValue}>
                                    {this.state.time}
                                </Text>
                            </View>
                        </View>

                        <View style={style.movieDetailsDirection}>
                            <View style={text.MovieSpecificationFlex}>
                                <Text style={text.MovieSpecificationKey}>
                                    Count
                                </Text>
                                <Text style={text.MovieSpecificationValue}>
                                    {this.state.seatBought.length} pcs
                                </Text>
                            </View>
                            <View style={text.MovieSpecificationFlex}>
                                <Text style={text.MovieSpecificationKey}>
                                    Seats
                                </Text>
                                <Text style={text.MovieSpecificationValue}>
                                    {this.state.seatBought.join(', ')}
                                </Text>
                            </View>
                        </View>

                        <View style={style.totalPayment}>
                            <Text>Total</Text>
                            <Text>Rp{this.state.price}</Text>
                        </View>
                    </View>
                </View>
                <Footer />
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    movie: state.movie,
});

export default connect(mapStateToProps)(TicketResults);

const style = StyleSheet.create({
    container: {
        paddingTop: 48,
        paddingBottom: 72,
        paddingHorizontal: 40,
    },
    sectionCard: {
        padding: 32,
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
    },
    centerDirection: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowDirection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    totalPayment: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#AAAAAA',
    },
    thanksText: {
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 32,
        letterSpacing: 1,
        color: '#000000',
        marginTop: 13,
        marginBottom: 8,
    },
    infoText: {
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: 0.25,
        color: '#AAAAAA',
        marginBottom: 24,
    },
    movieDetailsDirection: {
        flexDirection: 'row',
        marginVertical: 24,
    },
});

const text = StyleSheet.create({
    MovieSpecificationFlex: {
        flex: 1,
    },
    MovieSpecificationKey: {
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 22,
        color: '#8692A6',
    },
    MovieSpecificationValue: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 28,
        color: '#14142B',
    },
});
