import { Message } from './styles';

const statusLabel = {
  yes: 'Acuerdo incumplido',
  risk: '¡Acuerdo en riesgo!',
  no: 'Acuerdo cumplido',
};
export default function Alert({ status }) {
  return (
    <Message status={status} role="alert">
      {statusLabel[status]}
    </Message>
  );
}
