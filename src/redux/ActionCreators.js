import {bindActionCreators} from 'redux'
import store from "./store";

import {Action as AppAction} from './app/redux'
import {Action as PhotoAction} from './photo/redux'
import {Action as TopicAction} from './topic/redux'
import {Action as UserAction} from './user/redux'
import {Action as CollectionAction} from './collection/redux'


const {dispatch} = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const photoActions = bindActionCreators(PhotoAction.Creators, dispatch);
export const topicActions = bindActionCreators(TopicAction.Creators, dispatch);
export const userActions = bindActionCreators(UserAction.Creators, dispatch);
export const collectionActions = bindActionCreators(CollectionAction.Creators, dispatch);