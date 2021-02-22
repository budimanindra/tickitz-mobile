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

import Sponsor1 from '../../assets/sponsor1.png';

export class MovieDetails extends Component {
  state = {};
  render() {
    return (
      <ScrollView>
        <Navbar />
        <View style={style.container}>
          {/* Card Start */}
          <View style={style.cardAlign}>
            <View style={style.card}>
              <Image
                source={{
                  uri:
                    'https://xl.movieposterdb.com/13_02/2001/241527/xl_241527_da927a3d.jpg',
                }}
                style={style.moviePoster}
              />
            </View>
            <Text style={text.MovieTitle}>
              Harry Potter: Harry Potter and the Sorcerer's
            </Text>
            <Text style={text.MovieGenre}>Adventure, Family, Fantasy</Text>
          </View>
          {/* Card End */}

          {/* Movie  Details Start */}
          <View style={style.movieDetailsDirection}>
            <View style={text.MovieSpecificationFlex}>
              <Text style={text.MovieSpecificationKey}>Release date</Text>
              <Text style={text.MovieSpecificationValue}>
                November 16, 2001
              </Text>
            </View>
            <View style={text.MovieSpecificationFlex}>
              <Text style={text.MovieSpecificationKey}>Directed by</Text>
              <Text style={text.MovieSpecificationValue}>Chris Colombus</Text>
            </View>
          </View>
          <View style={style.movieDetailsDirection}>
            <View style={text.MovieSpecificationFlex}>
              <Text style={text.MovieSpecificationKey}>Duration</Text>
              <Text style={text.MovieSpecificationValue}>2 hrs 13 min</Text>
            </View>
            <View style={text.MovieSpecificationFlex}>
              <Text style={text.MovieSpecificationKey}>Casts</Text>
              <Text style={text.MovieSpecificationValue}>
                Daniel Radcliffe, Emma Watson, Rupert Grint
              </Text>
            </View>
          </View>
          <View style={style.lineStyle1} />
          {/* Movie  Details End */}

          {/* Synopsis Start */}
          <Text style={text.synopsisTitle}>Synopsis</Text>
          <Text style={text.synopsisContent}>
            An orphaned boy enrolls in a school of wizardry, where he learns the
            truth about himself, his family and the terrible evil that haunts
            the magical world.
          </Text>
          {/* Synopsis End */}
        </View>
        <View style={style.container2} />

        <View style={style.container3}>
          <View style={style.cardAlign}>
            <Image source={Sponsor1} />
            <Text style={text.cinemaAddress}>
              Whatever street No.12, South Purwokerto
            </Text>
          </View>

          <View style={style.lineStyle2} />
          <View style={style.movieTime}>
            <Text style={text.movieTime}>08.30am</Text>
            <Text style={text.movieTime}>08.30am</Text>
            <Text style={text.movieTime}>08.30am</Text>
            <Text style={text.movieTime}>08.30am</Text>
          </View>
          <View style={style.movieTime}>
            <Text style={text.movieTime}>08.30am</Text>
            <Text style={text.movieTime}>08.30am</Text>
            <Text style={text.movieTime}>08.30am</Text>
            <Text style={text.movieTime}>08.30am</Text>
          </View>

          <View style={style.moviePricePerSeat}>
            <Text style={text.moviePrice}>Price</Text>
            <Text style={text.moviePerSeat}>$10.00/seat</Text>
          </View>

          <View style={style.movieButton}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('OrderPage')}>
              <View style={button.primary}>
                <Text style={button.text}>Book now</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={text.clickableText}> Reset now</Text>
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
    backgroundColor: '#F5F6F8',
    paddingTop: 37,
    paddingHorizontal: 24,
    paddingBottom: 56,
  },
  container2: {
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 64,
  },
  container3: {
    padding: 32,
    marginHorizontal: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  cardAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 223,
    height: 308,
    borderRadius: 6,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moviePoster: {
    width: 159,
    height: 244,
    borderRadius: 6,
    padding: 32,
  },
  movieDetailsDirection: {
    flexDirection: 'row',
  },
  movieTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lineStyle1: {
    marginVertical: 40,
    borderWidth: 0.5,
    borderColor: '#D6D8E7',
  },
  lineStyle2: {
    borderWidth: 0.5,
    borderColor: '#D6D8E7',
  },
  moviePricePerSeat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  movieButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const text = StyleSheet.create({
  MovieTitle: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 32,
    color: '#000000',
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 8,
  },
  MovieGenre: {
    fontSize: 16,
    lineHeight: 32,
    color: '#4E4B66',
    marginBottom: 32,
  },
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
    fontWeight: '400',
    lineHeight: 28,
    color: '#121212',
  },
  synopsisTitle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 28,
    color: '#14142B',
  },
  synopsisContent: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 22,
    color: '#4E4B66',
  },
  cinemaAddress: {
    fontSize: 13,
    fontWeight: '300',
    lineHeight: 22,
    color: '#AAAAAA',
    marginTop: 15,
    marginBottom: 25,
  },
  movieTime: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 23,
    color: '#4E4B66',
  },
  moviePrice: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    color: '#6B6B6B',
  },
  moviePerSeat: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 26,
    color: '#000000',
  },
  clickableText: {
    color: '#5F2EEA',
  },
});

const button = StyleSheet.create({
  primary: {
    backgroundColor: '#5F2EEA',
    width: 134,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

export default MovieDetails;
