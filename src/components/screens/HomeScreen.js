import React from "react";
import { Container, Header, Content, Button,Text,Icon } from 'native-base';
import * as Expo from "expo";

export default  class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
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
            <Button onPress={() => {this.props.navigation.navigate('Surveil')}} block success>
                <Icon name='home' />
                <Text>Home!</Text>
            </Button>
        );
    }
}