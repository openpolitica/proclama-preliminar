import styled from 'styled-components';

export const Container = styled('ul')`
  align-items: ${props => (props.isMobile ? 'left' : 'center')};
  display: flex;
  flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled('li')`
  padding: ${props => (props.isMobile ? '1rem 0' : '1rem')};
  text-align: 'left';
  > a {
    color: black;
    text-decoration: none;
  }
`;

export const DesktopBar = styled('div')`
  display: block;
  @media (max-width: 37.5rem) {
    display: none;
  }
`;

export const MobileBar = styled('div')`
  display: none;
  @media (max-width: 37.5rem) {
    display: block;
  }
`;

export const MobileButton = styled('button')`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  height: 3rem;
  padding: 0.75rem;
  width: 3rem;
  &:active {
    background: #dddddd;
  }
  &:disabled {
    background: transparent;
    cursor: auto;

    div > svg > path {
      fill: rgba(0, 0, 0, 0.36);
    }
  }
`;

export const MobileIcon = styled.div`
  align-items: center;
  flex: 1;
`;
