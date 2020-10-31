const initialState = {
    sidebar: false,
    popup: {
        title: '',
        content: ''
    },
    photos: [],
    todos: [],
    triggerUpdate: false,
    users: []
}

export const Action = {
    Types: {
        UPDATE_STATE: 'updateState',

        HANDLE_SIDEBAR: 'handleSidebar',

        HANDLE_POPUP: 'handlePopup',

        SET_PHOTOS: 'setPhotos',

        FETCH_TODOS: 'fetchTodos',
        ADD_TODO: 'addTodo',
        DELETE_TODO: 'deleteTodo',

        TRIGGER_UPDATE: 'triggerUpdate',

        SET_USERS: 'setUsers',

    },
    Creators: {
        updateState: (payload) => ({
            type:Action.Types.UPDATE_STATE,
            payload
        }),

        fetchTodos: () => ({
            type: Action.Types.FETCH_TODOS
        }),
        addTodo: (payload) => ({
            type: Action.Types.ADD_TODO,
            payload
        }),
        deleteTodo: (id) => ({
            type: Action.Types.DELETE_TODO,
            id
        }),

        handleSideber: (payload) => ({
            type: Action.Types.HANDLE_SIDEBAR,
            payload: payload
        }),

        handlePopup: (payload) => ({
            type: Action.Types.HANDLE_POPUP,
            payload
        }),

        setPhotos: (payload) => ({
            type:Action.Types.SET_PHOTOS,
            payload
        }),

        triggerUpdate: (payload) => ({
            type:Action.Types.TRIGGER_UPDATE,
            payload
        }),

        setUsers: (payload) => ({
            type: Action.Types.SET_USERS,
            payload
        })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
        case Action.Types.UDATE_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }
        case Action.Types.HANDLE_SIDEBAR: {
            return {
                ...state,
                sidebar: action.payload
            }
        }
        case Action.Types.HANDLE_POPUP : {
            return {
                ...state,
                popup: {
                    ...action.payload
                }
            }
        }
        case Action.Types.SET_PHOTOS: {
            return {
                ...state,
                photos: action.payload
            }
        }
        case Action.Types.TRIGGER_UPDATE: {
            return {
                ...state,
                triggerUpdate: action.payload
            }
        }
        case Action.Types.SET_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
    }
}
export default reducer;