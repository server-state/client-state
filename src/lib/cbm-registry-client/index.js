import Axios from "axios";

const base = 'http://localhost:3000';

/**
 * Search for CBMs
 * @param {string} [query=''] The search query
 * @param {number} [page=1] The page
 * @returns {Promise<number[]>}
 */
export async function search(query = '', page = 1) {
    return (await Axios.get(`${base}/api/cbm`, {
        params: {
            q: query,
            p: page
        },
        responseType: 'json'
    })).data;
}

/**
 * Fetch the details about a CBM
 * @param {number} cbmId
 * @returns {Promise<*>}
 */
export async function cbmDetails(cbmId) {
    return (await Axios.get(`${base}/api/cbm/${cbmId}`, {responseType: 'json'})).data;
}

/**
 * Download a release to install it
 * @param {number} releaseId
 * @returns {Promise<*>}
 */
export async function download(releaseId) {
    return (await Axios.get(`${base}/api/releases/${releaseId}`)).data;
}

