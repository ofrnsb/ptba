import styled, { keyframes } from 'styled-components';

const RunningTextAnimation = keyframes`
from{
  transform: translateX(1300px);
} 
to{
  transform: translateX(-1300px);
}
`;

export const ContentWrapper = styled.section`
  box-sizing: border-box;
  padding-top: 71px;
  margin: 0;
  gap: 80px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  overflow-x: hidden;

  width: 75%;

  .Running_Text {
    min-width: fit-content;
    font-style: normal;
    font-weight: 400;
    font-size: 2.2rem;
    line-height: 46px;
    text-transform: uppercase;

    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;

    transform: translateX(1980px);
    animation: ${RunningTextAnimation} 8s ease-in infinite;
  }
`;

export const Slider = styled.ul`
  width: 100%;
  display: flex;
  position: relative;
  .sliderLeft {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
  }

  .sliderRight {
    width: 70%;
    display: flex;

    gap: 18px;
    overflow-x: scroll;
    border-bottom: 1px solid #364384;

    .sliderWrapper {
      min-width: 657px;
      padding: 45px 22px;

      display: flex;
      align-items: center;
      gap: 2rem;

      background-color: #f4f4f4;

      .sliderContent {
        height: 100%;
        width: 50%;
        padding: 5px 0;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #364384;
        }

        p:nth-child(1) {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #717067;
          text-align: justify;
        }
        button {
          width: fit-content;
          border: none;
          border-bottom: 1px solid #cd4147;

          font-family: 'Poppins';
          font-style: italic;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #cd4147;

          transition: 0.5s ease-in-out;
          &:hover {
            cursor: pointer;
            transform: translateX(10px);
          }
        }
      }
    }
  }

  .Hamburger {
    position: absolute;
    bottom: 0;
    width: 70%;
    height: 1px;
    background-color: green;
    display: flex;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  width: 354px;
  height: 241px;
  background: url(${(props) => props.background}) no-repeat;
  background-size: cover;
`;

export const Hamburger = styled.div`
  width: 25%;
  height: 2px;
  background-color: #4e61bf;
  transition: 0.5s ease-out;
  &:nth-child(${(props) => props.imageindex}) {
    background-color: #364384;
    transform: scaleY(2);
    border-radius: 500px;
  }
`;

export const PBisnis = styled.div`
  width: 100%;
  flex: 1;
  height: 100px;

  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 100%;
    text-transform: uppercase;
    color: #000000;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: #5a5a5a;
    margin: 22px 0 43px 0;
  }

  .detail {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    &__icon {
      flex: 1;
    }

    &__content {
      /* width: 50%; */
      height: 420px;
      text-align: justify;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex-wrap: wrap;

      h4:nth-child(1) {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 130%;
        color: #000000;

        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 24px;
      }
      h4:nth-child(2) {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 130%;
        color: #344689;

        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 170%;
        color: #5a5a5a;
      }
      button {
        width: fit-content;
        height: 56px;
        padding: 6px 13px;

        background-color: #364384;

        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        text-align: center;
        color: #ffffff;

        &:hover {
          cursor: pointer;
        }
      }
      .benefisiasi {
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 130%;
        color: #000000;

        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
