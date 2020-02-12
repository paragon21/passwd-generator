import React from 'react'

const divStyles = {
    display: 'flex',
    justifyContent: 'center'
}

const inputStyles = {
    backgroundColor: '#302563',
    border: '0px',
    color: 'white',
    textAlign: 'center'
}

// export default function Result(props) {
//     return (
//         <div className="subsection">
//             <div style={styles}>{props.passwd || 'Choose option...'}</div>
//         </div>
//     )
// }

export default function Result(props) {
    return (
        <div onClick={props.onClickHandler} className="subsection result" style={divStyles}>
            <input style={inputStyles} type="text" value={props.passwd || ''} />
        </div>
    )
}