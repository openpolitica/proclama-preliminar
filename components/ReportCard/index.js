import * as Styled from './styles';
import Link from 'components/LinkWithFallback';
import Image from 'next/image';

export default function ReportCard({ title, link }) {
  return (
    <Styled.Card>
      <Styled.ImageContainer>
        <Image
          src="/images/icons/img_report.svg"
          width="142px"
          height="103px"
          quality="100"
          alt="icono de reporte"
        />
      </Styled.ImageContainer>
      <Styled.Subtitle>Reporte</Styled.Subtitle>
      <Styled.Title>{title}</Styled.Title>
      <Link to={link} target="_self">
        <Styled.SeeMore>Descargar</Styled.SeeMore>
      </Link>
    </Styled.Card>
  );
}
