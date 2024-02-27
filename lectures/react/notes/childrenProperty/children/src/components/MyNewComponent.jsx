import React from 'react';
    
const MyNewComponent = (props) => {
    return(
        <div>
            <h1>{ props.header }</h1>
            { props.children }
        </div>
    );
}
    
export default MyNewComponent;

