import * as Styled from './styles';

const FooterInfo = () => {
  return (
    <Styled.FooterBox>
      Desarrollado por{' '}
      <Styled.TextLink
        href="https://openpolitica.com/"
        target="_blank"
        rel="noopener noreferrer">
        Open Política
      </Styled.TextLink>
    </Styled.FooterBox>
  );
};

export default FooterInfo;
