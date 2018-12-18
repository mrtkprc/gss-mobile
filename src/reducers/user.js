import {UserActionList} from './../actions/users';

const initialState = {
    isAuthenticated:false,
    isLoginTried:false,
    userAuth:{}
};

export default (state = initialState,action) => {
    switch (action.type) {
        case UserActionList.CHECK_LOGIN:
            return {
                ...state,
                userAuth:action.payload,
                isLoginTried:true,
                isAuthenticated: action.payload.status
            }
        default:
            return state;

    }
}