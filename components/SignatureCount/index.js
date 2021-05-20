import { SignatureBox } from './styles';

const SignatureCount = props => {
  return (
    <ul>
      <SignatureBox>{props.count} personas</SignatureBox>
    </ul>
  );
};

export default SignatureCount;
