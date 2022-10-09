import styled from 'styled-components';
import { MainContainer } from '../Components';

export const Container = styled(MainContainer)`
  background-color: #f8f8f8;
  min-height: fit-content;

  position: relative;
`;

export const ContentWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  width: 85%;

  display: flex;
  align-items: center;
  gap: 3rem;

  position: relative;
  top: 86px;

  .Content {
    display: flex;
    flex: 1;

    &__Left {
      height: 220px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 100%;
        text-transform: uppercase;
        color: #364384;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 26px;
        h3 {
          font-style: normal;
          font-weight: 400;
          font-size: 32px;
          color: #344689;
        }
        ul {
          li {
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 130%;
            color: #1b1b1b;
          }
        }
      }
    }

    &__Center {
      width: 410px;
      display: flex;
      flex: 1 0 0;
    }

    &__Right {
      flex: 1 0 0;
      display: flex;
      flex-direction: column;
      gap: 30px;
      justify-content: center;

      position: relative;
      top: -80px;

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: #5a5a5a;
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
  }

  img {
    position: absolute;

    left: -10%;
    bottom: -16%;
  }
`;
