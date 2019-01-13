import {API_BASE} from "../config/env";
import axios from 'axios';
import {encodeValues,tokenizeValues} from '../helpers/backendHelper';

export const GeriatricsActionList = {
    FETCHED_LAST_STIMULUSES:'FETCHED_LAST_STIMULUSES',
    FETCHED_GERIATRIC_INFO:'FETCHED_GERIATRIC_INFO',

} ;


export function fetchGeriatricInfo(geriatric_id)
{
    //const token = encodeValues(geriatric_id);
    return dispatch => {
        axios.get(`${API_BASE}/geriatric/get/geriatric?token=${token}`)
            .then(result => result.data)
            .then(data => dispatch({
                type:GeriatricsActionList.FETCHED_GERIATRIC_INFO,
                payload:data
            }))
    }
}

export function fetchLastStimuluses(values){
    const token = tokenizeValues(values);
    return dispatch => {
        axios.get(`${API_BASE}/sensor/get/stimulus/last?token=${token}`)
            .then(result => result.data)
            .then(data => dispatch({
                type:GeriatricsActionList.FETCHED_LAST_STIMULUSES,
                payload:data

            }))
            .catch(err => console.log("There is an error in fetchLastStimuluses.\n"+err));
    }
}