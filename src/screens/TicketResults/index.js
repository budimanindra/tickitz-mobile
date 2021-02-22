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

import {Navbar} from '../../components/Navbar';
import Footer from '../../components/Footer';

import Icon from 'react-native-vector-icons/FontAwesome';

import Success from '../../assets/success.png';
import Barcode from '../../assets/barcode.png';

export class TicketResults extends Component {
  render() {
    return (
      <ScrollView>
        <Navbar />
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
                <Text style={text.MovieSpecificationKey}>Movie</Text>
                <Text style={text.MovieSpecificationValue}>Harry Potter</Text>
              </View>
              <View style={text.MovieSpecificationFlex}>
                <Text style={text.MovieSpecificationKey}>Category</Text>
                <Text style={text.MovieSpecificationValue}>PG-13</Text>
              </View>
            </View>

            <View style={style.movieDetailsDirection}>
              <View style={text.MovieSpecificationFlex}>
                <Text style={text.MovieSpecificationKey}>Date</Text>
                <Text style={text.MovieSpecificationValue}>16 Nov</Text>
              </View>
              <View style={text.MovieSpecificationFlex}>
                <Text style={text.MovieSpecificationKey}>Time</Text>
                <Text style={text.MovieSpecificationValue}>09:00</Text>
              </View>
            </View>

            <View style={style.movieDetailsDirection}>
              <View style={text.MovieSpecificationFlex}>
                <Text style={text.MovieSpecificationKey}>Count</Text>
                <Text style={text.MovieSpecificationValue}>4 pcs</Text>
              </View>
              <View style={text.MovieSpecificationFlex}>
                <Text style={text.MovieSpecificationKey}>Seats</Text>
                <Text style={text.MovieSpecificationValue}>C2, C3, E4, E5</Text>
              </View>
            </View>

            <View style={style.totalPayment}>
              <Text>Total</Text>
              <Text>$30.00</Text>
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    );
  }
}

export default TicketResults;

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
