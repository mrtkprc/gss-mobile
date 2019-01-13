import React, {Component} from 'react';
import { Container,Tabs,Tab,TabHeading ,Content, Button,Text,Icon } from 'native-base';
import { RefreshControl,ScrollView } from 'react-native';

class LastActions extends Component {
    state = {refreshing:false};

    _onRefresh = () =>{
        this.setState({refreshing:true});
        this.fetchData.then((data) => {
            
            this.setState({refreshing:false});
        })

    };

    fetchData = () => {
        return new Promise((resolve,reject) => {
            resolve(new Date().toTimeString());
        });
    };

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        nRefresh={this._onRefresh}/>
                }
            />
        );
    }
}

export default LastActions;
