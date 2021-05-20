import styled from 'styled-components';

export const Container = styled('div')``;

export const Header = styled('h1')`
  // color: ${({ theme }) => theme.colors.primary};
  color: #4e4a49;
  font-size: 1.375rem;
  text-align: center;
  font-weight: bold;
  line-height: 2rem;
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
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-align: center;
`;

export const SignatureSection = styled('div')`
  align-items: center;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.75rem 0;
`;

export const SignatureTitle = styled('p')`
  color: #808080;
  font-size: 1rem;
  line-height: 1.4375rem;
  margin: 0;
`;

export const Text = styled('p')`
  border-bottom: 1px solid #d9d9d9;
  color: #292929;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.625rem;
  margin: 0;
  padding: 2rem 3.75rem;
`;

export const TextLink = styled('a')`
  color: #292929;
`;

export const DownloadContent = styled('div')`
  align-items: center;
  color: #292929;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  justify-content: space-evenly;
  line-height: 1.625rem;
  padding-top: 2rem;
  width: 19.375rem;
`;

export const OrganizersSection = styled('div')`
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
