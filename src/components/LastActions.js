import React, {Component} from 'react';
import { Container,Tabs,Tab,TabHeading ,Content, Button,Text,Icon,View } from 'native-base';
import {connect} from 'react-redux';
import { fetchLastStimuluses } from "../actions/geriatrics";
import _ from 'lodash';
import LastActionItem from "./LastActionItem";


class LastActions extends Component {
    state = {
        refreshing: false,
    };

    componentWillMount() {
        this.props.fetchLastStimuluses(this.props.users.userAuth);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({last_stimulus:nextProps.geriatrics.last_stimulus});
    }


    componentDidMount() {
        console.log(this.state.last_stimulus);
    }

    createLastActions = () => {
        if(this.state.last_stimulus !== undefined)
        {
            let rooms = [];
            let roomColorName = 'red';
            _.forEach(this.state.last_stimulus,(val,key) => {
                roomColorName = (key === 0 ? 'green':'red');
                rooms.push(<LastActionItem key={val.last_stimulation.toString()+"-"+key.toString()} roomColor={roomColorName} roomDate={val.last_stimulation} roomName={val.sensor_location_name}/>);
                if(key > 10)
                    return false;
            })
            return (rooms);
        }
        else
        {
            return (
                <Text>Loading...</Text>
            );
        }

    };

    refreshButtonClicked = () => {
        if(this.state.refreshing === false)
        {
            this.props.fetchLastStimuluses(this.props.users.userAuth);
            this.setState({refreshing:true});
        }
    };

    render() {
        return (
            <View>
                <Button onPress={this.refreshButtonClicked} info={true} style={{margin:5,display:'flex',flex:1,justifyContent: 'center',alignItems: 'center'}} rounded iconLeft>
                    <Icon type={"MaterialIcons"} style={{fontSize:24}} name='refresh' />
                    <Text>Refresh!</Text>
                </Button>
                {
                    this.createLastActions()
                }
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = {
    fetchLastStimuluses
};

export default connect(mapStateToProps,mapDispatchToProps)(LastActions);
