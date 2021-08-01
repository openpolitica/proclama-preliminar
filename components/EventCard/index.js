import * as Styled from './styles';

const formatDate = date => {
  const options = {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  };

  return new Date(date).toLocaleDateString('ES-pe', options);
};

export default function EventCard({
  date,
  agreement_id,
  agreement_title,
  title,
  description,
  status,
  url,
}) {
  return (
    <Styled.Card status={status}>
      <Styled.HeaderCard>
        <div>
          <Styled.Date>{formatDate(date)}</Styled.Date>
          <Styled.HeaderTitle>
            <b>Acuerdo #{agreement_id}:</b> {agreement_title}
          </Styled.HeaderTitle>
        </div>
        <Styled.Alert status={status}></Styled.Alert>
      </Styled.HeaderCard>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <Styled.SourceLink href={url} target="_blank" rel="noopener noreferrer">
        <Styled.ArrowRight />
        Fuente
      </Styled.SourceLink>
    </Styled.Card>
  );
}
