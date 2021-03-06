import {createActions, createReducer} from "reduxsauce";

const initialState = {
    list: [],
    profile: '',
}

export const Action = createActions({
    updateState: ['props'],
    fetchUserPhoto: ['id','data'],
    getUserProfile: ['id'],
}, {
    prefix: 'USER/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});