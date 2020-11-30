import {createActions, createReducer} from "reduxsauce";

const initialState = {
    list: [],
}

export const Action = createActions({
    updateState: ['payload'],
    fetchUserPhoto: ['id','payload'],
}, {
    prefix: 'USER/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {payload}) => ({
        ...state,
        ...payload
    })
});