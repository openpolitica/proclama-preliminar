import styled from 'styled-components';

const statusColor = {
  null: {
    color: 'rgba(0, 0, 0, 0.92)',
    bg: 'rgba(0, 0, 0, 0.08)',
    border: 'transparent',
    eye: 'rgba(0, 0, 0, 0.36)',
    eyeNegative: 'rgba(0, 0, 0, 0.24);',
  },
  moderate: {
    color: '#5F370E',
    bg: '#F6E05E',
    border: '#ECC94B',
    eye: '#ECC94B',
    eyeNegative: '#D69E2E',
  },
  high: {
    color: '#652B19',
    bg: '#F6AD55',
    border: '#ED8936',
    eye: '#DD6B20',
    eyeNegative: '#DD6B20',
  },
  extreme: {
    color: '#63171B',
    bg: '#F56565',
    border: '#F56565',
    eye: '#E53E3E',
    eyeNegative: '#9B2C2C',
  },
};

const Message = styled('div')`
  align-items: center;
  background-color: ${({ status }) =>
    status ? statusColor[status].bg : statusColor['null'].bg};
  border-radius: 0.25rem;
  color: ${({ status }) =>
    status ? statusColor[status].color : statusColor['null'].color};
  display: flex;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  justify-content: center;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
  min-width: 9.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;

  div > svg > path {
    fill: ${({ status }) =>
      status
        ? statusColor[status].eyeNegative
        : statusColor['null'].eyeNegative};
  }
`;

const Text = styled('span')`
  margin-top: 0;
`;

export { Message, statusColor, Text };
