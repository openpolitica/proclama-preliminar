import * as Styled from './styles';
import Link from 'next/link';

export default function AgreementCard({ id, title, statuses }) {
  return (
    <Styled.Card>
      <Styled.Number>{id}</Styled.Number>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Counterbox>
        {statuses.map(({ status, count }, i) => {
          if (status !== 'stateless') {
            return (
              <Styled.CounterAlert key={i} status={status} count={count} />
            );
          }
          return null;
        })}
      </Styled.Counterbox>
      <Link href={`compromiso/${id}`}>
        <Styled.SeeMore>Ver más</Styled.SeeMore>
      </Link>
    </Styled.Card>
  );
}
