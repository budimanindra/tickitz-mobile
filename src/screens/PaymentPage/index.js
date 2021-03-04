import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Footer from '../../components/Footer';

import Paydana from '../../assets/paydana.png';
import Paygopay from '../../assets/paygopay.png';
import Paygpay from '../../assets/paygpay.png';
import Payovo from '../../assets/payovo.png';
import Paypaypal from '../../assets/paypaypal.png';
import Payvisa from '../../assets/payvisa.png';

export class PaymentPage extends Component {
    state = {
        selected: null,
        selectedButton: '',
        fullName: '',
        email: '',
        phoneNumber: '',
    };

    _handleClick(button) {
        this.setState({selectedButton: button});
    }

    doPay = async () => {
        const {fullName, email, phoneNumber} = this.state;
        this.props.navigation.navigate('TicketResults');
    };

    render() {
        return (
            <ScrollView>
                <View style={style.containerPayment}>
                    <View style={style.contentDirectionBetween}>
                        <Text style={style.textPayment}>Total Payment </Text>
                        <Text style={style.price}>$30.00 </Text>
                    </View>
                </View>

                <View style={style.container}>
                    <Text style={style.title}>Payment Method</Text>

                    <View style={style.sectionCard}>
                        <View style={style.contentDirection}>
                            <TouchableOpacity
                                onPress={() => this._handleClick('Dana')}>
                                <View
                                    style={
                                        this.state.selectedButton === 'Dana'
                                            ? button.paymentActive
                                            : button.payment
                                    }>
                                    <Image
                                        style={button.imageDana}
                                        source={Paydana}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this._handleClick('Gopay')}>
                                <View
                                    style={
                                        this.state.selectedButton === 'Gopay'
                                            ? button.paymentActive
                                            : button.payment
                                    }>
                                    <Image
                                        style={button.imageGopay}
                                        source={Paygopay}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this._handleClick('Gpay')}>
                                <View
                                    style={
                                        this.state.selectedButton === 'Gpay'
                                            ? button.paymentActive
                                            : button.payment
                                    }>
                                    <Image
                                        style={button.imageGpay}
                                        source={Paygpay}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={style.contentDirection}>
                            <TouchableOpacity
                                onPress={() => this._handleClick('Ovo')}>
                                <View
                                    style={
                                        this.state.selectedButton === 'Ovo'
                                            ? button.paymentActive
                                            : button.payment
                                    }>
                                    <Image
                                        style={button.imageOvo}
                                        source={Payovo}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this._handleClick('Paypal')}>
                                <View
                                    style={
                                        this.state.selectedButton === 'Paypal'
                                            ? button.paymentActive
                                            : button.payment
                                    }>
                                    <Image
                                        style={button.imagePaypal}
                                        source={Paypaypal}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this._handleClick('Visa')}>
                                <View
                                    style={
                                        this.state.selectedButton === 'Visa'
                                            ? button.paymentActive
                                            : button.payment
                                    }>
                                    <Image
                                        style={button.imageVisa}
                                        source={Payvisa}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={style.centerDirection}>
                            <Text style={style.orText}>Or</Text>
                            <View style={style.spacing}>
                                <Text>Pay via cash.</Text>
                                <TouchableOpacity>
                                    <Text style={style.clickableText}>
                                        {' '}
                                        See how it work
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <Text style={style.title}>Personal Info</Text>
                    <View style={style.sectionCard}>
                        <Text>Full Name</Text>
                        <TextInput
                            style={style.form}
                            keyboardType="email-address"
                            placeholder="Indra Budiman"
                            onChangeText={(fullName) =>
                                this.setState({fullName})
                            }
                        />

                        <Text>Email</Text>
                        <TextInput
                            style={style.form}
                            keyboardType="email-address"
                            placeholder="budimanindra98@gmail.com"
                            onChangeText={(email) => this.setState({email})}
                        />

                        <Text>Phone Number</Text>
                        <TextInput
                            style={style.form}
                            keyboardType="number-pad"
                            placeholder="0895383636947"
                            onChangeText={(phoneNumber) =>
                                this.setState({phoneNumber})
                            }
                        />

                        <View style={style.warning}>
                            <Icon
                                name="exclamation-triangle"
                                color="orange"
                                size={25}
                            />
                            <Text style={style.warningText}>
                                {' '}
                                Fill your data correctly.
                            </Text>
                        </View>
                    </View>

                    <View style={button.confirm}>
                        <TouchableOpacity onPress={this.doPay}>
                            <View style={button.primary}>
                                <Text style={button.text}>Pay your order</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Footer />
            </ScrollView>
        );
    }
}

export default PaymentPage;

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingBottom: 72,
    },
    containerPayment: {
        paddingHorizontal: 24,
        paddingVertical: 18,
        backgroundColor: '#FFFFFF',
    },
    contentDirectionBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textPayment: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 28,
        letterSpacing: 0.75,
        color: '#AAAAAA',
    },
    price: {
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 32,
        letterSpacing: 0.75,
    },
    contentDirection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    title: {
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 24,
        letterSpacing: 0.75,
        marginTop: 40,
        marginBottom: 16,
    },
    sectionCard: {
        paddingHorizontal: 15,
        paddingVertical: 32,
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
    },
    spacing: {
        flexDirection: 'row',
        marginTop: 16,
    },
    clickableText: {
        color: '#5F2EEA',
    },
    centerDirection: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    orText: {
        marginVertical: 16,
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
    warning: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(244, 183, 64, 0.3)',
        paddingHorizontal: 35,
        paddingVertical: 12,
    },
    warningText: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 1,
        color: '#4E4B66',
    },
});

const button = StyleSheet.create({
    payment: {
        width: 80,
        height: 32,
        margin: 16,
        borderColor: '#DEDEDE',
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paymentActive: {
        width: 80,
        height: 32,
        margin: 16,
        borderColor: '#DEDEDE',
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e4e7df',
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
    imageDana: {
        width: 51,
        height: 14,
    },
    imageGopay: {
        width: 50,
        height: 16,
    },
    imageGpay: {
        width: 35,
        height: 14,
    },
    imageOvo: {
        width: 43,
        height: 14,
    },
    imagePaypal: {
        width: 15,
        height: 18,
    },
    imageVisa: {
        width: 38,
        height: 11.5,
    },
    confirm: {
        marginTop: 56,
    },
});
