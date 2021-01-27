import {createActions, createReducer} from "reduxsauce";

const initialState = {
    relatedList: [],
}

export const Action = createActions({
    updateState: ['props'],
    getRelatedList: ['id','data'],
}, {
    prefix: 'COLLECTION/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});