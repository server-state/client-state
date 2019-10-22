import Axios from "axios";

const baseURL = 'https://localhost:4434/api/v1/';

function get(url) {
    url = fullURL(url);

    return Axios.get(url, {
    });
}

export function all() {
    return get('all');
}

export function module(name) {
    return get(name);
}

export function fullURL(url) {
    return (!url.startsWith('http://') && !url.startsWith('https://') ? baseURL + url : url);
}
