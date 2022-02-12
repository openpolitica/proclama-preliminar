import styled from 'styled-components';
import ArrowIcon from 'public/images/icons/arrow-button.svg';

export const NavButton = styled.button`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  height: 4.25rem;
  width: 4.25rem;
  &:hover {
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

export const NavIcon = styled.div`
  align-items: center;
  flex: 1;
`;

export const ArrowRight = styled(ArrowIcon)`
  height: 1rem;
  width: 1rem;
`;
