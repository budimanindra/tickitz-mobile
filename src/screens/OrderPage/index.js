import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Footer from '../../components/Footer';

import {connect} from 'react-redux';

import {transactionData} from '../../redux/actions/transaction';

import Icon from 'react-native-vector-icons/FontAwesome';
import http from '../../helpers/http';

export class OrderPage extends Component {
    state = {
        seat: [],
        seatBought: [],
        seatPosition: [],
        time: '',
        cinemaId: '',
        showtimeId: '',
        date: '',
        totalPrice: '',
    };

    updateSeat = (idSeat, position) => {
        const index = this.state.seat.indexOf(idSeat);
        let newSeat = this.state.seat;
        let newSeatPosition = this.state.seatPosition;

        if (index === -1) {
            newSeat.push(idSeat);
            newSeatPosition.push(position);
            this.setState({seat: newSeat, seatPosition: newSeatPosition});
        } else {
            newSeat.splice(index, 1);
            newSeatPosition.splice(index, 1);
            this.setState({seat: newSeat, seatPosition: newSeatPosition});
        }
    };

    constructRow = (numbers, letter, counter) => {
        const row = [];
        let id = counter;
        for (let i = 0; i < numbers.length; i++) {
            const position = `${letter}${numbers[i]}`;
            if (numbers[i] === 8) {
                row.push(<Gap key={`Gap ${i}`} />);
            }
            if (this.state.seatBought.includes(position)) {
                row.push(
                    <SoldSeat key={position} position={position} idSeat={id} />,
                );
            } else {
                row.push(
                    <AvailableSeat
                        key={position}
                        updateSeat={this.updateSeat}
                        position={position}
                        idSeat={id}
                    />,
                );
            }
            id++;
        }
        return row;
    };

    constructSeat = () => {
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        const seat = [];
        let counter = 1;
        for (let i = 0; i < letters.length; i++) {
            seat.push(
                <View style={style.row} key={`Row ${i}`}>
                    {this.constructRow(numbers, letters[i], counter)}
                </View>,
            );
            counter += 14;
        }
        return seat;
    };

    buySeat = async () => {
        const {cinemaId, showtimeId, date, price} = this.props.route.params;
        const seatPosition = this.state.seatPosition;
        const time = this.state.time;
        const totalPrice = price * this.state.seat.length;

        const {seat} = this.state;

        await this.props.transactionData({
            cinemaId,
            showtimeId,
            date,
            seat,
            totalPrice,
            seatPosition,
            time,
        });

        this.props.navigation.navigate('PaymentPage');
    };

    async componentDidMount() {
        const {cinemaId, showtimeId, date} = this.props.route.params;
        const resultTickets = await http().get(
            `/tickets?idCinema=${cinemaId}&idShowtimes=${showtimeId}&date=${date}`,
        );
        this.setState({
            seatBought: resultTickets.data.results.map((seat) => seat.position),
            time: resultTickets.data.results[0].showTimes,
        });
        console.log(this.state.seatBought);
    }

    render() {
        const {cinemaId, showtimeId, date} = this.props.route.params;
        return (
            <ScrollView>
                <View style={style.container}>
                    <Text>Choose Your Seat</Text>
                    <Text>CinemaID: {cinemaId}</Text>
                    <Text>showtimeID: {showtimeId}</Text>
                    <Text>date: {date}</Text>
                    <Text>{this.state.seat}</Text>

                    <View style={style.seatingContainer}>
                        <View style={style.lineStyle1} />

                        <View>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={true}>
                                <View>{this.constructSeat()}</View>
                            </ScrollView>
                        </View>

                        <View style={style.lineStyle3} />
                        <Text style={style.seatInfo}>Seating Key</Text>

                        <View style={style.row1}>
                            <View style={style.cardInfoSeat}>
                                <View style={style.row2}>
                                    <Icon
                                        name="long-arrow-down"
                                        style={style.iconArrow}
                                    />
                                    <Text> A - G</Text>
                                </View>
                                <View style={style.row2}>
                                    <View style={button.seat} />
                                    <Text>Available</Text>
                                </View>
                                <View style={style.row2}>
                                    <View style={button.seatLove} />
                                    <Text>Love nest</Text>
                                </View>
                            </View>
                            <View style={style.cardInfoSeat}>
                                <View style={style.row2}>
                                    <Icon
                                        name="long-arrow-right"
                                        style={style.iconArrow}
                                    />
                                    <Text> 1 - 14 </Text>
                                </View>
                                <View style={style.row2}>
                                    <View style={button.seatSelected} />
                                    <Text>Selected</Text>
                                </View>
                                <View style={style.row2}>
                                    <View style={button.seatSold} />
                                    <Text>Sold</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity onPress={this.buySeat}>
                        <View style={button.buttonPrimary}>
                            <Text style={button.textPrimary}>Checkout now</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Footer />
            </ScrollView>
        );
    }
}

class AvailableSeat extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={() =>
                    this.props.updateSeat(
                        this.props.idSeat,
                        this.props.position,
                    )
                }>
                <View style={button.seat} />
            </TouchableOpacity>
        );
    }
}

// class SelectedSeat extends Component {
//     render() {
//         return (
//             <TouchableOpacity
//                 onPress={() =>
//                     this.props.updateSeat(
//                         this.props.idSeat,
//                         this.props.position,
//                     )
//                 }>
//                 {/* <View style={button.SelectedSeat} /> */}
//             </TouchableOpacity>
//         );
//     }
// }

class SoldSeat extends Component {
    render() {
        return <View style={button.seatSold} />;
    }
}

class LoveNestSeat extends Component {
    render() {
        return <View style={button.seatSold} />;
    }
}

class Gap extends Component {
    render() {
        return <View style={button.gap} />;
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6F8',
        paddingTop: 37,
        paddingHorizontal: 24,
        paddingBottom: 56,
    },
    row: {
        flexDirection: 'row',
    },
    row1: {
        flexDirection: 'row',
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    seatingContainer: {
        marginTop: 41,
        marginBottom: 56,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 50,
    },
    lineStyle1: {
        borderWidth: 6,
        borderColor: '#9570FE',
        borderRadius: 6,
        marginBottom: 10,
    },
    lineStyle2: {
        borderWidth: 0.5,
        borderColor: '#00BA88',
        marginVertical: 40,
    },
    lineStyle3: {
        borderWidth: 0.5,
        borderColor: '#ED2E7E',
        marginTop: 10,
    },
    iconArrow: {
        fontSize: 16,
        marginRight: 10,
        marginLeft: 7,
    },
    cardInfoSeat: {
        width: 130,
    },
    seatInfo: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 28,
        letterSpacing: 0.75,
        color: '#000000',
        marginVertical: 20,
    },
});

const button = StyleSheet.create({
    buttonPrimary: {
        marginTop: 30,
        backgroundColor: '#5F2EEA',
        height: 54,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textPrimary: {
        color: 'white',
    },
    seat: {
        width: 14,
        height: 14,
        borderRadius: 2,
        backgroundColor: '#D6D8E7',
        margin: 6,
    },
    seatLove: {
        width: 14,
        height: 14,
        borderRadius: 2,
        backgroundColor: '#F589D7',
        margin: 6,
    },
    seatSelected: {
        width: 14,
        height: 14,
        borderRadius: 2,
        backgroundColor: '#5F2EEA',
        margin: 6,
    },
    seatSold: {
        width: 14,
        height: 14,
        borderRadius: 2,
        backgroundColor: '#6E7191',
        margin: 6,
    },
    gap: {
        width: 27,
        height: 14,
    },
});

const mapDispatchToProps = {transactionData};

export default connect(null, mapDispatchToProps)(OrderPage);
