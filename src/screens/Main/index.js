import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {connect} from 'react-redux';

import Profile from '../Profile';
import SplashScreen from '../SplashScreen';
import Register from '../Register';
import Login from '../Login';
import ForgotPassword from '../ForgotPassword';
import Home from '../Home';
import MovieDetails from '../MovieDetails';
import OrderPage from '../OrderPage';
import PaymentPage from '../PaymentPage';
import TicketResults from '../TicketResults';
import AdminPage from '../AdminPage';

import Navbar from '../Navbar';
import NavbarNonMember from '../NavbarNonMember';

const Stack = createStackNavigator();

class Main extends Component {
    render() {
        return (
            <Stack.Navigator>
                {this.props.auth.token === null && (
                    <React.Fragment>
                        <Stack.Screen
                            component={SplashScreen}
                            options={{headerShown: false}}
                            name="SplashScreen"
                        />
                        <Stack.Screen
                            component={Home}
                            options={() => ({
                                header: (props) => (
                                    <NavbarNonMember {...props} />
                                ),
                            })}
                            name="Home"
                        />
                        <Stack.Screen
                            component={MovieDetails}
                            options={() => ({
                                header: (props) => (
                                    <NavbarNonMember {...props} />
                                ),
                            })}
                            name="MovieDetails"
                        />
                        <Stack.Screen
                            component={Login}
                            options={{headerShown: false}}
                            name="Login"
                        />
                        <Stack.Screen
                            component={Register}
                            options={{headerShown: false}}
                            name="Register"
                        />
                        <Stack.Screen
                            component={ForgotPassword}
                            options={{headerShown: false}}
                            name="ForgotPassword"
                        />
                        <Stack.Screen
                            component={OrderPage}
                            options={() => ({
                                header: (props) => (
                                    <NavbarNonMember {...props} />
                                ),
                            })}
                            name="OrderPage"
                        />
                        <Stack.Screen
                            component={PaymentPage}
                            options={() => ({
                                header: (props) => (
                                    <NavbarNonMember {...props} />
                                ),
                            })}
                            name="PaymentPage"
                        />
                    </React.Fragment>
                )}

                {this.props.auth.token !== null && (
                    <React.Fragment>
                        <Stack.Screen
                            component={Home}
                            options={() => ({
                                header: (props) => <Navbar {...props} />,
                            })}
                            name="Home"
                        />
                        <Stack.Screen
                            component={MovieDetails}
                            options={() => ({
                                header: (props) => <Navbar {...props} />,
                            })}
                            name="MovieDetails"
                        />
                        <Stack.Screen
                            component={OrderPage}
                            options={() => ({
                                header: (props) => <Navbar {...props} />,
                            })}
                            name="OrderPage"
                        />
                        <Stack.Screen
                            component={PaymentPage}
                            options={() => ({
                                header: (props) => <Navbar {...props} />,
                            })}
                            name="PaymentPage"
                        />
                        <Stack.Screen
                            component={TicketResults}
                            options={() => ({
                                header: (props) => <Navbar {...props} />,
                            })}
                            name="TicketResults"
                        />
                        <Stack.Screen
                            component={AdminPage}
                            options={() => ({
                                header: (props) => <Navbar {...props} />,
                            })}
                            name="AdminPage"
                        />
                        <Stack.Screen
                            component={Profile}
                            options={() => ({
                                header: (props) => <Navbar {...props} />,
                            })}
                            name="Profile"
                        />
                    </React.Fragment>
                )}
            </Stack.Navigator>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch,
});

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
