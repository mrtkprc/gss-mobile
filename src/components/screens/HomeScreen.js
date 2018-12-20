import React from "react";
import { Container, Card,CardItem,Body,Content, Button,Text,Icon } from 'native-base';
import * as Expo from "expo";

export default  class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Surveil Screen',
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
            <Container>
                <Content>

                </Content>
            </Container>
        );
    }
}