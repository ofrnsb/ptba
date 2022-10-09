import { useCallback, useEffect, useRef, useState } from 'react';

export const useGetWidth = () => {
  const itemSlider = useRef();
  const sliderWrapper = useRef();
  return {
    itemSlider,
    sliderWrapper,
  };
};

export const useResize = (myRef) => {
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    setWidth(657);
  }, [myRef]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { width };
};
