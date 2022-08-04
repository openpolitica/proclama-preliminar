import MenuContents from './MenuContents';
import { Fragment } from 'react';
import * as Styled from './styles';
import MobileButton from './MobileButton';

export default function MenuBar({ children, isOpenedMobile, onClickMobile }) {
  return (
    <Fragment>
      <Styled.DesktopBar>
        <MenuContents />
      </Styled.DesktopBar>
      {children}
      <Styled.MobileBar>
        <MobileButton isOpened={isOpenedMobile} onClick={onClickMobile} />
      </Styled.MobileBar>
    </Fragment>
  );
}
