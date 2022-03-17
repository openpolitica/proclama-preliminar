import * as Styled from './styles';
import Link from 'next/link';
import Image from 'next/image';
import ImageBox from 'components/ImageBox';

const Header = () => {
  return (
    <header>
      <Link href="/">
        <Styled.Header>
          <ImageBox header>
            <Image
              src="/images/logos/vigilantes.svg"
              width="208px"
              height="48px"
              quality="100"
              alt="logo de Vigilantes"
            />
          </ImageBox>
        </Styled.Header>
      </Link>
    </header>
  );
};

export default Header;
