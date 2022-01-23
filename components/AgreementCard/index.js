import { useState } from 'react';
import Link from 'next/link';
import { Card, Number, Title, SeeMore } from './styles';

export default function AgreementCard({ id, title }) {
  const [expanded] = useState(false);

  return (
    <Card expanded={expanded}>
      <Number>{id}</Number>
      <Title>{title}</Title>
      <Link href={`agreements/${id}`}>
        <SeeMore>Leer más</SeeMore>
      </Link>
    </Card>
  );
}
