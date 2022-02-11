import styled from 'styled-components';
import AlertBase from 'components/Alert';
import ArrowRightIcon from 'public/images/icons/arrow-right.svg';

const Date = styled('span')`
  color: #808080;
`;

const HeaderTitle = styled('h3')`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  margin-top: 0.5rem;
`;

const Title = styled('h3')`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 0.25rem;
  margin-top: 1.5rem;
`;

const Description = styled('p')`
  color: rgba(0, 0, 0, 0.48);
  font-family: Inter;
  font-size: 1rem;
  margin: 0;
  margin-bottom: 1rem;
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

export { Alert, Date, HeaderTitle, Title, Description, SourceLink, ArrowRight };
