import { combineReducers } from 'redux'
import geriatrics from './geriatric'
import users from './user';
import surveils from './surveils';

export default combineReducers({
    geriatrics,
    users,
    surveils,
});
