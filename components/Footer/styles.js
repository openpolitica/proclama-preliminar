import styled from 'styled-components';
import OpenLogo from 'public/images/logos/open-politica.svg';
import BrotLogoBase from 'public/images/logos/pan-para-el-mundo.svg';
import SeparatorBase from 'public/images/icons/separator.svg';

export const Footer = styled('footer')`
  align-items: center;
  background: transparent;
  color: rgba(0, 0, 0, 0.48);
  display: flex;
  font-family: Inter;
  font-size: 1rem;
  justify-content: center;
  line-height: 1.5rem;
  padding: 3.75rem 0;
  text-align: center;
  @media (max-width: 37.5rem) {
    padding: 2.75rem 0;
    flex-direction: column;
  }
`;

export const Container = styled('div')`
  align-items: center;
  display: flex;
  margin: 0 2rem;
  @media (max-width: 37.5rem) {
    padding: 1rem 0;
  }
`;

export const TextLink = styled('a')`
  color: #e5e5e5;
  height: 28px;
  margin-left: 0.5rem;
`;

export const OPLogo = styled(OpenLogo)`
  height: 28px;
  width: 132px;
`;

export const BrotLogo = styled(BrotLogoBase)`
  height: 32px;
  width: 62px;
`;

export const Separator = styled(SeparatorBase)`
  @media (max-width: 37.5rem) {
    display: none;
  }
`;
