import styled from 'styled-components';
import { EventList } from 'components/Home/styles';

export const TitleBox = styled('div')`
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
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
