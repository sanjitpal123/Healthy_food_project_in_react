import React, { useState } from 'react';



function ItemBox() {
  const foodItem = ["Salad", "roti", "rice", "milk"];
  const [clickedItem, setClickedItem] = useState(null);

  function handleClick(item) {
    console.log(item);
    setClickedItem(item);
  }

  return (
    <div className="w-[300px] bg-pink-400 m-[auto]">
      <ul className='mt-[30px] text-2xl'>
        {foodItem.map((item, index) => (
          <li key={index} className='border-2 py-[5px] px-[5px] text-white' onClick={() => handleClick(item)}>
            {item}
          </li>
        ))}
      </ul>
      <div className='mt-4 text-white'>{clickedItem && `Clicked: ${clickedItem}`}</div>
    </div>
  );
}

export default ItemBox;
