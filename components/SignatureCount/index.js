import * as Styled from './styles';

const SignatureCount = props => {
  return (
    <Styled.SignatureCount>
      {props.count} peruanos han firmado para que los candidatos respeten estos
      acuerdos
    </Styled.SignatureCount>
  );
};

export default SignatureCount;
