import styled from 'styled-components';
import backgroundImage from '../assets/Icon/header-background.svg';
import backgroundImage2 from '../assets/Icon/header-background2.svg';

export const MainContainer = styled.div`
  width: clamp(450px, 100%, 1980px);
  min-height: 100vh;

  background-image: ${(props) =>
    props.backGround == 0
      ? `url(${backgroundImage})`
      : `url(${backgroundImage2})`};

  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 1s ease-in-out;
`;

export const HeaderTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: lighter;
  font-size: 1.5rem;
  line-height: 88px;
  color: #ffffff;

  width: 75%;

  .Header-Title {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 17px;
    p {
      border: 1px solid white;
      width: fit-content;
      line-height: 10px;
      padding: 20px;
      border-radius: 20px;
    }
  }
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${(props) => props.background});
  background-position: center;

  &:hover {
    cursor: pointer;
  }
`;
