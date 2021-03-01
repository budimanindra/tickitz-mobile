import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

import Footer from '../../components/Footer';

import Icon from 'react-native-vector-icons/FontAwesome';

export class OrderPage extends Component {
    state = {};
    constructRow = (numbers) => {
        const row = [];
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] === 8) {
                row.push(<Gap />);
            }
            row.push(<AvailableSeat />);
        }
        return row;
    };

    constructSeat = () => {
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        const seat = [];
        for (let i = 0; i < letters.length; i++) {
            seat.push(
                <View style={style.row}>{this.constructRow(numbers)}</View>,
            );
        }
        return seat;
    };

    render() {
        return (
            <ScrollView>
                <View style={style.container}>
                    <Text>Choose Your Seat</Text>

                    <View style={style.seatingContainer}>
                        <View style={style.lineStyle1} />

                        <View>
                            {/* {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((v, i) => (
                                <View style={style.row}>
                                    {[1, 2, 3, 4, 5, 6, 7].map((val, id) => (
                                        <Seat />
                                    ))}
                                </View>
                            ))} */}

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

                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('PaymentPage')
                        }>
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
            <TouchableOpacity>
                <View style={button.seat} />
            </TouchableOpacity>
        );
    }
}

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

export default OrderPage;
