import styled from 'styled-components';
import Masonry from 'react-masonry-css';

export const Container = styled('div')`
  @media (max-width: 58.75rem) {
    padding: 0 1.5rem;
  }
`;

export const Header = styled('h1')`
  color: #4e4a49;
  font-size: 1.375rem;
  font-weight: bold;
  line-height: 2rem;
  text-align: center;
`;

export const Main = styled('main')`
  margin: auto;
  max-width: 58.75rem;
  padding: 3.875rem 0 6.25rem;
`;

export const Title = styled('h1')`
  color: #4e4a49;
  font-size: 2rem;
  font-weight: normal;
  line-height: 2.5rem;
  text-align: center;
`;

export const Emphasis = styled('span')`
  font-weight: bold;
`;

export const Subtitle = styled('p')`
  color: #808080;
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin: 0;
  margin-bottom: 3.875rem;
  margin-top: 24px;
  text-align: center;
`;

export const Signatures = styled('div')`
  background: #f2f2f2;
  padding: 3.75rem 0;
  text-align: center;
`;

export const SignatureContainer = styled('div')`
  margin: 0 auto;
  max-width: 940px;
`;

export const SignatureTitle = styled('p')`
  color: #808080;
  font-size: 1rem;
  line-height: 1.4375rem;
  margin: 0;
  text-align: center;
`;

export const CountText = styled('p')`
  border-bottom: 1px solid #d9d9d9;
  color: #4e4a49;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 3.625rem;
  margin: 0;
  padding: 0 4.9375rem 2rem;
`;

export const Text = styled('p')`
  border-bottom: 1px solid #d9d9d9;
  color: #292929;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.625rem;
  margin: 0;
  padding: 2rem 2.5rem;
  text-align: center;
`;

export const TextLink = styled('a')`
  color: #292929;
`;

export const Download = styled('div')`
  align-items: center;
  color: #292929;
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  justify-content: center;
  line-height: 1.625rem;
  margin: 0 auto;
  padding-top: 2rem;
`;

export const ImageDownload = styled('div')`
  padding-right: 1rem;
`;

export const Organizers = styled('div')`
  color: #808080;
  font-size: 1rem;
  line-height: 1.4375rem;
  margin: auto;
  max-width: 31.25rem;
  padding: 6.25rem 0;
  text-align: center;
`;

export const Boxlogo = styled('div')`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const LogoText = styled('p')`
  color: #656565;
  font-size: 1.75rem;
  line-height: 1.625rem;
  margin: 0;
`;
export const List = styled(Masonry)`
  display: flex;
  margin: -1.25rem 0 0 -1.25rem;
  width: calc(100% + 1.25rem);
`;
