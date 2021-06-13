import styled from 'styled-components';

export const Container = styled('div')`
  padding: 0 1.5rem;
  @media (max-width: 40rem) {
    padding: 0;
    height: 100vh;
    display: flex;
    background-color: #f2f2f2;
  }
`;

export const Main = styled('main')`
  background-color: #f2f2f2;
  border-radius: 0.5rem;
  margin: 5rem auto auto;
  max-width: 40rem;
  padding: 1rem 0.5rem 2rem 0.5rem;
  @media (max-width: 40rem) {
    margin: auto;
    border-radius: 0;
    padding: 0 0.1rem 2rem 0.1rem;
  }
`;

export const Title = styled('h1')`
  border-bottom: 1px solid #c4c4c4;
  color: #4e4a49;
  font-size: 1.375rem;
  font-weight: bold;
  line-height: 2rem;
  margin: 0;
  padding-bottom: 1rem;
  padding-top: 1rem;
  text-align: center;
  @media (max-width: 40rem) {
    font-size: 1.25rem;
    border-bottom: 0px;
  }
`;

export const InputContainer = styled('div')`
  padding: 1rem 5rem 0;
  @media (max-width: 40rem) {
    padding: 1rem 0.8rem 0;
  }
`;

export const ButtonBox = styled('div')`
  display: flex;
  justify-content: center;
  padding: 1.75rem 2rem 1.75rem;
  @media (max-width: 40rem) {
    padding: 1.75rem 0.8rem 1.75rem;
    justify-content: center;
    align-items: center;
  }
`;

export const Info = styled('p')`
  font-size: 1rem;
  padding: 0.5rem 2rem 0;
  text-align: center;
  @media (max-width: 40rem) {
    padding: 0 0.8rem 0;
  }
`;

export const Message = styled('p')`
  color: red;
  font-size: 1rem;
  margin-bottom: 0;
  text-align: center;
`;
