import img from './assets/item.jpeg'
import styled from 'styled-components'
import { useState } from 'react';
function Card() {
    const [bg, setBg] = useState('#f9f9f9');
    const [add, setAdd] = useState(false);
    const [color, setColor] = useState('black');
    const [bbg, setBbg] = useState('white');
    const [width, setWidth] = useState('200px');
    const [height, setHeight] = useState('200px');
    const StyledCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0px;
    max-width: 200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-family: Arial, sans-serif;
    margin: 010px;
    background-color: ${bg};
    img {
        width: ${width};
        height: ${height};
        background-color: white;
        border-radius: 8px 8px 0 0;
        padding: 0px;
        margin: 0px;
    }
    h2 {
        font-size: 1.5em;
        margin: 10px 0 5px 0;
    }

    p {
        font-size: 0.9em;
        color: #555;
        margin: 0 10px 10px 10px;
        height: 60px;
        overflow: hidden;
        text-overflow: ellipsis;}
        button {
            background-color: ${bbg};
            color: ${color};
            margin: 10px 0;
            
}
`;
    const bcolor = (bbg1, c) => {
        setBbg(bbg1);
        setColor(c);
    }
    return (
        <>

            <StyledCard className="card" onMouseEnter={() => setBg('#b2b8acff')} onMouseLeave={() => setBg('#f9f9f9')}>
                <img src={img} alt="Item picture" onMouseEnter={()=>{setHeight('210px');setWidth('210px')}} onMouseLeave={()=>{setHeight('200px');setWidth('200px')}} />
                <h2>Smart watch</h2>
                <p>High Quality Men's Watches Stainless Steel Waterproof Watch for Man women</p>
                <h3>Price:$99.99</h3>
                <button onClick={() => add ? setAdd(false) : setAdd(true)}
                    onMouseEnter={() => bcolor('black', 'white')}
                    onMouseLeave={() => bcolor('white', 'black')}
                >{add ? 'Remove from Cart' : 'Add to Cart'}

                </button>
            </StyledCard>
        </>
    );
}



export default Card;