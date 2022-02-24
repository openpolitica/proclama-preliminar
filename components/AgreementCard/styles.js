import styled from 'styled-components';
import CounterAlert from 'components/CounterAlert';

const Card = styled('div')`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  margin: 1.25rem 0 0 1.25rem;
  overflow: hidden;
  padding: 1rem 1.5rem 3rem;
  position: relative;

  @media (min-width: 37.5rem) {
    max-height: unset;
    ::after {
      background: #ffffff;
      bottom: 0;
      content: '';
      display: none;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`;
const Number = styled('span')`
  color: rgba(0, 0, 0, 0.64);
  font-size: 1.5rem;
  font-weight: bold;
`;
const Title = styled('h2')`
  color: rgba(0, 0, 0, 0.92);
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
`;

const SeeMore = styled('button')`
  background-color: transparent;
  border: none;
  bottom: 1rem;
  color: #808080;
  cursor: pointer;
  font-family: inherit;
  font-family: Inter;
  font-size: 1rem;
  padding: 0;
  position: absolute;
  text-decoration: underline;
  z-index: 1;
`;

const StyledCounterAlert = styled(CounterAlert)`
  padding: 0.5rem 0;
`;

const Counterbox = styled('div')`
  ${StyledCounterAlert} + ${StyledCounterAlert} {
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
  }
`;

export { Card, Counterbox, Title, Number, SeeMore, StyledCounterAlert };
