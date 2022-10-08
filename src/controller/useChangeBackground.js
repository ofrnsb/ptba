import { useState } from 'react';

export const useChangeBackground = () => {
  const [backGround, setbackGround] = useState(0);

  const getLeft = () => {
    backGround > 0 && setbackGround((p) => p - 1);
    console.log(backGround);
  };
  const getRight = () => {
    setbackGround((p) => p + 1);
    console.log(backGround);
  };

  return {
    getLeft,
    getRight,
    backGround,
  };
};
