import * as Styled from './styles';
import Link from 'components/LinkWithFallback';
import Image from 'next/image';
import MenuBar from 'components/MenuBar';
import { Fragment } from 'react';
import MenuContents from 'components/MenuBar/MenuContents';

const Header = ({ isMobile, isOpenedMobile, toggleButton }) => {
  return (
    <Fragment>
      <Styled.Header>
        <Styled.Container>
          <Link to="/" target="_self">
            <Styled.ImageContainer header>
              <Image
                src="/images/logos/vigilantes.svg"
                width="208px"
                height="48px"
                quality="100"
                alt="logo de Vigilantes"
              />
            </Styled.ImageContainer>
          </Link>
          <MenuBar
            onClickMobile={toggleButton}
            isOpenedMobile={isOpenedMobile}
          />
        </Styled.Container>
      </Styled.Header>
      <Styled.MenuMobile isVisible={isOpenedMobile && isMobile}>
        <MenuContents isMobile={true} />
      </Styled.MenuMobile>
    </Fragment>
  );
};

export default Header;
