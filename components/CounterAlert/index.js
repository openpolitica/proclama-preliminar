import * as Styled from './styles.js';
import { Fragment } from 'react';
import { statusLabel } from 'components/Alert';
import { pluralizeAndCount, pluralize } from 'util/pluralize';

export default function CounterAlert({ status, count, ...props }) {
  let label = statusLabel[status].toLowerCase();
  label =
    status === 'null'
      ? label
      : statusLabel[status].split(' ').slice(1).join(' ');

  const Content = () => {
    if (status !== 'null') {
      return (
        <Fragment>
          <strong>{pluralizeAndCount(count, 'alerta')}</strong>
          {pluralize(count, label)}
        </Fragment>
      );
    }
    return pluralizeAndCount(count, label);
  };
  return (
    <Styled.Container {...props}>
      <Content />
    </Styled.Container>
  );
}
