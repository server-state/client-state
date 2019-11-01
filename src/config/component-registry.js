import Raw from '../components/front-end-modules/raw';
import Systemd from '../components/front-end-modules/systemd/systemd';

const components = {
    raw: {
        component: Raw,
        info: {
            name: 'Raw',
            version: 'v1.0.0',

        }
    },
    systemd: Systemd
};

export default components;
