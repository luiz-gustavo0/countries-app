import styled from 'styled-components';

export const Container = styled.header`
  height: 6rem;
  background: ${(props) => props.theme.elementColor};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 2.4rem;
  }

  @media (max-width: 600px) {
    span {
      font-size: 1.8rem;
    }
  }
`;

export const ContainerButton = styled.div`
  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.4rem;
    background: none;
    border: none;
    cursor: pointer;

    img {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (max-width: 600px) {
    button {
      img {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }
`;
