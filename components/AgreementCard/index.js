import * as Styled from './styles';
import Link from 'next/link';
import CounterAlert from 'components/CounterAlert';

export default function AgreementCard({ id, title, statuses }) {
  return (
    <Styled.Card>
      <Styled.Number>{id}</Styled.Number>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Counterbox>
        {statuses.map(({ status, count }, i) => {
          if (status !== 'null') {
            return <CounterAlert key={i} status={status} count={count} />;
          }
        })}
      </Styled.Counterbox>
      <Link href={`compromiso/${id}`}>
        <Styled.SeeMore>Leer más</Styled.SeeMore>
      </Link>
    </Styled.Card>
  );
}
