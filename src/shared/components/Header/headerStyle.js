import styled from 'styled-components';

export const HeaderTitleWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 75%;

  .Header-Title {
    width: fit-content;
    display: flex;
    flex-direction: column;

    gap: 3rem;
    div {
      h1 {
        font-style: normal;
        font-weight: 300;
        font-size: 4rem;
        color: #ffffff;
      }
      .devider {
        display: flex;
        gap: 5px;
      }
    }

    p {
      font-style: italic;
      font-weight: 100;
      font-size: 1rem;
      color: #ffffff;
      border: 1px solid white;
      width: fit-content;
      line-height: 10px;
      padding: 0.8rem 1rem;
      border-radius: 20px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const Devider = styled.div`
  width: 30px;
  height: 5px;
  border-radius: 10px;
  background-color: white;
  opacity: 0.3;
  transition: 0.3s ease-in-out;

  :nth-child(${(props) => props.backgroundtype + 1}) {
    opacity: 1;
  }
`;

export const HeaderStockWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding-bottom: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  height: fit-content;

  img {
    right: 0;
    box-sizing: border-box;
    padding: 0;
    width: 461.25px;
    height: 130.5px;
    border-radius: 10px;

    box-shadow: 2px 2px 3px 3px #2b2b2b;
  }
`;
