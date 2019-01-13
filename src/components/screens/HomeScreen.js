import React from "react";
import { Container,Tabs,Tab,TabHeading ,Content, Button,Text,Icon } from 'native-base';
import {connect} from 'react-redux';
import RoomLastActivities from './../RoomLastActivities';
import _ from 'lodash';
import {fetchSensorLocations,fetchSensorLocationsWithStimuluses} from "../../actions/surveils";
import LastActions from './../LastActions';

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    state ={

    };

    componentWillReceiveProps(nextProps) {
        this.setState({sensor_locations_with_stimuluses:nextProps.sensor_locations_with_stimuluses});
    }

    async componentWillMount() {
        await this.props.fetchSensorLocationsWithStimuluses(this.props.users.userAuth);

        setTimeout(() => {
            this.setState({sensor_locations_with_stimuluses:this.props.sensor_locations_with_stimuluses});
        },1000);

    }

    createRooms = () => {
        if(this.state.sensor_locations_with_stimuluses !== undefined)
        {
            if(parseInt(_.size(this.state.sensor_locations_with_stimuluses)) > 0)
            {
                let rooms = [];
                _.forEach(this.state.sensor_locations_with_stimuluses,(val,key) => {
                    rooms.push(<RoomLastActivities todayActionsCount={_.size(val.sensor_stimulations)} sensor_stimulations={val.sensor_stimulations} roomName={val.sensor_location_name} key={"Room#"+key.toString()}/>)
                })
                return (rooms)
            }
            else
            {
                return (<Text>No Action Today</Text>)
            }
        }

    }
    render() {
        return (
            <Container style={{marginTop:25}}>
                <Content>
                    <Tabs>
                        <Tab heading={ <TabHeading><Icon name="activity" style={{color:'green'}} type="Feather" /><Text>Room Actions</Text></TabHeading>}>
                            {
                                this.createRooms()
                            }
                        </Tab>
                        <Tab heading={ <TabHeading><Icon name="compass" type="Feather" /><Text>Last Actions</Text></TabHeading>}>
                            <LastActions/>
                        </Tab>
                    </Tabs>
                </Content>
            </Container>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        geriatrics:state.geriatrics,
        users:state.users,
        sensor_locations:state.surveils.sensor_locations,
        sensor_locations_with_stimuluses:state.surveils.sensor_locations_with_stimuluses,
        surveils: state.surveils
    }
};
const mapDispatchToProps = {
    fetchSensorLocations,
    fetchSensorLocationsWithStimuluses
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);


/*
//for header
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
*/