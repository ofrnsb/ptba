import styled from 'styled-components';

export const Nav_Container = styled.nav`
  position: absolute;
  top: 0;
  width: clamp(450px, 100%, 1980px);
  min-height: fit-content;
  display: flex;
  justify-content: space-around;

  section:nth-child(1) {
    padding-top: 20px;
    padding-top: auto;
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
        font-weight: 700;
        font-size: 20.0682px;
        line-height: 30px;
        color: #828282;
      }
    }
  }
  section:nth-child(2) {
    padding-top: 20px;
    display: flex;
    flex-direction: column;

    width: fit-content;
    height: fit-content;
    justify-content: space-between;

    div:nth-child(1) {
      align-self: flex-end;
      ul {
        display: flex;
        flex-direction: row;
        gap: 36.37px;
        li {
          min-width: fit-content;
          font-style: italic;
          font-weight: 400;
          font-size: 20.0682px;
          line-height: 30px;
          text-transform: uppercase;

          color: #ffffff;
        }
      }
    }
    div:nth-child(2) {
      ul {
        display: flex;
        flex-direction: row;
        gap: 32px;
        li {
          min-width: fit-content;
          font-style: normal;
          font-weight: 400;
          font-size: 21px;
          line-height: 32px;
          text-transform: uppercase;

          color: #ffffff;
        }
      }
    }
  }
`;
