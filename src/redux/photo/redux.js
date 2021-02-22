import {createActions, createReducer} from "reduxsauce";

const initialState = {
    list: [],
    search: {
        currentPage: 1,
        query: '',
        results: [],
    },
    searchRelated: [],
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
    currentPage: 1,
}

export const Action = createActions({
    updateState: ['props'],

    searchPhotos: ['data'],
    searchPhotosRelated: ['data'],
    searchPhotosMore: ['data'],

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