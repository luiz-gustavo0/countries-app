import styled from 'styled-components';

export const Container = styled.div`
  padding: 6rem 0;

  button {
    margin-bottom: 6rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.5rem 2rem;
    border: 1px solid ${(props) => props.theme.elementColor};
    background: ${(props) => props.theme.elementColor};
    border-radius: 3px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    font-size: 1.4rem;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    padding: 4rem 0;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 8rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-gap: 4rem;
  }
`;

export const WrapperImg = styled.div`
  grid-column: 1 / 2;

  @media (max-width: 960px) {
    grid-column: 1 / -1;
  }
`;

export const InfoCountry = styled.div`
  grid-column: 2 / -1;
  h2 {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 960px) {
    grid-column: 1 / -1;
  }
`;

export const InfoCountryText = styled.div`
  display: flex;
  gap: 6rem;
  margin-bottom: 3rem;

  p {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const InfoCountryBorders = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  h6 {
    font-size: 1.6rem;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    li {
      padding: 0 1rem;
      border: 1px solid ${(props) => props.theme.elementColor};
      background: ${(props) => props.theme.elementColor};
      border-radius: 3px;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
