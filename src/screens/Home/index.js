import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import http from '../../helpers/http';

import Footer from '../../components/Footer';

class Home extends Component {
    state = {
        errorMsg: '',
        showing: [{}],
        upcoming: [{}],
    };

    getMoviesShowing = async () => {
        try {
            const result = await http().get('/movies/now-showing');
            this.setState({
                errorMsg: '',
                showing: result.data.results,
            });
        } catch (err) {
            this.setState({
                errorMsg: err.response.message,
                showing: {},
            });
        }
    };

    getMoviesUpcoming = async () => {
        try {
            const result = await http().get('/movies/upcoming-movies');
            this.setState({
                errorMsg: '',
                upcoming: result.data.results,
            });
        } catch (err) {
            this.setState({
                errorMsg: err.response.message,
                upcoming: {},
            });
        }
    };

    componentDidMount() {
        this.getMoviesShowing();
        this.getMoviesUpcoming();
    }

    render() {
        return (
            <ScrollView>
                <View style={style.container}>
                    <View>
                        <Text style={style.slogan}>
                            Nearest Cinema, Newest Movie,
                        </Text>
                        <Text style={style.tagline}>Find out now!</Text>
                    </View>

                    <View style={button.contentDirection}>
                        <TouchableOpacity style={button.posterLeft}>
                            <View>
                                <Image
                                    source={{
                                        uri:
                                            'https://xl.movieposterdb.com/13_04/2012/1872220/xl_1872220_93384bc9.jpg',
                                    }}
                                    style={button.poster}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={button.posterMiddle}>
                            <View>
                                <Image
                                    source={{
                                        uri:
                                            'https://xl.movieposterdb.com/08_05/2008/960144/xl_960144_6e34666b.jpg',
                                    }}
                                    style={button.poster}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Image
                                    source={{
                                        uri:
                                            'https://xl.movieposterdb.com/10_08/2009/1187043/xl_1187043_42141756.jpg',
                                    }}
                                    style={button.poster}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Now Showing Start */}
                <View style={style.sectionNowShowing}>
                    <View style={style.sectionDirection}>
                        <Text style={style.sectionTitle}>Now Showing</Text>
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate(
                                    'ViewAllNowShowing',
                                )
                            }>
                            <Text style={style.clickableText}>View all</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={style.listMovieDirection}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            {this.state.showing.map((movie) => (
                                <View style={button.card}>
                                    <Image
                                        source={{
                                            uri: movie.image,
                                        }}
                                        style={button.moviePoster}
                                    />
                                    <Text style={style.movieTitle}>
                                        {movie.name}
                                    </Text>
                                    <Text style={style.movieGenre}>
                                        {movie.genreName}
                                    </Text>
                                    <TouchableOpacity
                                        key={`Now Showing Movie: ${movie.id}`}
                                        onPress={() =>
                                            this.props.navigation.navigate(
                                                'MovieDetails',
                                                {
                                                    movieId: movie.id,
                                                },
                                            )
                                        }>
                                        <View style={button.secondary}>
                                            <Text style={button.textSecondary}>
                                                Details
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                {/* Now Showing End */}

                {/* Upcoming Movies Start */}
                <View style={style.sectionUpcoming}>
                    <View style={style.sectionDirection}>
                        <Text style={style.sectionTitle}>Upcoming Movies</Text>
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate(
                                    'ViewAllUpcoming',
                                )
                            }>
                            <Text style={style.clickableText}>View all</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={style.listMovieDirection}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            {this.state.upcoming.map((movie) => (
                                <View style={button.card}>
                                    <Image
                                        source={{
                                            uri: movie.image,
                                        }}
                                        style={button.moviePoster}
                                    />
                                    <Text style={style.movieTitle}>
                                        {movie.name}
                                    </Text>
                                    <Text style={style.movieGenre}>
                                        {movie.genreName}
                                    </Text>
                                    <TouchableOpacity
                                        key={`Now Showing Movie: ${movie.id}`}
                                        onPress={() =>
                                            this.props.navigation.navigate(
                                                'MovieDetails',
                                                {
                                                    movieId: movie.id,
                                                },
                                            )
                                        }>
                                        <View style={button.secondary}>
                                            <Text style={button.textSecondary}>
                                                Details
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                {/* Upcoming Movies End */}

                {/* Moviegoers Start */}
                <View style={style.container}>
                    <View style={style.subscriptionPadding}>
                        <Text style={style.subscriptionText}>
                            Be the vanguard of the
                        </Text>
                        <Text style={style.subscriptionBigText}>
                            Moviegoers
                        </Text>
                        <TextInput
                            style={style.form}
                            keyboardType="email-address"
                            placeholder="type your email"
                        />

                        <TouchableOpacity>
                            <View style={button.primary}>
                                <Text style={button.textPrimary}>Join now</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={style.subscriptionFeature}>
                            By joining you as a Tickitz member, we will always
                            send you the latest updates via email .
                        </Text>
                    </View>
                </View>
                {/* Moviegoers End   */}
                <Footer />
            </ScrollView>
        );
    }
}

const style = StyleSheet.create({
    container: {
        paddingTop: 57,
        paddingHorizontal: 24,
        paddingBottom: 64,
    },
    slogan: {
        color: '#A0A3BD',
        fontSize: 14,
    },
    tagline: {
        color: '#5F2EEA',
        fontSize: 48,
        letterSpacing: 1,
    },
    sectionNowShowing: {
        paddingTop: 48,
        marginTop: 130,
        backgroundColor: '#D6D8E7',
        paddingHorizontal: 20,
    },
    sectionTitle: {
        color: '#5F2EEA',
        fontSize: 18,
        lineHeight: 23,
        fontWeight: '700',
    },
    clickableText: {
        color: '#5F2EEA',
    },
    sectionDirection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listMovieDirection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 56,
    },
    movieTitle: {
        height: 60,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 12,
    },
    movieGenre: {
        height: 40,
        fontSize: 11,
        color: '#A0A3BD',
        textAlign: 'center',
        marginBottom: 12,
    },
    sectionUpcoming: {
        paddingTop: 80,
        // backgroundColor: '#D6D8E7',
        paddingHorizontal: 20,
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
    subscriptionPadding: {
        paddingHorizontal: 32,
        paddingVertical: 48,
        borderWidth: 3,
        borderRadius: 8,
        borderColor: '#FFFFFF',
    },
    subscriptionText: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24,
        textAlign: 'center',
    },
    subscriptionBigText: {
        fontWeight: '700',
        fontSize: 32,
        lineHeight: 34,
        textAlign: 'center',
        color: '#5F2EEA',
        marginBottom: 42,
    },
    subscriptionFeature: {
        marginTop: 32,
        fontSize: 12,
        lineHeight: 22,
        textAlign: 'center',
        letterSpacing: 0.75,
        color: '#6E7191',
    },
});

const button = StyleSheet.create({
    contentDirection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 64,
    },
    posterMiddle: {
        marginTop: 28,
    },
    posterLeft: {
        marginTop: 60,
    },
    poster: {
        width: 94.82,
        height: 311.98,
        borderRadius: 10,
        // elevation: 4,
    },
    card: {
        marginTop: 48,
        borderRadius: 6,
        borderColor: '#DEDEDE',
        borderWidth: 1,
        padding: 16,
        marginRight: 16,
        width: 155,
    },
    moviePoster: {
        width: 122,
        height: 185,
        borderRadius: 6,
    },
    primary: {
        backgroundColor: '#5F2EEA',
        height: 54,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondary: {
        backgroundColor: 'white',
        borderColor: '#5F2EEA',
        borderWidth: 1,
        height: 25,
        width: 120,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSecondary: {
        color: '#5F2EEA',
    },
    textPrimary: {
        color: 'white',
    },
});

export default Home;
