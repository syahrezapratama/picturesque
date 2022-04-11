import React from 'react'

export default function Button(props) {
    return(
        <div className='button-container center'>
            <button
                type='button'
                className='button'
                onClick={props.callback}
            >
                {props.text}
            </button>
        </div>
        
    )
}