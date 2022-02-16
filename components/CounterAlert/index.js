import * as Styled from './styles.js';
import { statusLabel } from 'components/Alert';
import { pluralizeAndCount, pluralize } from 'util/pluralize';
import EyeIcon from 'components/EyeIcon';

export default function CounterAlert({ status, count, ...props }) {
  let label = statusLabel[status].toLowerCase();
  label =
    status === 'null'
      ? label
      : statusLabel[status].split(' ').slice(1).join(' ');

  const Content = () => {
    if (status !== 'null') {
      return (
        <div>
          <strong>{pluralizeAndCount(count, 'alerta')} </strong>
          {pluralize(count, label)}
        </div>
      );
    }
    return pluralizeAndCount(count, label);
  };
  return (
    <Styled.Container status={status} {...props}>
      <EyeIcon />
      <Content />
    </Styled.Container>
  );
}
