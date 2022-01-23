import styled from 'styled-components';

const statusColor = {
  null: {
    color: 'rgba(0, 0, 0, 0.92)',
    bg: 'rgba(0, 0, 0, 0.08)',
    border: 'transparent',
  },
  moderate: { color: '#5F370E', bg: '#F6E05E', border: '#ECC94B' },
  high: { color: '#652B19', bg: '#F6AD55', border: '#ED8936' },
  extreme: { color: '#63171B', bg: '#F56565', border: '#F56565' },
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
