import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import store from './redux/store';

import Main from './screens/Main';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Main />
                </NavigationContainer>
            </Provider>
        );
    }
}
