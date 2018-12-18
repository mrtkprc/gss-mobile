import React from "react";
import { Container, Header, Content, Button,Text,Icon } from 'native-base';
import * as Expo from "expo";

export default class SurveilScreen extends React.Component {
    static navigationOptions = {
        title: 'Detail Screen',
        headerStyle: {
            backgroundColor: '#4186f4',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    };

    render() {
        return (
            <Button onPress={() => {this.props.navigation.goBack()}} block info>
                <Text>Detail Screen</Text>
            </Button>
        );
    }
}