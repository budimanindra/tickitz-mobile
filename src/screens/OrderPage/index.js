import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

import {Navbar} from '../../components/Navbar';
import Footer from '../../components/Footer';

export class OrderPage extends Component {
    state = {};
    render() {
        return (
            <ScrollView>
                <Navbar />
                <View style={style.container}>
                    <Text>Choose Your Seat</Text>
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

const style = StyleSheet.create({
    container: {
        backgroundColor: '#F5F6F8',
        paddingTop: 37,
        paddingHorizontal: 24,
        paddingBottom: 56,
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
});

export default OrderPage;
