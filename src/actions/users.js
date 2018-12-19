import {API_BASE} from "../config/env";
import axios from 'axios';
import {tokenizeValues} from './../helpers/backendHelper';


export const UserActionList = {
    CHECK_LOGIN:'CHECK_LOGIN',
};

export function checkLoginOperation(email,password){
    const token = tokenizeValues({email,password});
    return dispatch => {
        axios.post(`${API_BASE}/relative/login_control/`,{token})
            .then(result => result.data)
            .then(data => dispatch({
                type:UserActionList.CHECK_LOGIN,
                payload:data
            }))
            .catch(err => console.log("There is an error.\n"+err));
    }
}
