import styled from 'styled-components';
import { Slider } from '../MainContent/MainContentStyle';

export const ContentWrapper = styled.div`
  box-sizing: border-box;
  margin-top: 122px;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 75%;

  gap: 78px;

  .News {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 100%;
      color: #1b1b1b;
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
  }
`;

export const NewsSlider = styled(Slider)`
  overflow-x: scroll;
  gap: 23px;

  .sliderWrapper {
    .sliderContent {
      h3 {
        margin: 11px 0;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #344689;

        display: flex;
        gap: 11px;
      }
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1b1b1b;
      }
    }
  }
`;
