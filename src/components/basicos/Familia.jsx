import React, { cloneElement } from 'react'

export default props => {
    return (
        <>
        <div>
            {
                React.Children.map(props.children, 
                    child => cloneElement(child, props)
                )
            }
        </div>
        <div>
            {
                props.children.map( 
                    (child, i) => cloneElement(child, {...props, key:i })
                )
            }
        </div>
        </>
    )
}