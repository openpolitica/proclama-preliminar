import * as Styled from './styles';
import EyeIcon from 'components/EyeIcon';

export const statusLabel = {
  stateless: 'Sin alerta',
  moderate: 'Alerta moderada',
  high: 'Alerta grave',
  extreme: 'Alerta muy grave',
};
export default function Alert({ status, ...props }) {
  return (
    <Styled.Message status={status} role="alert" {...props}>
      <EyeIcon />
      <Styled.Text>
        {status ? statusLabel[status] : statusLabel['stateless']}
      </Styled.Text>
    </Styled.Message>
  );
}
