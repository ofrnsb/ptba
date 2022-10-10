import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: clamp(450px, 100%, 1980px);
  min-height: fit-content;
  display: flex;
  justify-content: space-around;

  position: fixed;

  z-index: 1000;

  background-color: ${(props) => props.scrollPosition >= 648 && '#C0C0C0'};

  section:nth-child(1) {
    padding-top: 30px;

    div {
      display: flex;
      justify-content: center;
      align-items: baseline;

      gap: 10px;

      img {
      }

      ul {
        display: flex;
        gap: 5px;

        font-style: normal;
        font-size: 1rem;
        line-height: 30px;
        color: #828282;
      }
    }
  }

  section:nth-child(2) {
    padding-top: 20px;
    display: flex;
    flex-direction: column;

    gap: 10px;

    width: fit-content;
    height: fit-content;
    justify-content: space-between;

    div:nth-child(1) {
      align-self: flex-end;
      ul {
        display: flex;
        align-items: center;
        gap: 36.37px;
        li {
          min-width: fit-content;
          font-style: normal;
          font-size: 1rem;
          line-height: 30px;
          text-transform: uppercase;

          color: #ffffff;
        }
        img {
          height: 19px;
        }
      }
    }

    div:nth-child(2) {
      ul {
        display: flex;
        align-items: center;
        gap: 32px;
        li {
          min-width: fit-content;
          font-style: normal;
          font-size: 1rem;
          line-height: 30px;
          text-transform: uppercase;

          color: #ffffff;
        }

        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;
