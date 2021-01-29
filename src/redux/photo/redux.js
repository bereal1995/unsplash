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
    visualPhoto: {
        urls: {
            full:{

            },
        }
    },
}

export const Action = createActions({
    updateState: ['props'],
    searchPhotos: ['data'],
    fetchPhotos: ['data'],
    fetchPhotoById: ['data'],
    photoPopup: ['data'],
    relatedPhotos: ['id','data'],
    getRandomPhoto: ['data'],
}, {
    prefix: 'PHOTO/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});