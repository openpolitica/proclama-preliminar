import * as Styled from './styles';

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Container>
        Con el apoyo de{' '}
        <Styled.TextLink
          href="https://www.brot-fuer-die-welt.de/es/pan-para-el-mundo/"
          target="_blank"
          rel="noopener noreferrer">
          <Styled.BrotLogo />
        </Styled.TextLink>
      </Styled.Container>
      <Styled.Separator />
      <Styled.Container>
        Desarrollado por{' '}
        <Styled.TextLink
          href="https://openpolitica.com/"
          target="_blank"
          rel="noopener noreferrer">
          <Styled.OPLogo />
        </Styled.TextLink>
      </Styled.Container>
    </Styled.Footer>
  );
};

export default Footer;
