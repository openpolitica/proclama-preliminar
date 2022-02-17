import * as Styled from './styles';

export default function DownloadButton({ to, ...props }) {
  return (
    <Styled.DownloadButton href={to} {...props}>
      <Styled.Icon>
        <Styled.ArrowRight />
      </Styled.Icon>
      <Styled.Text>{props.children}</Styled.Text>
    </Styled.DownloadButton>
  );
}
