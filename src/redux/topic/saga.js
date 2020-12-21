import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Action} from "./redux";
import {Action as AppAction} from "../app/redux";
import Api from "../../api";

export default function* () {
    yield all([
        takeLatest(Action.Types.FETCH_TOPICS, function* ({payload}) {
            const result = yield call(Api.fetchTopics, payload)
            if (result.data) {
                yield put(Action.Creators.updateState({
                    headerList: result.data
                }))
            }
        }),
        takeLatest(Action.Types.GET_TOPIC_BY_ID, function* ({id,data}) {
            const [topicTitle, topicPhotos] = yield all([
                call(Api.getTopicById, id),
                call(Api.getTopicPhotosById, id,data)
            ])

            if (topicTitle?.data && topicPhotos?.data) {
                yield put(Action.Creators.updateState({
                    topicTitle: topicTitle.data,
                    topicPhotos: topicPhotos.data
                }))
            }
        }),

    ])
}