import styled from 'styled-components';

export const Button = styled('button')`
  background: ${props => (props.primary ? '#292929' : 'transparent')};
  border: 1px solid #292929;
  color: ${props => (props.primary ? '#e5e5e5' : '#292929')};
  font-family: 'Neco', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 2rem;

  &:active {
    background: ${props => (props.primary ? '#444444' : '#aaaaaa')};
  }
`;
