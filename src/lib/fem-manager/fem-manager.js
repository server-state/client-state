import parseCode from './parse-fem';

let raw = [];
let fems = undefined;

export default function useFEMManager() {
    if (!fems) {
        load();
    }

    return { fems, install };
}

function load() {
    raw = JSON.parse(window.localStorage.getItem('fems')) || [];
    fems = {};

    for (const fem of raw) {
        fems[fem['fem_id']] = { component: parseCode(fem.code), info: fem }
    }
}

function install(releaseData) {
    raw.push(releaseData);
    save();
    load();
}

function save() {
    window.localStorage.setItem('fems', JSON.stringify(raw));
}
