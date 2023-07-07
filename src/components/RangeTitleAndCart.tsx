import React, {useState, useContext} from 'react'
import { CartContext, CurrentDataContext } from '../App.tsx';


export default function RangeTitle() {
    const [rangeValue, setRangeValue] = useState(24);
    const data = useContext(CurrentDataContext);
    const cart = useContext(CartContext);

    const handleRangeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
       
        setRangeValue(parseInt(value));

        data.map((item) => {
            const index = item.index;
            const target = document.getElementById('h2-' + index.toString());

            if (target !== null && target !== undefined) {
                target.style.fontSize = value + 'px';
            }
        });
    };

    return (
        <>
        <div style={{display: 'inline-block'}}>
            <input
                type="range"
                min="0"
                max="250"
                value={rangeValue}
                onChange={handleRangeChange}
            />
            <p>Selected value: {rangeValue}</p>
        </div>
        <div style={{display: 'inline-block', border: '1px solid black', marginLeft: '60px'}}>
            CART: {cart}
        </div>
        </>
        
    )
}
