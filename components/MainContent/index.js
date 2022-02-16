import * as Styled from './styles';

const MainContent = ({ children, ...props }) => {
  return (
    <Styled.Container>
      <Styled.Main {...props}>{children}</Styled.Main>
    </Styled.Container>
  );
};

export default MainContent;
