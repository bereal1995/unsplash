import {createActions, createReducer} from "reduxsauce";

const initialState = {
    list: [],
    search: {
        results: [],
    },
    popupId: undefined,
    popupPhoto: [],
}

export const Action = createActions({
    updateState: ['payload'],
    searchPhotos: ['payload'],
    fetchPhotos: ['payload'],
    fetchPhotoById: ['payload'],
    photoPopup: ['payload'],
}, {
    prefix: 'PHOTO/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {payload}) => ({
        ...state,
        ...payload
    })
});