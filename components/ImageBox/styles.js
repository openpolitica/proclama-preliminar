import styled from 'styled-components';
import LinkWithFallback from 'components/LinkWithFallback';

export const ImageBox = styled(LinkWithFallback)`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  padding: 0.5rem 0;
  @media (max-width: 37.5rem) {
    flex-direction: column;
    margin-bottom: ${props => (props.header ? 0 : '1rem')};
  }
`;
