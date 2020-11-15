const initialState = {
    sidebar: false,
    popup: {
        title: '',
        content: ''
    },
    photos: [],
    todos: [],
    todoDetail: {},
    triggerUpdate: false,
    users: [],
}

export const Action = {
    Types: {
        UPDATE_STATE: 'updateState',

        FETCH_TODOS: 'fetchTodos',
        ADD_TODO: 'addTodo',
        UPDATE_TODO: 'UPDATE_TODO',
        DELETE_TODO: 'deleteTodo',
        FETCH_TODO_BY_ID: 'FETCH_TODO_BY_ID',

        TRIGGER_UPDATE: 'triggerUpdate',

        SEARCH_PHOTOS: 'SEARCH_PHOTOS',
        FETCH_PHOTOS: 'FETCH_PHOTOS',

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
        updateTodo: (id,payload) => ({
            type: Action.Types.UPDATE_TODO,
            id,
            payload,
        }),
        deleteTodo: (id) => ({
            type: Action.Types.DELETE_TODO,
            id
        }),
        fetchTodoById: (payload) => ({
            type: Action.Types.FETCH_TODO_BY_ID,
            payload
        }),

        triggerUpdate: (payload) => ({
            type:Action.Types.TRIGGER_UPDATE,
            payload
        }),

        searchPhotos: (payload) => ({
            type: Action.Types.SEARCH_PHOTOS,
            payload
        }),
        fetchPhotos: (payload) => ({
           type: Action.Types.FETCH_PHOTOS,
            payload
        }),

    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }

        case Action.Types.TRIGGER_UPDATE: {
            return {
                ...state,
                triggerUpdate: action.payload
            }
        }
    }

}
export default reducer;