import {GeriatricsActionList} from '../actions/geriatrics';

const initialState = {

};

export default (state = initialState,action) => {
    switch (action.type) {
        case GeriatricsActionList.FETCHED_LAST_STIMULUSES:
            return {
                ...state,
                last_stimulus:action.payload
            }
        case GeriatricsActionList.FETCHED_GERIATRIC_INFO:
            return {
                ...state,
                geriatric_info:action.payload
            }
        default:
            return state;

    }
}