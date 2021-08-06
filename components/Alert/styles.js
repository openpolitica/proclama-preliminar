import styled from 'styled-components';

const statusColor = {
  risk: { color: '#B68811', bg: '#FEEDC3', border: '#F6E05E' },
  no: { color: '#C00C0C', bg: '#FCCFCF', border: '#FC8181' },
};

const Message = styled('div')`
  background-color: ${({ status }) => statusColor[status].bg};
  border-radius: 0.25rem;
  color: ${({ status }) => statusColor[status].color};
  font-family: Inter;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
  min-width: 9.75rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  text-align: center;
`;

export { Message, statusColor };
