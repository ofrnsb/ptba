import styled from 'styled-components';

export const Icon = styled.svg`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: url(${(props) => props.background}) center no-repeat;
  background-size: contain;

  &:hover {
    cursor: pointer;
    opacity: 2;
  }
`;
