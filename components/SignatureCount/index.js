import { SignatureBox } from './styles';

const SignatureCount = props => {
  return (
    <Styled.SignatureCount>{props.count} personas</Styled.SignatureCount>
  );
};

export default SignatureCount;
