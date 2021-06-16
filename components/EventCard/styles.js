import styled from 'styled-components';
import AlertBase from 'components/Alert';
import ArrowRightIcon from 'public/images/icons/arrow-right.svg';

const Card = styled('div')`
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
`;

const HeaderCard = styled('div')`
  align-items: flex-end;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  font-family: Inter;
  justify-content: space-between;
  padding-bottom: 1rem;
  @media (max-width: 58.75rem) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Date = styled('span')`
  color: #808080;
`;

const Title = styled('h3')`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  margin-top: 0.5rem;
`;

const Description = styled('p')`
  color: #1a1a1a;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const SourceLink = styled('a')`
  align-items: center;
  color: #4d4d4d;
  display: flex;
  text-decoration: underline;

  svg {
    margin-right: 0.5rem;
  }
`;

const Alert = styled(AlertBase)`
  margin: 0;
`;

const ArrowRight = styled(ArrowRightIcon)`
  height: 1rem;
  width: 1rem;
`;

export {
  Card,
  HeaderCard,
  Alert,
  Date,
  Title,
  Description,
  SourceLink,
  ArrowRight,
};
