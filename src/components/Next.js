import React from 'react';

import '../assets/sass/main.scss';
const Next = (props) => (
    <div className="next">
        <a href={props.link} className="button next">
            Next >
            </a>
    </div>
);

export default Next;