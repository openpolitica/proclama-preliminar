import { SignatureBox } from './styles';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

const SignatureCount = () => {
  const { data } = useSWR('/api/signatures', fetcher);

  return (
    <ul>
      <SignatureBox>{data} personas</SignatureBox>
    </ul>
  );
};

export default SignatureCount;
