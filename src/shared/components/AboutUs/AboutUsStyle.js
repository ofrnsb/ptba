import styled from 'styled-components';
import Footer from '../../assets/Icon/Footer.png';

export const ContentWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  flex: 1;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  .AboutUs {
    background-color: green;
    flex: 1 0 0;
    width: 100%;
    padding: 0 12.5%;
    background: #f8f8f8;

    display: flex;

    position: relative;

    &__Content {
      position: relative;

      top: -50px;

      h3 {
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 100%;
        color: #ffffff;

        margin-bottom: 47px;
      }

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 240%;
        color: #000000;
      }

      button {
        width: fit-content;
        height: 56px;

        padding: 6px 13px;

        background-color: #364384;
        border: none;

        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 28px;
        text-align: center;

        color: #ffffff;

        &:hover {
          cursor: pointer;
        }
      }
    }

    img {
      width: 396.62px;
      height: 268px;

      position: relative;
      left: 73px;
      top: -50px;
    }
  }

  .Career {
    flex: 1 0 0;
    width: 100%;
    padding: 70px 12.5%;

    display: flex;
    justify-content: space-between;

    h3 {
      font-style: normal;
      font-weight: 300;
      font-size: 80px;
      line-height: 88px;
      color: #333333;

      span {
        font-weight: 900;
      }
    }

    div {
      p {
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 180%;
        color: black;

        span {
          color: #cd4147;
        }
      }

      button {
        width: 173px;
        margin-top: 35px;
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

  .Footer {
    background-color: yellow;

    width: 100%;

    height: 250px;
    background: #364384;
    background: url(${Footer});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
