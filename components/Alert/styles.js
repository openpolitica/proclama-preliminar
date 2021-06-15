import styled from 'styled-components';

const statusColor = {
  yes: { color: '#C00C0C', bg: '#FCCFCF' },
  risk: { color: '#B68811', bg: '#FEEDC3' },
  no: { color: '#21AB50', bg: '#D4F7E0' },
};

const Message = styled('div')`
  background-color: ${({ status }) => statusColor[status].bg};
  border-radius: 0.25rem;
  color: ${({ status }) => statusColor[status].color};
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  text-align: center;
`;

export { Message };
