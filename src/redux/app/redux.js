import {createActions, createReducer} from "reduxsauce";

const initialState = {
    sidebar: false,
    popup: {
        title: '',
        content: ''
    },
    users: [],
    isLoading: false,
    menuPopup: false,
    login: false,
}

export const Action = createActions({
    updateState: ['props'],
}, {
    prefix: 'APP/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});