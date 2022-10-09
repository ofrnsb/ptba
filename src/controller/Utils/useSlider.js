import { useState } from 'react';

export const UseScrollSlider = (width, sliderWrapper) => {
  const [sliderIndex, setsliderIndex] = useState(1);
  const getScrollSlider = () =>
    sliderWrapper.current.scrollLeft < width
      ? setsliderIndex(1)
      : width < sliderWrapper.current.scrollLeft &&
        sliderWrapper.current.scrollLeft < width * 2
      ? setsliderIndex(2)
      : width * 2 < sliderWrapper.current.scrollLeft &&
        sliderWrapper.current.scrollLeft < 1830
      ? setsliderIndex(3)
      : setsliderIndex(4);

  return { sliderIndex, getScrollSlider };
};
