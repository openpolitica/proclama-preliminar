import styled from 'styled-components';
import ArrowIcon from 'public/images/icons/arrow-button.svg';

export const DownloadButton = styled('a')`
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 8px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-size: 1.125rem;
  line-height: 1.625rem;
  padding: 0.75rem 1.25rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  div > svg > path {
    fill: #ffffff;
  }
`;

export const Icon = styled.div`
  align-items: center;
  width: 0.875rem;
`;

export const ArrowRight = styled(ArrowIcon)`
  height: 0.875rem;
  width: 0.875rem;
`;
export const Text = styled('span')`
  padding-left: 0.5rem;
`;
