import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Subscription from '~/pages/Subscription';

export default (isSigned = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator(
                    {
                        SignIn,
                        SignUp,
                    },
                    {
                        headerMode: 'none',
                        navigationOptions: {
                            headerVisible: false,
                        },
                    }
                ),
                App: createBottomTabNavigator(
                    {
                        Dashboard,
                        Subscription,
                        Profile,
                    },
                    {
                        tabBarOptions: {
                            keyboardHidesTabBar: true,
                            activeTintColor: '#FFF',
                            inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
                            style: {
                                backgroundColor: '#2b1a2f',
                                height: 64,
                                paddingTop: 10,
                                paddingBottom: 10,
                            },
                        },
                    }
                ),
            },
            {
                initialRouteName: isSigned ? 'App' : 'Sign',
            }
        )
        // createStackNavigator(
        //     { SignIn, SignUp },
        //     {
        //         headerMode: 'none',
        //         navigationOptions: {
        //             headerVisible: false,
        //         },
        //     }
        // )
    );
