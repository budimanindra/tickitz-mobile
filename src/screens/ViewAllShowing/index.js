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

import {Picker} from '@react-native-picker/picker';

export class ViewAllShowing extends Component {
    state = {
        sort: '',
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}> Now Showing Movies </Text>
                    <TextInput
                        style={styles.form}
                        placeholder="Search movie . . ."
                        onChangeText={(email) => this.setState({email})}
                    />
                    <Picker
                        selectedValue={this.state.sort}
                        onValueChange={(itemValue) => this.sort(itemValue)}>
                        <Picker.Item label="Sort movie" />
                        <Picker.Item label="By name" value="name" />
                        <Picker.Item
                            label="By released date"
                            value="releaseDate"
                        />
                    </Picker>
                    <View style={styles.cardPosition}>
                        <TouchableOpacity style={styles.card}>
                            <Image source={{}} style={styles.movieImage} />
                            <Text style={styles.movieTitle}>Movie name</Text>
                            <Text style={styles.movieReleaseDate}>
                                Release date
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <Image source={{}} style={styles.movieImage} />
                            <Text style={styles.movieTitle}>Movie name</Text>
                            <Text style={styles.movieReleaseDate}>
                                Release date
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <Image source={{}} style={styles.movieImage} />
                            <Text style={styles.movieTitle}>Movie name</Text>
                            <Text style={styles.movieReleaseDate}>
                                Release date
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default ViewAllShowing;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 40,
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
    movieTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    movieReleaseDate: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});
