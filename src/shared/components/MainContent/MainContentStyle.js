import styled from 'styled-components';

export const ContentWrapper = styled.section`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  width: 75%;
`;

export const LeftSlider = styled.ul`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 18px;

  li {
    display: flex;
    align-items: center;
    gap: 2rem;

    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 130%;
    color: #364384;
  }
`;

export const RightSlider = styled.div`
  width: 70%;

  margin: 0;
  height: fit-content;

  overflow-x: scroll;
  overflow-y: hidden;

  display: flex;
  align-items: center;
  gap: 10px;

  .sliderWrapper {
    display: flex;
    gap: 30px;
    min-width: 600px;

    padding: 45px 37px;
    background: #f4f4f4;

    img {
      width: 354px;
      height: 241px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;
