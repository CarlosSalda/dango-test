import './App.css'
import Card from './components/Card'
import toumalineCeleste from './assets/images/tourmaline-celeste.png';
import InputTitle from './components/InputTitle';
import { useState, useEffect } from 'react';
import { createContext } from "react";
import RangeTitle from './components/RangeTitleAndCart';
interface MyData {
  name: string;
  description: string;
  index: number;
}

export const TitleContext = createContext<number>(0);
export const IndexContext = createContext<number>(0);
export const CartContext = createContext<number>(0);
export const CurrentDataContext = createContext<MyData[]>(
  []
);



function App() {
  const mock_description = 'Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion';
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentAddCart, setCurrentAddCart] = useState<number>(0);
  const [currentTitle, setCurrentTitle] = useState<number>(0);
  const [currentData, setCurrentData] = useState<MyData[]>([]);

  const mock_cards = [
    {
      image: toumalineCeleste,
      name: 'Tourmaline & Eucalyptus Bar Soap',
      value: 12.00,
      description: mock_description,
      quantity: 1
    },

    {
      image: toumalineCeleste,
      name: 'Tourmaline & Argan Oil Bar Soap',
      value: 12.00,
      description: mock_description,
      quantity: 1
    },

    {
      image: toumalineCeleste,
      name: 'Tourmaline & Tea Tree Bar Soap',
      value: 12.00,
      description: mock_description,
      quantity: 1
    },
    {
      image: toumalineCeleste,
      name: 'Tourmaline & Unscented Bar Soap',
      value: 12.00,
      description: mock_description,
      quantity: 1
    },
    {
      image: toumalineCeleste,
      name: 'Tourmaline & Tea Tree Bar Soap',
      value: 12.00,
      description: mock_description,
      quantity: 1
    },
    {
      image: toumalineCeleste,
      name: 'Tourmaline & Unscented Bar Soap',
      value: 12.00,
      description: mock_description,
      quantity: 1
    },
  ]

  const updateTitle = (index: number) => {
    setCurrentTitle(index);
  }

  const updateIndex = (index: number) => {
    setCurrentIndex(index);
  }
  const updateAddCart = (index: number) => {
    setCurrentAddCart(index);
  }

  const updateData = (data: MyData[]) => {
    setCurrentData(data);
  }

  const renderCards = () => {
    return mock_cards.map((card, index) => (
      <Card
        key={index}
        image={card.image}
        name={card.name}
        value={card.value}
        description={mock_description}
        quantity={card.quantity}
        index={index}
        updateTitle={updateTitle}
        updateIndex={updateIndex}
        updateData={updateData}
        updateAddCart={updateAddCart}
      />
    ));
  };

  useEffect(() => {
    const sub = mock_cards.map((card, index) => (
      {
        name: card.name,
        description: card.description,
        index: index
      }
    ));

    setCurrentData(sub)
  },[])


  return (
    <>
      <TitleContext.Provider value={currentTitle}>
        <IndexContext.Provider value={currentIndex}>
          <CartContext.Provider value={currentAddCart}>
            <CurrentDataContext.Provider value={currentData}>
              <InputTitle value={''} updateData={updateData}  />
              <RangeTitle/>
              
              <br />
              <br />

              <div className="gallery">
                {renderCards()}
              </div>
            </CurrentDataContext.Provider>
          </CartContext.Provider>
        </IndexContext.Provider>
      </TitleContext.Provider>
      <br />

      <div className="footer">
        <p> © 2023 Carlos Saldaña. All rights reserved. </p>
      </div>
    </>
  );
}

export default App;

