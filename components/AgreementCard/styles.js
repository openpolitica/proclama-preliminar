import styled from 'styled-components';

const Card = styled('div')`
  background-color: #f2f2f2;
  margin: 1.25rem 0 0 1.25rem;
  max-height: ${({ expanded }) => (expanded ? 'unset' : '323px')};
  overflow: hidden;
  padding: 1rem 1.5rem 3rem;
  position: relative;
  transition: max-height 300ms cubic-bezier(0.4, 0, 0.2, 1);
  will-change: max-height;
  ::after {
    background: ${({ expanded }) =>
      expanded
        ? 'transparent'
        : 'linear-gradient(180deg,rgba(255, 255, 255, 0) 50%,#f2f2f2 80%)'};
    bottom: 0;
    content: '';
    display: ${({ expanded }) => (expanded ? 'none' : 'block')};
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;
const Number = styled('span')`
  color: #808080;
  font-size: 1.5rem;
  font-weight: bold;
`;
const Title = styled('h2')`
  color: #4e4a49;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
`;
const Description = styled('p')`
  color: #808080;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
`;

const SeeMore = styled('button')`
  background-color: transparent;
  border: none;
  bottom: 1rem;
  color: #808080;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  padding: 0;
  position: absolute;
  text-decoration: underline;
  z-index: 1;
`;

export { Card, Title, Number, Description, SeeMore };
