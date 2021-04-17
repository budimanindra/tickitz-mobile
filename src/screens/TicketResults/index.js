import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {saveTicketHistory} from '../../redux/actions/transaction';

import Footer from '../../components/Footer';
import Success from '../../assets/success.png';
import Barcode from '../../assets/barcode.png';

export class TicketResults extends Component {
    async componentDidMount() {
        await this.props.saveTicketHistory(
            this.props.auth.token,
            this.props.movie.details.name,
            this.props.transaction.transactionDetails.date,
            this.props.transaction.transactionDetails.time,
            this.props.route.params.cinemaImage,
            this.props.route.params.cinemaAddress,
        );
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
                                    {
                                        this.props.transaction
                                            .transactionDetails.date
                                    }
                                </Text>
                            </View>
                            <View style={text.MovieSpecificationFlex}>
                                <Text style={text.MovieSpecificationKey}>
                                    Time
                                </Text>
                                <Text style={text.MovieSpecificationValue}>
                                    {
                                        this.props.transaction
                                            .transactionDetails.time
                                    }
                                </Text>
                            </View>
                        </View>

                        <View style={style.movieDetailsDirection}>
                            <View style={text.MovieSpecificationFlex}>
                                <Text style={text.MovieSpecificationKey}>
                                    Count
                                </Text>
                                <Text style={text.MovieSpecificationValue}>
                                    {
                                        this.props.transaction
                                            .transactionDetails.seat.length
                                    }{' '}
                                    pcs
                                </Text>
                            </View>
                            <View style={text.MovieSpecificationFlex}>
                                <Text style={text.MovieSpecificationKey}>
                                    Seats
                                </Text>
                                <Text style={text.MovieSpecificationValue}>
                                    {this.props.transaction.transactionDetails.seatPosition.join(
                                        ', ',
                                    )}
                                </Text>
                            </View>
                        </View>

                        <View style={style.totalPayment}>
                            <Text>Total</Text>
                            <Text>
                                Rp
                                {
                                    this.props.transaction.transactionDetails
                                        .totalPrice
                                }
                            </Text>
                        </View>
                    </View>
                </View>
                <Footer />
            </ScrollView>
        );
    }
}

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

const mapStateToProps = (state) => ({
    auth: state.auth,
    transaction: state.transaction,
    movie: state.movie,
});

const mapDispatchToProps = {saveTicketHistory};

export default connect(mapStateToProps, mapDispatchToProps)(TicketResults);
