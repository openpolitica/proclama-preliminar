import styled from 'styled-components';
import Masonry from 'react-masonry-css';

export const Title = styled('h1')`
  color: rgba(0, 0, 0, 0.92);
  font-size: 1.875rem;
  font-weight: normal;
  line-height: 2.5rem;
  margin: 0;
  text-align: center;
  @media (max-width: 58.75rem) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const Emphasis = styled('span')`
  font-weight: bold;
`;

export const Subtitle = styled('p')`
  color: #808080;
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin: 0;
  margin-top: 0.5rem;
  text-align: center;
  @media (max-width: 58.75rem) {
    margin-top: 1.125rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }
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
  max-width: 62.5rem;
  padding: 2.5rem 0;
  text-align: center;
  @media (max-width: 37.5rem) {
    padding-bottom: 1rem;
  }
`;

export const Boxlogo = styled('div')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1.5rem;
  @media (max-width: 37.5rem) {
    flex-direction: column;
    margin-top: 2.5rem;
  }
`;

export const LogoText = styled('p')`
  color: #656565;
  font-size: 1.75rem;
  line-height: 1.625rem;
  margin: 0;
  padding: 1rem 0;
`;

export const List = styled(Masonry)`
  display: flex;
  margin: -1.25rem 0 0 -1.25rem;
  width: calc(100% + 1.25rem);
`;

export const EventTitle = styled(Title)`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2.25rem;
  margin-bottom: 1.5rem;
  margin-top: 4.25rem;
  @media (max-width: 58.75rem) {
    margin-top: 3.75rem;
  }
`;
export const EventSubtitle = styled(Subtitle)`
  font-size: 1rem;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
`;
export const EventList = styled('div')`
  margin-bottom: 1.5rem;
  div + div {
    margin-top: 1.5rem;
  }
  @media (max-width: 58.75rem) {
    margin-bottom: 3.75rem;
  }
`;
export const AgreementTitle = styled(Title)`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
`;
