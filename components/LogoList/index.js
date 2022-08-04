import * as Styled from './styles';
import Image from 'next/image';
import ImageBox from 'components/ImageBox';
import Logos from '_data/orgs';

const LogoList = () => (
  <Styled.Boxlogo>
    {Logos.map(({ source, width, height, alternate, url }, i) => {
      return (
        <ImageBox key={i} to={url}>
          <Image src={source} width={width} height={height} alt={alternate} />
        </ImageBox>
      );
    })}
  </Styled.Boxlogo>
);

export default LogoList;
