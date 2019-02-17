export const SAVE = 'SAVE';

export const userProfile = (data) => {
    return {
        type: SAVE,
        data
    };
};

export function getUserDetail(userData) {
    return (dispatch) => {
        dispatch(userProfile(userData));
    }
}