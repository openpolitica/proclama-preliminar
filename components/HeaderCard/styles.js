import styled from 'styled-components';

export const HeaderCard = styled('div')`
  align-items: flex-end;
  ${props => props.underline && 'border-bottom: 1px solid rgba(0, 0, 0, 0.08);'}

  display: flex;
  font-family: Inter;
  justify-content: space-between;
  padding-bottom: ${props => (props.underline ? 1.5 : 0)}rem;
  @media (max-width: 58.75rem) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

HeaderCard.defaultProps = {
  underline: true,
};
