import moment from 'moment';

const THOUSAND_COMMA_REGEX = /(\d)(?=(\d{3})+\b)/g;

export const range = (a, b) => {
    let result = [];
    for (let i = a; i < b; i++) {
        result.push(i);
    }
    return result;
}

export const findKeys = (m, ...keys) => {
    let result = {};
    m.forEach((v, k) => keys.includes(k) && (result[k] = v));
    return result;
}

export const omit = (obj, ...keys) => {
    let result = Object.assign({}, obj);
    keys.forEach(key => delete result[key]);
    return result;
}

export const urlHostname = (data) => {
    let a = document.createElement('a');
    a.href = data;
    return a.hostname;
}

export const yearRange = (from, to) => {
    let diff = to - from;
    let diffs = range(0, diff + 1);
    return diffs.map(d => moment(from, 'YYYY').add(d, 'year').format('YYYY'))
}

export const thousandNumberFormat = (n) => {
    if (typeof n === 'number')
        return n.toString().replace(THOUSAND_COMMA_REGEX, '$1,');

    if (typeof n === 'string' || n instanceof String)
        return n.replace(THOUSAND_COMMA_REGEX, '$1,');
}

export const invertObject = (obj) => {
    let result = {};
    Object.entries(obj).forEach(([k, v]) => {
        result[v] = k;
    });

    return result;
}

export const chunk = (arr, chunkSize, cache = []) => {
    const tmp = [...arr];
    while (tmp.length) cache.push(tmp.splice(0, chunkSize));
    return cache;
}

export const timerFormat = (timer) => {
    let sec = timer % 60;
    let min = Math.floor(timer / 60);
    return `${min}:${sec}`;
}

export const tenThousandFormat = (n) => {
    return Math.floor(n / 10000)
}

export const scrollToContent = (el) => {
    const oft = el.offsetTop - 200;
    window.scrollTo(0, oft);
};

export const setPhotoGroup = (data) => {
    let groups = [[], [], []]
    let groupHeight = [0, 0, 0];

    for(let i = 0; i < data.length; i++) {
        const width = data[i].width;
        const height = data[i].height;
        const ratio = width / height;
        const minIndex = groupHeight.indexOf(Math.min(...groupHeight));
        groups[minIndex].push(data[i])
        groupHeight[minIndex] = groupHeight[minIndex] + Number(ratio.toFixed(2));
    }

    return groups;
};

export const createObserver = (sentinelCurrent, callMoreItems = () => {}) => {
    let observer = new IntersectionObserver((entries, observer) => {
        console.log('@@entries',entries);
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                callMoreItems && callMoreItems()
            }
        });
    });

    return observer.observe(sentinelCurrent);
}

export const setAccessToken = (token) => {
    window.localStorage.setItem('AccessToken',token)
}

export const setRefreshToken = (token) => {
    window.localStorage.setItem('RefreshToken',token)
}

export const getAccessToken = () => {
    return window.localStorage.getItem('AccessToken')
}

export const getRefreshToken = () => {
    return window.localStorage.getItem('RefreshToken')
}

export const removeAccessToken = () => {
    return window.localStorage.removeItem('AccessToken')
}

export const removeRefreshToken = () => {
    return window.localStorage.removeItem('RefreshToken')
}