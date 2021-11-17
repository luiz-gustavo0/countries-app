import styled from 'styled-components';

export const Card = styled.div`
  background: ${(props) => props.theme.elementColor};
  border-radius: 3px;
  overflow: hidden;
  height: 33rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    height: 18rem;
    object-fit: cover;
    cursor: pointer;
  }

  & > div {
    padding: 2rem;

    h4 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 2.4rem;
      font-weight: 300;
      span {
        font-weight: 600;
      }
    }
  }
`;
