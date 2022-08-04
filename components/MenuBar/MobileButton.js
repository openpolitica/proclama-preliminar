import * as Styled from './styles';
import OpenedIcon from 'public/images/icons/button-mobile-opened.svg';
import ClosedIcon from 'public/images/icons/button-mobile-closed.svg';

export default function MobileButton({ isOpened, ...props }) {
  return (
    <Styled.MobileButton {...props}>
      <Styled.MobileIcon>
        {isOpened ? <OpenedIcon /> : <ClosedIcon />}
      </Styled.MobileIcon>
    </Styled.MobileButton>
  );
}
