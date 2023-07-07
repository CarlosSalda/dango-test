import React, {useState, useContext } from 'react';
import '../styles/card.css'
import {CartContext, CurrentDataContext } from '../App.tsx';

interface MyData {
    name: string;
    description: string;
    index: number;
}

interface CardProps {
    image: string;
    name: string;
    value: number;
    description: string;
    quantity: number;
    index: number;
    updateTitle: (title: number) => void;
    updateIndex: (index: number) => void;
    updateData: (data: MyData[]) => void;
    updateAddCart: (quantity: number) => void;
}

const Card: React.FC<CardProps> = ({ image, value, description, quantity, name, index, updateIndex,updateAddCart }) => {
    const [nameState, setNameState] = useState<string>(name);
    const [valueState] = useState<number>(value);
    const [descriptionState] = useState<string>(description);
    const [quantityState, setQuantity] = useState<number>(quantity);
    const data = useContext(CurrentDataContext);
    const cart = useContext(CartContext);


    const changeTitle = () => {
        const top_target = document.getElementById('title-change');
        const target = document.getElementById('h2-' + index.toString());

        if (top_target instanceof HTMLInputElement) {
            top_target.disabled = false;
            top_target.value = target?.textContent || '';
            updateIndex(index);
        }

        data.map((item) => {
            const sub_index = item.index;

            if (index === sub_index) {
                setNameState((prevState) => {
                    if (prevState !== nameState) {
                        return nameState;
                    }
                    return prevState;
                });
            }
        });

    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuantity(parseInt(value));
    };

    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const target = document.getElementById('h2-' + index.toString());
        target === null || target === undefined ? console.log("Error Html") : target.textContent = value;
    }

    const handleAdd = () => {
        const value = cart
        updateAddCart(value + quantityState);
    }

    return (
        <div>
            
            <div className={`card`} id={'card-' + index.toString()}>
            <img className='img-card' src={image} alt='Image Tourmaline' />
            <h2 id={`h2-${index.toString()}`} onClick={changeTitle} onChange={handleChangeTitle}>
                {nameState}
            </h2>
            <br />
            <div className='div-left'>
                <span className='value-span'> <strong> ${valueState} </strong> </span> <input className='quantity-span' value={quantityState} onChange={handleQuantityChange} />
            </div>
            <br />
            <p className='description-card'>
                {descriptionState}
            </p>
            <button className='button-card' onClick={handleAdd}>
                Add to cart
            </button>
            <br />
            <br />
            <a className='a-card' onClick={() => { window.alert('Learn more redirect') }}> Learn More </a>
        </div>
        </div>

    );
};

export default Card;
