import {API_BASE} from "./../config/env";
import axios from 'axios';
//import {encodeValues} from '../helpers/backendHelper';

export const SurveilsActionList = {
    FETCHED_GET_SENSOR_LOCATIONS:'FETCHED_GET_SENSOR_LOCATIONS',
    FETCHED_GET_SENSOR_LOCATION_STIMULUSES:'FETCHED_GET_SENSOR_LOCATION_STIMULUSES'
} ;

export function fetchSensorLocations(values){
    //const token = encodeValues(values);
    return dispatch => {
        axios.get(`${API_BASE}/sensor/get/locations?token=${token}`)
            .then(result => result.data)
            .then(data => dispatch({
                type:SurveilsActionList.FETCHED_GET_SENSOR_LOCATIONS,
                payload:data
            }))
            .catch(err => console.log("There is an error.\n"+err));
    }
}
export function fetchSensorLocationStimuluses(values)
{
    //const token = encodeValues(values);
    return dispatch => {
        axios.get(`${API_BASE}/sensor/get/location/stimuluses?token=${token}`)
            .then(result => result.data)
            .then(data => dispatch({
                type:SurveilsActionList.FETCHED_GET_SENSOR_LOCATION_STIMULUSES,
                payload:data
            }))
            .catch(err => console.log("There is an error.\n"+err));
    }

}
