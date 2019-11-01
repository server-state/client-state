import Raw from '../components/front-end-modules/raw';
import Systemd from '../components/front-end-modules/systemd/systemd';
import Table from '@server-state/tablelike-table-cbm';

const components = {
    raw: {
        component: Raw,
        info: {
            name: 'Raw',
            version: 'v1.0.0',
        }
    },
    systemd: Systemd,
    table: Table
};
console.debug(Table);

export default components;
