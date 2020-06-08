import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;

  position: fixed;
  bottom: 0;
  height: 70px;
  width: 100vw;
  background: #232222;
  display: flex;
  align-items: center;

  span {
    color: #fcf9f9;
    margin-right: 100px;
  }
`;

export const Links = styled.div`
  @media (min-width: 800px) {
    margin: 100px;
    a {
      margin: 5px;
    }
  }
`;
