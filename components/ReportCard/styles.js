import styled from 'styled-components';
import ImageBox from 'components/ImageBox';
import {
  Card as BaseCard,
  Title as BaseTitle,
  SeeMore as BaseSeeMore,
} from 'components/AgreementCard/styles';

export const Card = styled(BaseCard)`
  display: block;
  max-width: 13.75rem;
  padding: 2rem 1.5rem;
  position: static;

  @media (max-width: 37.5rem) {
    max-width: unset;
  }
`;

export const Subtitle = styled('h3')`
  color: rgba(0, 0, 0, 0.64);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const Title = styled(BaseTitle)`
  line-height: 1.5rem;
  margin: 0;
  padding-bottom: 1rem;
`;

export const SeeMore = styled(BaseSeeMore)`
  font-size: 1rem;
  font-weight: 400;
  position: static;
`;

export const ImageContainer = styled(ImageBox)`
  margin-left: 0;
  margin-right: 0;
  padding: 1rem 1.5rem;
`;
