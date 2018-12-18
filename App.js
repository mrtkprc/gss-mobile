import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import * as Expo from "expo";
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers/rootReducer';
import {Provider} from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import HomeScreen from './src/components/screens/HomeScreen';
import SurveilScreen from './src/components/screens/SurveilScreen';



const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist:['users']
    //stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
    pReducer, //buraso rootReducerdu

);

export const persistor = persistStore(store);



const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Surveil:SurveilScreen
    },
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    state ={
        loading: true
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
                <AppContainer/>
            </Provider>
        );
    }
}

//this.props.navigation.navigate('Detail')