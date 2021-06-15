import { useState } from 'react';
import { Card, Number, Title, Description, SeeMore } from './styles';
import Alert from 'components/Alert';

export default function AgreementCard({ id, title, description, status }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card expanded={expanded}>
      <Number>{id}</Number>
      <Title>{title}</Title>
      {status ? <Alert status={status} /> : null}
      <Description>{description}</Description>
      <SeeMore onClick={() => setExpanded(prev => !prev)}>
        {expanded ? 'Leer menos' : 'Leer más'}
      </SeeMore>
    </Card>
  );
}
