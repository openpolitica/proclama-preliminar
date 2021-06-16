import * as Styled from './styles';

const formatDate = date => {
  const options = {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  };

  return new window.Date(date).toLocaleDateString('ES-pe', options);
};

export default function EventCard({ date, title, description, status, url }) {
  return (
    <Styled.Card>
      <Styled.HeaderCard>
        <div>
          <Styled.Date>{formatDate(date)}</Styled.Date>
          <Styled.Title>
            <b>Acuerdo:</b> {title}
          </Styled.Title>
        </div>
        <Styled.Alert status={status}></Styled.Alert>
      </Styled.HeaderCard>
      <Styled.Description>{description}</Styled.Description>
      <Styled.SourceLink href={url} target="_blank" rel="noopener noreferrer">
        <Styled.ArrowRight />
        Fuente
      </Styled.SourceLink>
    </Styled.Card>
  );
}
