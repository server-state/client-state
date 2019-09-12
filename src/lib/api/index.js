import Axios from "axios";

const baseURL = 'http://localhost:8080/api/v1/';

function get(url) {
    return Axios.get(baseURL + url, {
        /* headers: {
            "Cache-Control": "no-cache"
        } */
    });
}

export function all() {
    return get('all');
}

export function module(name) {
    return get(name);
}