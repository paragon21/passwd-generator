import React from 'react'
import ToggleButton from '@bit/lekanmedia.shared-ui.toggle-button';


export default function Settings(props) {

    return (
        <div className="settings">
            <span className="about">Settings</span>

            <div className="subsection settings-subsection">
                <span>Include Uppercase</span>
                <ToggleButton color="#8162f0" onToggle={props.uppercaseHandler} />
            </div>

            <div className="subsection settings-subsection">
                <span>Include Numbers</span>
                <ToggleButton color="#8162f0" onToggle={props.withNumbersHandler} />
            </div>

            <div className="subsection settings-subsection">
                <span>Include Symbols</span>
                <ToggleButton color="#8162f0" onToggle={props.withSymbolsHandler} />
            </div>


        </div>
    )
}