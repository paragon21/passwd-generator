import React, {useState, useEffect} from 'react';
import {render} from 'react-dom';
import './index.css';

import Template from './components/template'
import Result from './components/result'
import Length from './components/length'
import Settings from './components/settings'
import Button from './components/button'

function App() {

    const initialState = {
        result: null,
        length: 4,
        withUppercase: false,
        withNumbers: false,
        withSymbols: false
    }

    const [state, setState] = useState(initialState);

    const changeLengthHandler = e => {
        setState({...state, length: e.target.value})
    }

    const uppercaseHandler = e => {
        setState({...state, withUppercase: !state.withUppercase})
    }


    const withNumbersHandler = e => {
        setState({...state, withNumbers: !state.withNumbers})
    }

    const withSymbolsHandler = e => {
        setState({...state, withSymbols: !state.withSymbols})
    }

    const generateRandom = (count) => {
        var result = '';
        for (let i = 0; i < count; i++ ) {
            result += String.fromCharCode(Math.floor(Math.random() * 100) * 25 / 100 + 97);
        }
        return result
    }

    const copyToClipboard = () => {
        const inp = document.getElementsByClassName('result')[0].children[0]
        inp.select();
        inp.setSelectionRange(0, 99999);
        document.execCommand('copy')
    }

    const generatePassword = () => {
        let passwd = generateRandom(state.length)

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
          }

        // If Upercase is turned on, needed transforms
        if (state.withUppercase) {
            let temp = passwd.split('')
            temp = temp.map(char => {
                if (Math.random() >= 0.5 ) return char.toUpperCase()
                return char
            })
        passwd = temp.join('')
        }

        // If witNumbers is turned on
        if (state.withNumbers) {
            let temp = passwd.split('')
            temp = temp.map(char => {
                if (Math.random() >= 0.5 ) return String(Math.random() * 100)[0]
                return char
            })
        passwd = temp.join('')
        }

        // If witSymbols is turned on
        if (state.withSymbols) {
     
            let temp = passwd.split('')
            var list = ["@", "#", "$", "%"]
            temp = temp.map(char => {
                if (Math.random() >= 0.5 ) {
                    let idx = getRandomInt(0, 3)
                    return list[idx]
                }
                return char
            })
        passwd = temp.join('')
        }


        // Set state to output result
        setState({...state, result: passwd})
    }

    return (
        <Template>
            <h3> Password Generator </h3>
            <Result onClickHandler={copyToClipboard} passwd={state.result}/>
            <Length value={state.length} onChange={changeLengthHandler} />
            <Settings uppercaseHandler={uppercaseHandler} 
                      withNumbersHandler={withNumbersHandler}
                      withSymbolsHandler={withSymbolsHandler} />
            <Button onClick={generatePassword} />
        </Template>
    )
}

render(
    <App />,
    document.getElementById('root')
    );

