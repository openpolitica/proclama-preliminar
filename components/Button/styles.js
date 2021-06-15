import styled from 'styled-components';

const backgroundColorPriority = {
  primary: '#292929',
  secondary: 'transparent',
  disabled: '#444444',
};

const textColorPriority = {
  primary: '#e5e5e5',
  secondary: '#292929',
  disabled: 'white',
};

export const Button = styled('button')`
  background: ${props =>
    props.disabled
      ? backgroundColorPriority['disabled']
      : backgroundColorPriority[props.level || 'primary']};
  border: 1px solid #292929;
  color: ${props =>
    props.disabled
      ? textColorPriority['disabled']
      : textColorPriority[props.level || 'primary']};
  cursor: ${props =>
    props.disabled ? (props.isLoading ? 'wait' : 'auto') : 'pointer'};
  font-family: 'Neco', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 2rem;

  &:active {
    background: ${props => (props.primary ? '#444444' : '#aaaaaa')};
  }
`;
