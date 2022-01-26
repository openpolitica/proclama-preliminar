import Link from 'next/link';
import { Card, Number, Title, SeeMore } from './styles';

export default function AgreementCard({ id, title }) {
  return (
    <Card>
      <Number>{id}</Number>
      <Title>{title}</Title>
      <Link href={`agreements/${id}`}>
        <SeeMore>Leer más</SeeMore>
      </Link>
    </Card>
  );
}
