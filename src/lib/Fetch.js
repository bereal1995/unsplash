import axios from 'axios';
import qs from 'qs';
import {UNSPLASH_API_KEY, URL} from "../constants/Consts";
import {getAccessToken} from "./Common";

const FetchConsts = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
    APPLICATION_JSON: 'application/json',
    APPLICATION_X_WWW_FORM_URL_ENCODED: 'application/x-www-form-urlencoded',
    MULTIPART_FORM_DATA: 'multipart/form-data',
    TEXT_PLAIN: 'text/plain',
}

const getDefaultHeader = (contentType) => {
    let header = {
        'Content-Type': contentType,
    };

    // uid 있을 경우 uid 처리
    let uid;
    if(uid) {

    }

    return header;
}

const axiosInstance = axios.create({
    baseURL        : URL.API_BASE_URL,
    timeout        : 6000,
    withCredentials: false,
});

const request = async (contentType, method, url,  data = {}) => {

    try {
        const config = {
            url,
            method,
            headers: getDefaultHeader(contentType)
        }

        if (method === FetchConsts.GET) {
            data.client_id = UNSPLASH_API_KEY;
            config.params = data;
        } else {
            if (contentType === FetchConsts.APPLICATION_X_WWW_FORM_URL_ENCODED)
                config.data = qs.stringify(data, {allowDots: true});
            else
                config.data = data;
        }

        console.log('@@[Request Config]',config);

        console.log('@@getAccessToken()',getAccessToken());
        if (getAccessToken()) {
            axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + getAccessToken();
        }

        // 로그아웃 하면 로컬 스토리지 초기화! 로그인체크는 토큰이 있는지 확인
        const result = await axiosInstance(config);

        return result.data;
    } catch (e) {
        if (e.response) {
            if (e.response.status === 401) {
                console.log('로그인 만료됨. 로그인으로 이동합니다');
            } else {
                console.log('@@e',e);
            }
        } else {
            console.log('@@e',e);
        }
    } finally {
    }

}

const FetchJson = {
    get: (url, data) => request(FetchConsts.APPLICATION_JSON, FetchConsts.GET, url, data),
    post: (url, data) => request(FetchConsts.APPLICATION_JSON, FetchConsts.POST, url, data),
    put: (url, data) => request(FetchConsts.APPLICATION_JSON, FetchConsts.PUT, url, data),
    delete: (url, data) => request(FetchConsts.APPLICATION_JSON, FetchConsts.DELETE, url, data),
}

const FetchUrlEncoded = {
    get: (url, data) => request(FetchConsts.APPLICATION_X_WWW_FORM_URL_ENCODED, FetchConsts.GET, url, data),
    post: (url, data) => request(FetchConsts.APPLICATION_X_WWW_FORM_URL_ENCODED, FetchConsts.POST, url, data),
    put: (url, data) => request(FetchConsts.APPLICATION_X_WWW_FORM_URL_ENCODED, FetchConsts.PUT, url, data),
    delete: (url, data) => request(FetchConsts.APPLICATION_X_WWW_FORM_URL_ENCODED, FetchConsts.DELETE, url, data),
}

export {FetchJson, FetchUrlEncoded};