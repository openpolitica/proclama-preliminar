import styled from 'styled-components';
import { EventList } from 'components/Home/styles';
import NavButton from 'components/NavButton';
import MainContent from 'components/MainContent';

export const Content = styled(MainContent)`
  padding-bottom: 2.5rem;
`;

export const TitleBox = styled('div')`
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const TitleContent = styled('div')`
  flex-grow: 1;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const HeaderTitle = styled('div')`
  color: rgba(0, 0, 0, 0.8);
  font-family: Neco;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: normal;
  line-height: 1.75rem;
`;
export const Title = styled('div')`
  color: rgba(0, 0, 0, 0.8);
  font-family: Neco;
  font-size: 2rem;
  font-style: normal;
  font-weight: bold;
  line-height: 2.5rem;
`;

export const IndicatorList = styled(EventList)`
  margin-bottom: 1rem;
`;

export const PrevButton = styled(NavButton)`
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export const NextButton = NavButton;

export const Counter = styled('p')`
  color: rgba(0, 0, 0, 0.8);
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  line-height: 1.5rem;
  margin-bottom: 1rem;
`;
