if(__DEV__){
    import('./src/config/ReactotronConfig' ).then(() => console.log('Reactotron Configured'))
}
import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import * as Expo from "expo";
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './src/reducers/rootReducer';
import {Provider} from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/lib/integration/react';

import HomeScreen from './src/components/screens/HomeScreen';
import SurveilScreen from './src/components/screens/SurveilScreen';
import LoginScreen from './src/components/screens/LoginScreen';
import registerForPushNotificationsAsync from './src/helpers/registerForPushNotifications';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist:['users']
    //stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
    pReducer, //buraso rootReducerdu
    composeWithDevTools(applyMiddleware(thunk))

);

export const persistor = persistStore(store);
//persistor.purge().then(() => {console.log("Purged succesfull")});

const AppNavigator = createStackNavigator(
    {
        Home: {screen:HomeScreen},
        Surveil:{screen:SurveilScreen},
        Login:{screen:LoginScreen}
    },

    {
        initialRouteName: 'Login',
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    state ={
        loading: true
    };

    componentWillMount() {
        registerForPushNotificationsAsync();
        this.listener = Expo.Notifications.addListener(this.listen);
    }

    componentWillUnmount() {
        this.listener && Expo.Notifications.removeListener(this.listen);
    }

    listen = ({origin,data})=> {
        console.log("listen: ",origin,data);
    };


    async componentDidMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppContainer/>
                </PersistGate>
            </Provider>
        );
    }
}


//this.props.navigation.navigate('Detail')