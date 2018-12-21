import React, {Component} from 'react';
import {Body, Card, CardItem, Text,Icon,Right,Left,List,ListItem} from "native-base";
import {fetchSensorLocationStimuluses} from "../actions/surveils";
import {connect} from 'react-redux';
import _ from 'lodash';

class RoomLastActivities extends Component {
    state = {};

    createStimulations = (stimulation_list,roomName) => {
        const EACH_ROOM_COUNT_ACTION = 5;

        let stims = [];
        _.forEach(stimulation_list,(val,key) => {
            stims.push(<ListItem key={roomName+"-"+key.toString()}><Icon style={{color:'green',fontSize:20}} type="Feather" name="activity"/><Text> {val}</Text></ListItem>)
            if (key === EACH_ROOM_COUNT_ACTION - 1)
                return false;
        })
        return stims;
    }

    render() {
        return (
            <Card>
                <CardItem header>
                    <Text><Icon name='home' /> {this.props.roomName}</Text>
                </CardItem>
                <CardItem>
                    <List>
                        {
                            this.createStimulations(this.props.sensor_stimulations,this.props.roomName)
                        }
                    </List>
                </CardItem>
                <CardItem footer>
                    <Text>{this.props.todayActionsCount} Action(s) Today</Text>
                </CardItem>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        geriatrics:state.geriatrics,
        users:state.users,
        sensor_locations:state.surveils.sensor_locations,
        sensor_location_stimuluses:state.surveils.sensor_location_stimuluses
    }
};
const mapDispatchToProps = {
    fetchSensorLocationStimuluses
};

export default connect(mapStateToProps,mapDispatchToProps)(RoomLastActivities);