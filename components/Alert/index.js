import { Message } from './styles';

const statusLabel = {
  moderate: 'Alerta moderada',
  high: 'Alerta grave',
  extreme: 'Alerta muy grave',
};
export default function Alert({ status, ...props }) {
  return (
    <Message status={status} role="alert" {...props}>
      {statusLabel[status]}
    </Message>
  );
}
