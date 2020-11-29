import {createActions, createReducer} from "reduxsauce";

const initialState = {
    headerList: [],
    list: [],
}

export const Action = createActions({
    updateState: ['payload'],
    fetchTopics: ['payload'],
    searchTopics: ['id','payload'],
}, {
    prefix: 'TOPIC/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {payload}) => ({
        ...state,
        ...payload
    })
});