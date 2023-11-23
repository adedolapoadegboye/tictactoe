import React, { useState } from "react";


const Box = () => {
    const [value, setValue] = useState(null)

    const handleClick = () => {
        return (
            setValue('X')
        )
    }
    return (
        <button onClick={handleClick} className="border-2 border-pink-400 w-100 w-20">{value}</button>
    )
}

const Gameplay = () => {
    
  return (
    <div>
    <div className="text-center my-10">
        <h1>TicTacToe Game by <span className="text-blue-600">Ade</span></h1>
    </div>
      <div class="max-w-[200px] lg:max-w-[250px] h-40 lg:h-60 grid grid-rows-3 grid-flow-col gap-1 gap-x-0 justify-around justify-items-center text-center py-0 mx-auto my-0">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
};

export default Gameplay;
