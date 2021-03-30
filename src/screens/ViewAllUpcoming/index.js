import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import {connect} from 'react-redux';
import {
    getUpcomingMovies,
    pagingGetUpcomingMovies,
} from '../../redux/actions/movie';

export class ViewAllUpcoming extends Component {
    state = {
        loading: false,
        message: '',
        search: '',
        sort: '',
    };

    sort = async (value) => {
        this.setState({loading: true, sort: value});
        await this.props.getUpcomingMovies(null, null, value);
        if (this.props.movie.upcomingMovie.length > 0) {
            this.setState({
                message: '',
                loading: false,
            });
        } else {
            this.setState({
                message: `${value} Not Found`,
                loading: false,
            });
        }
    };

    next = async () => {
        if (
            this.props.movie.pageInfoContact &&
            this.props.movie.pageInfoContact.currentPage <
                this.props.movie.pageInfoContact.totalPage
        ) {
            const {search, sort} = this.state;
            await this.props.pagingGetUpcomingMovies(
                search,
                this.props.movie.pageInfoContact.currentPage + 1,
                sort,
            );
        }
    };

    search = async (value) => {
        this.setState({loading: true, search: value});
        await this.props.getUpcomingMovies(value);
        if (this.props.movie.upcomingMovie.length > 0) {
            this.setState({
                message: '',
                loading: false,
            });
        } else {
            this.setState({
                message: `${value} Not Found`,
                loading: false,
            });
        }
    };

    async componentDidMount() {
        await this.props.getUpcomingMovies();
    }

    render() {
        const {upcomingMovie} = this.props.movie;
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Now Upcoming Movies </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Search receiver here"
                    onChangeText={(value) => this.search(value)}
                />
                <Picker
                    selectedValue={this.state.sort}
                    onValueChange={(itemValue) => this.sort(itemValue)}>
                    <Picker.Item label="Sort" />
                    <Picker.Item label="Movie name" value="name" />
                    <Picker.Item label="Release" value="releaseDate" />
                </Picker>
                <View style={styles.centered}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={upcomingMovie}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => {
                            return (
                                <View style={button.card}>
                                    <Image
                                        source={{
                                            uri: item.image,
                                        }}
                                        style={button.moviePoster}
                                    />
                                    <Text style={styles.movieTitle}>
                                        {item.name}
                                    </Text>
                                    <Text style={styles.movieGenre}>
                                        {item.genreName}
                                    </Text>
                                    <TouchableOpacity
                                        key={`Now Showing Movie: ${item.id}`}
                                        onPress={() =>
                                            this.props.navigation.navigate(
                                                'MovieDetails',
                                                {
                                                    movieId: item.id,
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
                            );
                        }}
                        onEndReached={this.next}
                        onEndReachedThreshold={0.5}
                    />
                </View>
                {/* </View> */}
            </View>
        );
    }
}
const mapStateToProps = (state) => ({
    movie: state.movie,
});

const mapDispatchToProps = {
    getUpcomingMovies,
    pagingGetUpcomingMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllUpcoming);

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 40,
    },
    centered: {
        alignItems: 'center',
        marginBottom: 290,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    row: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    form: {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        paddingHorizontal: 20,
    },
    cardPosition: {
        alignItems: 'center',
    },
    card: {
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 20,
        width: 180,
        height: 250,
        borderRadius: 15,
    },
    movieImage: {
        width: 120,
        height: 180,
    },
    movieReleaseDate: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    movieTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 12,
    },
    movieGenre: {
        fontSize: 11,
        color: '#A0A3BD',
        textAlign: 'center',
        marginBottom: 12,
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
    },
    card: {
        marginTop: 24,
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
