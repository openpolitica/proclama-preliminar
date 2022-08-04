import styled from 'styled-components';
import ImageBox from 'components/ImageBox';

export const Header = styled('header')`
  background-color: rgba(255, 255, 255, 0.6);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  color: #4e4a49;
`;
export const Container = styled('div')`
  align-items: center;
  display: flex;
  font-family: 'Inter';
  font-size: 0.875rem;
  justify-content: space-between;
  line-height: 1rem;
  margin: auto;
  max-width: 58.75rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  text-align: center;
  @media (max-width: 37.5rem) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

export const ImageContainer = styled(ImageBox)`
  margin-left: 0;
  margin-right: 0;
`;

export const MenuMobile = styled('div')`
  background: #fafafa;
  display: ${props => (props.isVisible ? 'fixed' : 'none')};
  font-family: 'Inter';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  height: calc(100vh - 14.5rem);
  line-height: 1.75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1.75rem;
`;
