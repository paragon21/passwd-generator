import React from 'react'

const theme = {
    backgroundColor: '#1e173d',
    color: '#ffffff',
    width: '30%',
    margin: '0 auto',
    padding: '1rem 2rem'
}

export default function Template(props) {
    return (
        <div className="application" style={theme} >
           {props.children} 
        </div>
    )
}