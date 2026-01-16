import styled from "styled-components";
import { useState } from "react";
function Calculator() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [operation, setOperation] = useState("+");
    const [result, setResult] = useState(0);
    const [inputfieldStatus, setInputfieldStatus] = useState(true);

    const handleClick = () => {
        let res;
        switch (operation) {
            case "+":
                res = input1 + input2;
                break;
            case "-":
                res = input1 - input2;
                break;
            case "*":
                res = input1 * input2;
                break;
            case "/":
                res = input1 / input2;
                break;
            default:
                break;
        }
        setResult(res);

    }
    const handle1 = (e) => {
        setInput1(Number(e.target.value));
    }
    const handle2 = (e) => {
        setInput2(Number(e.target.value));
    }
    return (
        <StyledCalculator className="Calculator">
            <input type="text" value={input1} onChange={handle1} onClick={() => setInputfieldStatus(true)} />

            <select name="operation" id="" value={operation} onChange={(e) => setOperation(e.target.value)} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>

            <input type="text" value={input2} onChange={handle2} onClick={() => setInputfieldStatus(false)} />
<hr />
            <div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '10px' }}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                        <button key={num} style={{ height: '40px', width: '40px', margin: '5px' }} onClick={() => {
                            if (inputfieldStatus) {
                                setInput1(input1 * 10 + num);
                            } else {
                                setInput2(input2 * 10 + num);
                            }
                        }}>{num}</button>
                    ))}
                </div>
            </div>
<hr />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>result:</h2>
                <h3>{result}</h3>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button style={{ height: '40px', width: '70px' }} onClick={() => {
                    setInput1(0);
                    setInput2(0);
                    setOperation("+");
                    setResult(0);
                }}>Clear</button>
                <button style={{ height: '40px', width: '70px', fontSize: '40px' }} onClick={handleClick}>=</button>
            </div>
        </StyledCalculator>
    );
}
const StyledCalculator = styled.div`
  border: 3px solid #0e0d0dff;
  border-radius: 8px;
    padding: 20px;
    max-width: 200px;
    text-align: center;
    font-family: Arial, sans-serif;
    margin:5px;
    background-color: #aba7a7ff;
    input {
        width: 200px;
        height: 30px;
        margin: 0px;
        text-align: start;
    }
    select {
        width: 70px;
        height: 40px;
        margin: 5px;
        text-align: center;
        font-size: 30px;
    }
`;

export default Calculator;