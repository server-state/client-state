import Axios from "axios";

const baseURL = 'https://localhost:4434/api/v1/';

function get(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = baseURL + url;
    }

    return Axios.get(url, {
    });
}

export function all() {
    return get('all');
}

export function module(name) {
    return get(name);
}
