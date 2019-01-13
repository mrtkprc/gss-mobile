import React, { Component } from 'react';
import {StyleSheet,ToastAndroid} from 'react-native';
import { Container,Form,Label,Input, Item, Content, Footer, FooterTab, Button, Text } from 'native-base';
import {connect} from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import {checkLoginOperation} from './../../actions/users';
import registerForPushNotification from './../../helpers/registerForPushNotifications';
import {tokenizeValues} from './../../helpers/backendHelper';
import {API_BASE} from "../../config/env";
import axios from 'axios';

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
        isAuthenticated:false,
        errors:{}
    };

    LoginButtonClicked = ()=> {
        this.props.checkLoginOperation(this.state.email,this.state.password);
        this.setState({isLoginTried:true});
        setTimeout(()=>{
            if(this.state.isAuthenticated)
            {
                ToastAndroid.show("Login Success!",ToastAndroid.SHORT);
                registerForPushNotification()
                    .then(data=>{
                        const push_id = {data:data,email: this.state.email};
                        const token = tokenizeValues(push_id);
                        axios.put(`${API_BASE}/relative/add/expo_push_notification?token=${token}`)
                            .then(result => result.data)
                            .then(res_data => {

                            });
                    });
            }
            else
                ToastAndroid.show("Login Operation is Failed",ToastAndroid.LONG);

        },1500);

    }

    handleMultipleInput = (text, textInput) => {
        this.setState({[textInput]:text});

    }

    forward2HomeScreen = ()=> {
        if(this.state.isAuthenticated === true)
        {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home' })],
            });
            this.props.navigation.dispatch(resetAction);
        }
    }
    componentWillMount() {
        if(this.props.users === undefined)
            this.setState({isAuthenticated:false})
        else
            this.setState({isAuthenticated:this.props.users.isAuthenticated});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({isAuthenticated:nextProps.users.isAuthenticated});
    }

    render(){
        if(this.state.isAuthenticated == false) {
            return (<Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>E-Mail</Label>
                            <Input onChangeText={(text) => {
                                this.handleMultipleInput(text, 'email')
                            }} value={this.state.email}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input onChangeText={(text) => {
                                this.handleMultipleInput(text, 'password')
                            }} value={this.state.password} secureTextEntry={true}/>
                        </Item>
                        <Button style={styles.loginButton} onPress={this.LoginButtonClicked}>
                            <Text>Login System</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>);
        }
        else
        {
            this.forward2HomeScreen();
            return (<Text>Logged In</Text>);
        }
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
