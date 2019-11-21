import React from 'react';

import '../assets/sass/main.scss';
const Prev = (props) => (
    <div className="prev">
        <a href={props.link} className="button prev">
            &lt; Prev
          </a>
    </div>
);

export default Prev;