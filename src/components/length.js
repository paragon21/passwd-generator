import React from 'react'
import { RangeInput } from '@bit/grommet.grommet.range-input'

export default function Length(props) {
    return (
        <>
        <label htmlFor="length"><span className="about">Length: </span>{props.value}</label>
        <div className="subsection">
            <RangeInput value={props.value} id="length" step={1}
                        name="length" min={4} max={32} onChange={props.onChange} />
        </div>
        </>
    )
}
