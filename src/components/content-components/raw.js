import React from 'react';

export default function Raw(props) {
    return <pre><code>{JSON.stringify(props.data, null, 1)}</code></pre>;
}