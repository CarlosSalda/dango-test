import React, { useContext, useEffect, useState } from 'react';
import '../styles/inputTitle.css'
import {IndexContext, CurrentDataContext} from '../App.tsx';


interface TextInputProps {
  value: string;
  updateData: (data: MyData[]) => void;
}

interface MyData {
  name: string;
  description: string;
  index: number;
}




const InputTitle: React.FC<TextInputProps> = () => {
  const index = useContext(IndexContext);
  const data = useContext(CurrentDataContext);
  const [currentData, setCurrentData] = useState<MyData[]>([]);

  useEffect(() => {
    setCurrentData(data);
  }, [data])


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const target = document.getElementById('h2-' + index.toString());
  
    if (target !== null && target !== undefined) {
      target.textContent = value;
  
      const new_list: MyData[] = currentData.map((item) => {
        if (item.index === index) {
          item.name = value;
        }
        return item;
      });

      setCurrentData(new_list);
    } else {
      console.log("Error: HTML element not found");
    }
  };

  return (
    <>
      <div className='centered-div'>
        <input className='title' type="text" placeholder='Click a Title to Change' id='title-change' disabled onChange={handleChange} />
      </div>
    </>
  );
};

export default InputTitle;
