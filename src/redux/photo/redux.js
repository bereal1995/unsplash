import {createActions, createReducer} from "reduxsauce";

const initialState = {
    list: [],
    search: {
        results: [],
    },
    popupId: undefined,
    popupUsername: undefined,
    popupPhoto: [],
    relatedPhotos: [],
}

export const Action = createActions({
    updateState: ['data'],
    searchPhotos: ['data'],
    fetchPhotos: ['data'],
    fetchPhotoById: ['data'],
    photoPopup: ['data'],
    relatedPhotos: ['id','data'],
}, {
    prefix: 'PHOTO/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {payload}) => ({
        ...state,
        ...payload
    })
});