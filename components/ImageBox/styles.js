import styled from 'styled-components';
import Link from 'components/Link';

export const ImageBox = styled(Link)`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  padding: 0.5rem 0;
  @media (max-width: 37.5rem) {
    flex-direction: column;
    margin-bottom: ${props => (props.header ? 0 : '1rem')};
  }
`;
