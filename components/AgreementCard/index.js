import { useState } from 'react';
import { Card, Number, Title, Description, SeeMoreBtn } from './styles';

export default function AgreementCard({ id, title, description }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card expanded={expanded}>
      <Number>{id}</Number>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <SeeMoreBtn onClick={() => setExpanded(prev => !prev)}>
        {expanded ? 'Leer menos' : 'Leer más'}
      </SeeMoreBtn>
    </Card>
  );
}
