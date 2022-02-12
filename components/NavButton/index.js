import * as Styled from './styles';
import Router from 'next/router';

export default function NavButton({ to, ...props }) {
  const handleNav = () => {
    if (!to) {
      return Router.back();
    }
    return Router.push(to);
  };

  return (
    <Styled.NavButton onClick={handleNav} {...props}>
      <Styled.NavIcon>
        <Styled.ArrowRight />
      </Styled.NavIcon>
    </Styled.NavButton>
  );
}
