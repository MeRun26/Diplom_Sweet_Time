import { ACTION_TYPE } from '../actions';
// import { ROLE } from '../constants';

const initialAppState = {
    wasLogout: false,
};

export const appReducer = (state = initialAppState, action) => {
    switch (action.type) {
        case ACTION_TYPE.LOGOUT:
            return {
                ...state,
                wasLogout: !state.wasLogout,
            };
        default:
            return state;
    }
};
