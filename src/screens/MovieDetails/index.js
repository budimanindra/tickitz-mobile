import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import Footer from '../../components/Footer';
import {connect} from 'react-redux';
import {
    getMovie,
    getShowDate,
    getShowLocation,
    getAvailCinema,
} from '../../redux/actions/movie';
import http from '../../helpers/http';

export class MovieDetails extends Component {
    state = {
        selectedDate: null,
        selectedDateString: '',
        selectedLocation: null,
        selectedIdShowtime: '',
        selectedShowtime: '',
        styleChecker: '',
        finish: false,
    };

    _handleClick(idShowtime, showtime, index) {
        this.setState({
            selectedShowtime: showtime,
            selectedIdShowtime: idShowtime,
            styleChecker: `${index} - ${idShowtime}`,
        });
    }

    movieDetailFormat = (data) => {
        const releaseDatetime = data.releaseDate.split('T');
        const endDatetime = data.endDate.split('T');
        data.releaseDate = releaseDatetime[0];
        data.endDate = endDatetime[0];
        const durationTime = data.duration.split(':');
        data.duration = `${Number(durationTime[0])} hours ${
            durationTime[1]
        } minutes`;
        return data;
    };

    generateListDate = (data) => {
        let listDate = [];
        const today = new Date();
        const todayString = today.toISOString().split('T')[0];
        let endDate = data.endDate;
        let strDate = todayString;
        let index = 1;
        let dateMove = new Date(todayString);

        while (strDate < endDate) {
            strDate = dateMove.toISOString().slice(0, 10);
            let dateObject = {id: index, readable: strDate};
            listDate.push(dateObject);
            dateMove.setDate(dateMove.getDate() + 1);
            index++;
        }
        return listDate;
    };

    async componentDidMount() {
        const {movieId} = this.props.route.params;
        const resultsDetailMovie = await http().get(`/movies/${movieId}`);
        console.log(resultsDetailMovie);
        const dataMovie = this.movieDetailFormat(
            resultsDetailMovie.data.results,
        );
        this.props.getMovie(dataMovie);

        const showDate = this.generateListDate(dataMovie);
        this.props.getShowDate(showDate);

        const resultsCity = await http().get('/cities');
        this.props.getShowLocation(resultsCity.data.results);
    }

    getCinemaByCondition = async (id, date, city) => {
        const resultsCinema = await http().get(
            `/cinemas?id=${id}&date=${date}&city=${city}`,
        );
        this.props.getAvailCinema(resultsCinema.data.results);
    };

    componentDidUpdate() {
        const {selectedDate, selectedLocation, finish} = this.state;
        if (selectedDate !== null && selectedLocation !== null && !finish) {
            this.setState({finish: true}, () => {
                this.getCinemaByCondition(
                    this.props.movie.details.id,
                    this.props.movie.showDate[Number(selectedDate) - 1]
                        .readable,
                    this.props.movie.showLocation[Number(selectedLocation) - 1]
                        .name,
                );
            });
        }
    }

    showTimeTop(cinema, cinemaIndex) {
        const row = [];
        for (let index = 0; index < 4; index++) {
            row.push(
                <TouchableOpacity
                    onPress={() =>
                        this._handleClick(
                            cinema.idShowtime[index],
                            cinema.showTimes[index],
                            cinemaIndex,
                        )
                    }>
                    <Text
                        style={
                            this.state.styleChecker ===
                            `${cinemaIndex} - ${cinema.idShowtime[index]}`
                                ? text.movieTimeSelected
                                : text.movieTime
                        }>
                        {cinema.showTimes[index]}
                    </Text>
                </TouchableOpacity>,
            );
        }
        return row;
    }

    showTimeBottom(cinema, cinemaIndex) {
        const row = [];
        for (let index = 4; index < 8; index++) {
            row.push(
                <TouchableOpacity
                    onPress={() =>
                        this._handleClick(
                            cinema.idShowtime[index],
                            cinema.showTimes[index],
                            cinemaIndex,
                        )
                    }>
                    <Text
                        style={
                            this.state.styleChecker ===
                            `${cinemaIndex} - ${cinema.idShowtime[index]}`
                                ? text.movieTimeSelected
                                : text.movieTime
                        }>
                        {cinema.showTimes[index]}
                    </Text>
                </TouchableOpacity>,
            );
        }
        return row;
    }

    render() {
        return (
            <ScrollView>
                <View style={style.container}>
                    {/* Card Start */}
                    <View style={style.cardAlign}>
                        <View style={style.card}>
                            <Image
                                source={{
                                    uri: this.props.movie.details.image,
                                }}
                                style={style.moviePoster}
                            />
                        </View>
                        <Text style={text.MovieTitle}>
                            {this.props.movie.details.name}
                        </Text>
                        <Text style={text.MovieGenre}>
                            {this.props.movie.details.genreName}
                        </Text>
                    </View>
                    {/* Card End */}

                    {/* Movie  Details Start */}
                    <View style={style.movieDetailsDirection}>
                        <View style={text.MovieSpecificationFlex}>
                            <Text style={text.MovieSpecificationKey}>
                                Release date
                            </Text>
                            <Text style={text.MovieSpecificationValue}>
                                {this.props.movie.details.releaseDate}
                            </Text>
                        </View>
                        <View style={text.MovieSpecificationFlex}>
                            <Text style={text.MovieSpecificationKey}>
                                Directed by
                            </Text>
                            <Text style={text.MovieSpecificationValue}>
                                {this.props.movie.details.directedBy}
                            </Text>
                        </View>
                    </View>
                    <View style={style.movieDetailsDirection}>
                        <View style={text.MovieSpecificationFlex}>
                            <Text style={text.MovieSpecificationKey}>
                                Duration
                            </Text>
                            <Text style={text.MovieSpecificationValue}>
                                {this.props.movie.details.duration}
                            </Text>
                        </View>
                        <View style={text.MovieSpecificationFlex}>
                            <Text style={text.MovieSpecificationKey}>
                                Casts
                            </Text>
                            <Text style={text.MovieSpecificationValue}>
                                {this.props.movie.details.castName}
                            </Text>
                        </View>
                    </View>
                    <View style={style.lineStyle1} />
                    {/* Movie  Details End */}

                    {/* Synopsis Start */}
                    <Text style={text.synopsisTitle}>Synopsis</Text>
                    <Text style={text.synopsisContent}>
                        {this.props.movie.details.synopsis}
                    </Text>
                    {/* Synopsis End */}
                </View>

                <View style={style.container2} />

                <View style={style.movieTime}>
                    <DropDownPicker
                        items={
                            this.props.movie.showDate &&
                            this.props.movie.showDate.map((date) => ({
                                label: `${date.readable}`,
                                value: `${date.id}`,
                            }))
                        }
                        defaultValue={this.state.selectedDate}
                        containerStyle={{
                            width: 150,
                            marginLeft: 24,
                        }}
                        onChangeItem={(item) =>
                            this.setState({
                                selectedDate: item.value,
                                selectedDateString: this.props.movie.showDate[
                                    Number(item.value) - 1
                                ].readable,
                            })
                        }
                    />

                    <DropDownPicker
                        items={
                            this.props.movie.showLocation &&
                            this.props.movie.showLocation.map((city) => ({
                                label: `${city.name}`,
                                value: `${city.id}`,
                            }))
                        }
                        defaultValue={this.state.selectedLocation}
                        containerStyle={{
                            width: 150,
                            marginRight: 24,
                        }}
                        onChangeItem={(item) =>
                            this.setState({
                                selectedLocation: item.value,
                            })
                        }
                    />
                </View>

                {this.props.movie.availCinema.map((cinema, index) => (
                    <View style={style.container3}>
                        <View style={style.cardAlign}>
                            <Image source={cinema.image} />
                            <Text style={text.cinemaAddress}>
                                {cinema.address}
                            </Text>
                        </View>

                        <View style={style.lineStyle2} />
                        <View style={style.movieTime}>
                            {this.showTimeTop(cinema, index)}
                        </View>
                        <View style={style.movieTime}>
                            {this.showTimeBottom(cinema, index)}
                        </View>

                        <View style={style.moviePricePerSeat}>
                            <Text style={text.moviePrice}>Price</Text>
                            <Text style={text.moviePerSeat}>
                                Rp{cinema.priceWeekend}/seat
                            </Text>
                        </View>

                        <View style={style.movieButton}>
                            <TouchableOpacity
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        'OrderPage',
                                        {
                                            cinemaId: cinema.id,
                                            showtimeId: this.state
                                                .selectedIdShowtime,
                                            time: this.state.selectedShowtime,
                                            date: this.state.selectedDateString,
                                            price: cinema.priceWeekend,
                                        },
                                    )
                                }>
                                <View style={button.primary}>
                                    <Text style={button.text}>Book now</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={text.clickableText}>
                                    Reset now
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
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
        marginVertical: 35,
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
    movieTimeSelected: {
        fontSize: 12,
        fontWeight: 'bold',
        lineHeight: 23,
        color: '#4E4B66',
        backgroundColor: '#DADADA',
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

const mapStateToProps = (state) => ({
    movie: state.movie,
});

const mapDispatchToProps = {
    getMovie,
    getShowDate,
    getShowLocation,
    getAvailCinema,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
