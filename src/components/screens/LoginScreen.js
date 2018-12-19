import React, { Component } from 'react';
import {StyleSheet,ToastAndroid} from 'react-native';
import { Container,Form,Label,Input, Item, Content, Footer, FooterTab, Button, Text } from 'native-base';
import {checkLoginOperation} from './../../actions/users';
import {connect} from 'react-redux';

class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login Screen',
        headerStyle: {
            backgroundColor: '#4186f4',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    };

    state = {
        isLoginTried:false,
        email:'',
        password:'',
        errors:{}
    };

    LoginButtonClicked = ()=> {


    }

    handleMultipleInput = (text, textInput) => {
        this.setState({[textInput]:text});

    }

    render(){

        return (<Container>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>E-Mail</Label>
                        <Input onChangeText={(text)=> {this.handleMultipleInput(text,'email')}} value={this.state.email} />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input onChangeText={(text)=> {this.handleMultipleInput(text,'password')}} value={this.state.password} secureTextEntry={true} />
                    </Item>
                    <Button style={styles.loginButton} onPress={this.LoginButtonClicked}>
                        <Text>Login System</Text>
                    </Button>
                </Form>
            </Content>
        </Container>);
    }
}
const styles = StyleSheet.create({
        loginButton:{
            flex:1,
            marginTop:40,
            alignSelf:'center',
            flexDirection:'column',
            justifyContent:'center',
            fontSize:19,
            fontWeight: 'bold',
            backgroundColor: 'green',
        }
    }
);

const mapStateToProps = (state) => {
    return {
        users:state.users,
        geriatrics:state.geriatrics
    }
}
const mapDispatchToProps = {
    checkLoginOperation,
};
export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);
