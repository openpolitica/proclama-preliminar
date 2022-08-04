import styled from 'styled-components';
import {
  OrganizersTitle as BaseSubtitle,
  Organizers as BaseOrganizers,
} from 'components/Home/styles';

export const Container = styled('div')`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.5rem;
  line-height: 2.125rem;
  margin-top: 1rem;
`;

export const Footnote = styled('p')`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

export const Organizers = styled(BaseOrganizers)`
  padding-bottom: 0;
  padding-top: 2rem;
`;

export const OrganizersTitle = styled(BaseSubtitle)`
  margin-top: 0;
  text-align: left;
`;
