import { Message } from './styles';

const statusLabel = {
  yes: 'Acuerdo cumplido',
  risk: '¡Acuerdo en riesgo!',
  no: 'Acuerdo incumplido',
};
export default function Alert({ status, ...props }) {
  return (
    <Message status={status} role="alert" {...props}>
      {statusLabel[status]}
    </Message>
  );
}
