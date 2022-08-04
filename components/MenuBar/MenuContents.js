import LinkWithFallback from 'components/LinkWithFallback';
import * as Styled from './styles.js';

export default function MenuContents({ isMobile, props }) {
  const LinkItems = [
    { name: '¿Quiénes somos?', href: '/quienes-somos' },
    { name: 'Nuestros reportes', href: '/reportes' },
  ];
  return (
    <Styled.Container isMobile={isMobile} {...props}>
      {LinkItems.map(({ name, href }) => {
        return (
          <Styled.Item isMobile={isMobile} key={name}>
            <LinkWithFallback to={href} target="_self">
              {name}
            </LinkWithFallback>
          </Styled.Item>
        );
      })}
    </Styled.Container>
  );
}
