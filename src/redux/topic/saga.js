import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Action} from "./redux";
import Api from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.FETCH_TOPICS, function* ({data}) {
            const result = yield call(Api.fetchTopics, data)
            yield put(Action.Creators.updateState({
                headerList: result
            }))
        }),
        takeLatest(Action.Types.GET_TOPIC_BY_ID, function* ({id,data}) {
            const [topicTitle, topicPhotos] = yield all([
                call(Api.getTopicById, id),
                call(Api.getTopicPhotosById, id,data)
            ])

            if (topicTitle && topicPhotos) {
                yield put(Action.Creators.updateState({
                    topicTitle: topicTitle,
                    topicPhotos: topicPhotos
                }))
            }
        }),

    ])
}

export default saga;