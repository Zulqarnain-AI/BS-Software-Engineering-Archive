import React from 'react'
import { useState } from 'react'

function Lab1() {
    function changeCase() {
        setTextCase(textCase === 'lowercase' ? 'UPPERCASE' : 'lowercase')
        const textElement = document.getElementById('text')
        return(
    
            textElement.style.textTransform = textCase === 'lowercase' ? 'uppercase' : 'lowercase'
        )
    }
    const [color, setColor] = useState('white')
    const [textCase, setTextCase] = useState('lowercase')
        return (
            <>
                <div style={{
                    height: '100%',
                    width: '',
                    backgroundColor: `${color}`,
                    alignContent: 'center',
                    textAlign: 'center',
                    paddingTop: '20px'
                }}>

                <button onClick={() => setColor(color === 'white' ? 'yellow' : 'white')}>change color</button>

                <div>
                    <h3 id="text">this is the lowercase latter</h3>
                    <button onClick={changeCase}>{textCase}</button>

                </div>
                </div>

            </>
        )
    }


export default Lab1