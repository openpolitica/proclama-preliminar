import styled from 'styled-components';
import { statusColor } from 'components/Alert/styles';

export const Container = styled('div')`
  align-items: center;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  font-family: Inter;
  font-size: 0.875rem;
  justify-content: flex-start;

  div > svg > path {
    fill: ${({ status }) =>
      status ? statusColor[status].eye : statusColor['null'].eye};
  }
`;
