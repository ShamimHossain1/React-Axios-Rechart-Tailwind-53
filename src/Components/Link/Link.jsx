import React from 'react';

const Link = (props) => {
    const {path, name} = props.route
    return (
        <div>
            <li>
                <a href={path}>{name}</a>
            </li>
        </div>
    );
};

export default Link;