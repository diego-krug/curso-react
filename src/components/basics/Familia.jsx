import React, { cloneElement } from 'react';

export default (props) => {
    return (
        <div>
            {
                React.Children.map(props.children, (child, i) => {
                    return cloneElement(child, { ...props, key: i })
                })
            }
        </div>
    )
}