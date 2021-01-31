import {all, call, put, select, takeLatest} from 'redux-saga/effects';
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
                    topicPhotos: topicPhotos,
                    currentPage: data.page,
                }))
            }
            const {topic} = yield select();

            console.log('@@topicaa',topic.topicPhotos);
        }),

        takeLatest(Action.Types.GET_TOPIC_BY_ID_MORE, function* ({id,data}) {
            const {topic} = yield select();
            console.log('@@topic',topic);

            const topicPhotos = yield call(Api.getTopicPhotosById,id,{
                ...data,
                page: topic.currentPage + 1,
            })

            yield put(Action.Creators.updateState({
                topicPhotos: [
                    ...topic.topicPhotos,
                    ...topicPhotos,
                ],
                currentPage: topic.currentPage+ 1,
            }))

        }),

    ])
}

export default saga;