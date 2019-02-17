import * as actionTypes from '../action/action';

const initialState = {
    data: []
}

const UserData = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SAVE: {
            return {
                ...state,
                ...state.data.push(action.data)
            }
        }
        default:
            return state;
    }
}

export default UserData;