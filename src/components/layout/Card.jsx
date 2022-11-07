import React from 'react'
import './Card.css'

export default (props) => {
    const { titulo, color } = props;

    return (
        <div className='Card' style={{
            backgroundColor: color || '#008',
            borderColor: color || '#008'
        }}>
            <div className='Title'>{titulo}</div>
            <div className='Content'>
                {props.children}
            </div>            
        </div>
    )
}