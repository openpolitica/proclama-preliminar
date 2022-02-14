import styled from 'styled-components';
import AlertBase from 'components/Alert';
import ArrowRightIcon from 'public/images/icons/arrow-right.svg';
import Link from 'components/Link';
import HeaderCard from 'components/HeaderCard';

const Label = styled('div')`
  color: rgba(0, 0, 0, 0.8);
  font-family: Inter;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;
`;

const HeaderTitle = styled('h3')`
  font-family: Inter;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.75rem;
  margin: 0;
  margin-top: 0.5rem;
`;

const Description = styled('p')`
  color: rgba(0, 0, 0, 0.64);
  font-family: Inter;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
  ${props => props.underline && 'border-bottom: 1px solid rgba(0, 0, 0, 0.08);'}
  padding-bottom: ${props => (props.underline ? 1 : 0)}rem;
`;

const Source = styled(Link)`
  color: #4d4d4d;
  display: flex;
  font-family: Inter;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 1rem;
  ${props => props.to && 'text-decoration: underline;'}

  svg {
    margin-right: 0.5rem;
  }
`;

const Alert = styled(AlertBase)`
  margin: 0;
`;

const AlertBox = styled('div')`
  align-items: flex-start;
  display: flex;
`;

const ArrowRight = styled(ArrowRightIcon)`
  height: 1rem;
  width: 1rem;
`;

const Header = styled(HeaderCard)`
  align-items: flex-start;
  display: block;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: ${props => (props.underline ? 1 : 0)}rem;
`;

const SourceLabel = styled('strong')`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  &::after {
    content: ':';
  }
`;

const Icon = styled('div')`
  width: 1rem;
`;

const EventTitle = styled('p')`
  color: rgba(0, 0, 0, 0.8);
  font-family: Inter;
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 0.5rem;
  margin-top: 0;
`;

export {
  Icon,
  EventTitle,
  Alert,
  AlertBox,
  Label,
  Header,
  HeaderTitle,
  Description,
  Source,
  SourceLabel,
  ArrowRight,
};
