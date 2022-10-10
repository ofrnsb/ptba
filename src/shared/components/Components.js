import styled from 'styled-components';
import Forest from '../assets/Icon/Forest.png';
import backgroundImage from '../assets/Icon/header-background.svg';
import backgroundImage2 from '../assets/Icon/header-background2.svg';
import backgroundImage3 from '../assets/Icon/header-background3.svg';

export const MainContainer = styled.div`
  width: clamp(450px, 100vw, 1980px);
  min-height: ${(props) => props.height || '100vh'};

  background: url(${(props) =>
    props.backgroundtype === 0
      ? backgroundImage
      : props.backgroundtype === 1
      ? backgroundImage2
      : props.backgroundtype === 2
      ? backgroundImage3
      : props.backgroundtype === 'forest'
      ? Forest
      : null});
  background-size: cover;
  background-position: center;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  transition: 0.3s ease-in-out;

  .circleIcon {
    position: absolute;
    z-index: -1;
    left: -5%;
    top: 78%;

    transform: scale(0.7);
  }
`;

export const Icon = styled.svg`
  width: ${(props) => props.size} !important;
  height: ${(props) => props.size} !important;
  background: url(${(props) => props.background}) center no-repeat;
  background-size: contain;

  &:hover {
    cursor: pointer;
    opacity: 2;
  }
`;
