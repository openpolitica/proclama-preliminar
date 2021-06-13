import styled from 'styled-components';

export const Container = styled('div')`
  padding: 0 1.5rem;
  @media (max-width: 40rem) {
    padding: 0;
    height: 100vh;
    background-color: #f2f2f2;
  }
`;

export const Main = styled('main')`
  background-color: #f2f2f2;
  border-radius: 0.5rem;
  margin: 2rem auto;
  max-width: 43.75rem;
  padding: 1rem 0.5rem 2rem 0.5rem;
  @media (max-width: 40rem) {
    margin: auto;
    border-radius: 0;
    padding: 1rem 0.1rem 2rem 0.1rem;
  }
`;

export const Title = styled('h1')`
  border-bottom: 1px solid #c4c4c4;
  color: #4e4a49;
  font-size: 1.375rem;
  font-weight: bold;
  line-height: 2rem;
  margin: 0;
  padding-bottom: 1rem;
  padding-top: 1rem;
  text-align: center;
`;

export const InputContainer = styled('div')`
  padding: 1rem 2rem;
  @media (max-width: 40rem) {
    padding: 1rem 0.8rem;
  }
`;

export const Label = styled('label')`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
  &.required:after {
    color: #e32;
    content: ' *';
    display: inline;
  }
`;

export const TextArea = styled('textarea')`
  border: solid 0.01rem #c4c4c4;
  border-radius: 0.4rem;
  height: 8rem;
  padding: 0.5rem;
  resize: vertical;
  width: 100%;
`;

export const Select = styled('select')`
  background-color: white;
  border: solid 0.01rem #c4c4c4;
  border-radius: 0.4rem;
  padding: 0.5rem;
  width: 4rem;
`;

export const AgreementContainer = styled('div')`
  background-color: #f8f8f8;
  border: solid 0.2rem white;
  margin: 0 2rem 1rem;
  padding: 0.2rem 0.5rem;
  text-size: 0.8rem;
  @media (max-width: 40rem) {
    margin: 0 0.8rem 1rem;
    padding: 0;
  }
`;

export const AgreementTitle = styled('p')`
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.5rem 1rem 0;
  text-align: center;
`;

export const AgreementDescription = styled('p')`
  font-size: 0.8rem;
  font-style: italic;
  padding: 0 1rem 1rem;
  text-align: center;
`;

export const AgreementMessage = styled('p')`
  font-size: 0.8rem;
  padding: 0 1rem;
  text-align: center;
`;

export const RadioButton = styled('input')`
  text-size: 1rem;
`;

export const RadioLabel = styled('label')`
  padding: 0 0.5rem;
  text-size: 0.8rem;
`;

export const RadioItemContainer = styled('div')`
  padding: 0.5rem 2rem 0.5rem 0rem;
`;

export const RadioGroupContainer = styled('div')`
  display: flex;
  flex-direction: row;
  padding-left: 0.8rem;
  @media (max-width: 40rem) {
    flex-direction: column;
  }
`;

export const InfoBox = styled('div')`
  font-size: 0.75rem;
  padding: 0 2rem 1rem;
  @media (max-width: 40rem) {
    padding: 0 0.8rem 1rem;
  }
`;

export const ButtonBox = styled('div')`
  display: flex;
  justify-content: flex-end;
  padding: 0 2rem 1rem;
  & > button {
    margin-left: 1rem;
  }
  @media (max-width: 40rem) {
    padding: 0 0.8rem 1rem;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    & > button {
      margin-left: 0;
      margin-bottom: 1rem;
      width: 12rem;
    }
  }
`;

export const SummaryContainer = styled('div')`
  background-color: #f8f8f8;
  border: solid 0.2rem white;
  margin: 0 2rem 2rem;
  padding: 0.2rem 1rem;
  text-size: 0.8rem;
  @media (max-width: 40rem) {
    margin: 0 0.8rem 2rem;
    padding: 0 0.5rem;
  }
`;

export const SummaryLabel = styled('p')`
  display: block;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0.1rem 0;
`;
export const SummaryValue = styled('p')`
  display: block;
  font-size: 0.8rem;
  margin: 0.1rem 0;
`;

export const SummaryItemContainer = styled('div')`
  padding: 0.4rem 0;
`;

export const SummaryInfo = styled('div')`
  margin: 1.5rem 2rem 1rem;
  padding: 0.2rem 1rem;
  text-align: center;
  @media (max-width: 40rem) {
    margin: 1.5rem 0.8rem 1rem;
    padding: 0 0.5rem;
  }
`;
