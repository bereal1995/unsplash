import {createActions, createReducer} from "reduxsauce";

const initialState = {
    relatedList: [],
}

export const Action = createActions({
    updateState: ['payload'],
    getRelatedList: ['id','payload'],
}, {
    prefix: 'COLLECTION/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {payload}) => ({
        ...state,
        ...payload
    })
});