import {bindActionCreators} from 'redux'
import store from "./store";

import {Action as AppAction} from './app/redux'
import {Action as TodoAction} from './todo/redux'
import {Action as PhotoAction} from './photo/redux'


const {dispatch} = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const todoActions = bindActionCreators(TodoAction.Creators, dispatch);
export const photoActions = bindActionCreators(PhotoAction.Creators, dispatch);