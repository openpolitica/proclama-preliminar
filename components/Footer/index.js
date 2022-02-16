import * as Styled from './styles';

const Footer = () => {
  return (
    <Styled.Footer>
      Desarrollado por{' '}
      <Styled.TextLink
        href="https://openpolitica.com/"
        target="_blank"
        rel="noopener noreferrer">
        <Styled.OPLogo />
      </Styled.TextLink>
    </Styled.Footer>
  );
};

export default Footer;
