import React from 'react';

function ButtonLink(props){
    return (
        <a {...props}>
            {props.children}
        </a>
    );
}

export default ButtonLink;