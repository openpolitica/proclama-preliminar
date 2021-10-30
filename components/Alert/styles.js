import styled from 'styled-components';

const statusColor = {
  moderate: { color: '#B7791F', bg: '#FEFCBF', border: '#F6E05E' },
  high: { color: '#C53030', bg: '#FED7D7', border: '#FC8181' },
  extreme: { color: '#822727', bg: '#FC8181', border: '#FC8181' },
};

const Message = styled('div')`
  background-color: ${({ status }) => statusColor[status].bg};
  border-radius: 0.25rem;
  color: ${({ status }) => statusColor[status].color};
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
  min-width: 9.75rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  text-align: center;
`;

export { Message, statusColor };
