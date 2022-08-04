import styled from 'styled-components';
import { Content as BaseContent } from 'components/AgreementPage/styles';

export const Content = styled(BaseContent)`
  padding-top: 2.625rem;
`;

export const List = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin: -1.25rem 0 0 -1.25rem;
  width: calc(100% + 1.25rem);

  @media (max-width: 37.5rem) {
    justify-content: center;
  }
`;
