import { useState } from 'react';

export const useChangeBackground = () => {
  const [backGround, setbackGround] = useState(0);

  const getLeft = () => {
    backGround > 0
      ? setbackGround((p) => p - 1)
      : setbackGround((p) => (p = 2));
  };
  const getRight = () => {
    backGround === 2
      ? setbackGround((p) => (p = 0))
      : setbackGround((p) => p + 1);
  };

  return {
    getLeft,
    getRight,
    backGround,
  };
};
