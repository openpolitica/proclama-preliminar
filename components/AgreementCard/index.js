import { useState } from 'react';
import { Card, Number, Title, Description, SeeMore } from './styles';

export default function AgreementCard({ id, title, description }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card expanded={expanded}>
      <Number>{id}</Number>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <SeeMore onClick={() => setExpanded(prev => !prev)}>
        {expanded ? 'Leer menos' : 'Leer más'}
      </SeeMore>
    </Card>
  );
}
