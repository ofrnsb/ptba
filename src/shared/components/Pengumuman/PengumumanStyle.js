import styled from 'styled-components';

export const ContentWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 75%;

  .profileSlider {
    background-color: blue;
    width: 497px;
    height: 621px;

    border-radius: 20px;
    overflow-x: hidden;
    overflow-y: scroll;

    transform: scale(0.8);

    h1 {
      font-size: 120px;
      text-align: center;
      font-weight: bolder;
      line-height: 180%;
    }
  }

  .pengumanSlider {
    display: flex;
    flex-direction: column;
    gap: 30px;

    float: right;

    transform: scale(0.7);

    h3 {
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 100%;
      text-transform: uppercase;
      color: #ffffff;
    }

    &__content {
      display: flex;
      gap: 20px;

      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #ffffff;

      div {
        .date {
          display: flex;
          img {
            margin: 0 11px 13px 0px;
          }
        }
      }
    }

    button {
      width: fit-content;
      height: 56px;
      padding: 6px 13px;

      background-color: #364384;
      border: none;

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
