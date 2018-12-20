import React, {Component} from 'react';
import {Body, Card, CardItem, Text} from "native-base";
import {fetchSensorLocationStimuluses} from "../actions/surveils";
import {connect} from 'react-redux';

class RoomLastActivities extends Component {

    state = {};

    render() {
        return (
            <Card>
                <CardItem header>
                    <Text>NativeBase</Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text>
                        Mert
                    </Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Text>GeekyAnts</Text>
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

export default  connect(mapStateToProps,mapDispatchToProps)(RoomLastActivities);