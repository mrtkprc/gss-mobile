import {SurveilsActionList} from '../actions/surveils';

const initialState = {
    sensor_location_stimuluses:{}
};

export default (state = initialState,action) => {
    switch (action.type) {

        case SurveilsActionList.FETCHED_GET_SENSOR_LOCATIONS_WITH_STIMULUSES:
            return {
                ...state,
                sensor_locations_with_stimuluses:action.payload
            }

        case SurveilsActionList.FETCHED_GET_SENSOR_LOCATIONS:
            return {
                ...state,
                sensor_locations:action.payload
            }
        case SurveilsActionList.FETCHED_GET_SENSOR_LOCATION_STIMULUSES:
            const count = Object.keys(action.payload).length;
            if (count <= 0)
                return state;
            const room_id = action.payload[0]._id;
            state.sensor_location_stimuluses[[room_id]] = action.payload
            console.log();
            return {
                ...state,
                //sensor_location_stimuluses["x"]:action.payload
                //sensor_id:action.payload
            }

        default:
            return state;

    }
}