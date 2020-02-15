import parseCode from './parse-cbm';

let raw = [];
let cbms = undefined;

export default function useCBMManager() {
    if (!cbms) {
        load();
    }
    
    return { cbms, install };
}

function load() {
    raw = JSON.parse(window.localStorage.getItem('cbms')) || [];
    cbms = {};
    
    for (const cbm of raw) {
        cbms[cbm['cbm_id']] = { component: parseCode(cbm.code), info: cbm }
    }
}

function install(releaseData) {
    raw.push(releaseData);
    save();
    load();
}

function save() {
    window.localStorage.setItem('cbms', JSON.stringify(raw));
}
