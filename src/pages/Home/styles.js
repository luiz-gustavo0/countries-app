import styled from 'styled-components';

export const Container = styled.div`
  padding: 6rem 0;
  @media (max-width: 600px) {
    padding: 3rem 0;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;

  select {
    padding: 0.8rem 1.5rem;
    font-family: 'Nunito', sans-serif;
    border: 1px solid ${(props) => props.theme.elementColor};
    background: ${(props) => props.theme.elementColor};
    color: ${(props) => props.theme.textColor};
    border-radius: 3px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const Search = styled.div`
  width: 100%;
  max-width: 40rem;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 0.8rem 1rem;
    font-family: 'Nunito', sans-serif;
    border: 1px solid ${(props) => props.theme.elementColor};
    background: ${(props) => props.theme.elementColor};
    border-radius: 0 3px 3px 0;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    color: ${(props) => props.theme.textColor};

    &::placeholder {
      color: ${(props) => props.theme.inputColor};
      font-size: 1.4rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    padding: 0.9rem 1rem 0.9rem 1.5rem;

    border: 1px solid ${(props) => props.theme.elementColor};
    background: ${(props) => props.theme.elementColor};
    border-radius: 3px 0 0 3px;
    cursor: pointer;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

    svg {
      width: 20px;
      height: 20px;
      fill: ${(props) => props.theme.inputColor};
    }
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const CardContainer = styled.div`
  padding: 6rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 30rem));
    justify-content: center;
  }
`;
