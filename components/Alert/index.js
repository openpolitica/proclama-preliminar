import * as Styled from './styles';
import EyeIcon from 'components/EyeIcon';

export const statusLabel = {
  moderate: 'Alerta moderada',
  null: 'Sin alerta',
  high: 'Alerta grave',
  extreme: 'Alerta muy grave',
};
export default function Alert({ status, ...props }) {
  return (
    <Styled.Message status={status} role="alert" {...props}>
      <EyeIcon />
      <Styled.Text>
        {status ? statusLabel[status] : statusLabel['null']}
      </Styled.Text>
    </Styled.Message>
  );
}
