import { combineReducers } from 'redux';
import UserData from './userData.reducer';

export default combineReducers({
    userData: UserData
});