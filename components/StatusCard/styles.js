import styled from 'styled-components';
import { statusColor } from 'components/Alert/styles';

export const Card = styled('div')`
  background: #ffffff;
  border: ${({ status }) => (status === 'extreme' ? '2px' : '1px')} solid
    ${({ status }) =>
      status ? statusColor[status].border : statusColor['null'].border};
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  overflow: auto;
  padding: 1.5rem;
`;
