import { Message } from './styles';

const statusLabel = {
  moderate: 'Alerta moderada',
  null: 'Sin alerta',
  high: 'Alerta grave',
  extreme: 'Alerta muy grave',
};
export default function Alert({ status, ...props }) {
  return (
    <Message status={status} role="alert" {...props}>
      {status ? statusLabel[status] : statusLabel['null']}
    </Message>
  );
}
