import {createActions, createReducer} from "reduxsauce";

const initialState = {
    headerList: [],
    topicTitle: {},
    topicPhotos: [],
    currentPage: 1,
}

export const Action = createActions({
    updateState: ['props'],

    fetchTopics: ['data'],
    getTopicById: ['id','data'],
    getTopicByIdMore: ['id','data'],
}, {
    prefix: 'TOPIC/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});