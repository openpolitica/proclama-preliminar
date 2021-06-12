import * as Styled from './styles';
import { Fragment, useState } from 'react';
import { agreements } from 'data/agreements';

const Form = () => {
  const [currentAgreement, setCurrentAgreement] = useState({ id: '' });
  const [currentData, setCurrentData] = useState(null);

  const updateForm = async event => {
    event.preventDefault();

    if (!currentAgreement.id) {
      alert(
        'No ha seleccionado un acuerdo, debe hacerlo de la lista desplegable',
      );
      return;
    }

    const body = [
      {
        label: 'Título',
        value: event.target.title.value,
      },
      {
        label: 'Descripción',
        value: event.target.description.value,
      },
      {
        label: 'Fuente',
        value: event.target.source.value,
      },
      {
        label: 'Número de acuerdo',
        value: event.target.agreement.value,
      },
      {
        label: '¿Cumple el acuerdo?',
        value: event.target.status.value,
      },
    ];
    setCurrentData(body);
    alert('Formulario enviado');
  };

  const handleSelect = event => {
    const agreement = agreements.find(
      element => element.id === parseInt(event.target.value),
    );
    agreement
      ? setCurrentAgreement(agreement)
      : setCurrentAgreement({ id: '' });
  };

  const resetValues = () => {
    setCurrentData(null);
    setCurrentAgreement({ id: '' });
  };

  const AgreementBox = () => {
    if (currentAgreement.id) {
      return (
        <Styled.AgreementContainer>
          <Styled.AgreementTitle>
            {currentAgreement.title}
          </Styled.AgreementTitle>
          <Styled.AgreementDescription>
            {currentAgreement.description}
          </Styled.AgreementDescription>
        </Styled.AgreementContainer>
      );
    }
    return (
      <Styled.AgreementContainer>
        <Styled.AgreementMessage>
          No se ha seleccionado ningún acuerdo. Seleccione uno de la lista
          desplegable.
        </Styled.AgreementMessage>
      </Styled.AgreementContainer>
    );
  };

  const alternatives = [
    {
      id: 'status_yes',
      name: 'status',
      label: 'Sí',
    },
    {
      id: 'status_no',
      name: 'status',
      label: 'No',
    },
    {
      id: 'status_risk',
      name: 'status',
      label: 'En riesgo',
    },
  ];

  const RadioItem = props => {
    return (
      <Styled.RadioItemContainer>
        <Styled.RadioButton
          id={props.id}
          name={props.name}
          type="radio"
          required
        />
        <Styled.RadioLabel htmlFor={props.id}> {props.label}</Styled.RadioLabel>
      </Styled.RadioItemContainer>
    );
  };

  const SummaryItem = props => {
    return (
      <Styled.SummaryItemContainer>
        <Styled.SummaryLabel> {props.label} </Styled.SummaryLabel>
        <Styled.SummaryValue>{props.value} </Styled.SummaryValue>
      </Styled.SummaryItemContainer>
    );
  };

  const Summary = () => {
    return (
      <Styled.SummaryContainer>
        {currentData?.map(element => (
          <SummaryItem key={element.label} {...element} />
        ))}
      </Styled.SummaryContainer>
    );
  };

  return (
    <Styled.Container>
      <Styled.Main>
        <Styled.Title>Formulario de actualización</Styled.Title>
        {!currentData ? (
          <form onSubmit={updateForm}>
            <Styled.InputContainer>
              <Styled.Label htmlFor="title" className="required">
                Título
              </Styled.Label>
              <Styled.TextInput
                id="title"
                name="title"
                type="text"
                autoComplete="title"
                required
              />
            </Styled.InputContainer>

            <Styled.InputContainer>
              <Styled.Label htmlFor="description" className="required">
                Descripción
              </Styled.Label>
              <Styled.TextArea id="description" name="description" required />
            </Styled.InputContainer>

            <Styled.InputContainer>
              <Styled.Label htmlFor="source" className="required">
                Fuente
              </Styled.Label>
              <Styled.TextInput
                id="source"
                name="source"
                type="text"
                autoComplete="source"
                required
              />
            </Styled.InputContainer>

            <Styled.InputContainer>
              <Styled.Label htmlFor="agreement" className="required">
                Número de acuerdo
              </Styled.Label>
              <Styled.Select
                id="agreement"
                onChange={handleSelect}
                value={currentAgreement.id}
                name="agreement">
                <option value="">- -</option>
                {agreements.map(({ ...item }) => (
                  <option key={item.id} value={item.id}>
                    {item.id}
                  </option>
                ))}
              </Styled.Select>
            </Styled.InputContainer>
            <AgreementBox />
            <Styled.InputContainer>
              <Styled.Label htmlFor="status" className="required">
                ¿Cumple el acuerdo?
              </Styled.Label>
              <Styled.RadioGroupContainer>
                {alternatives.map(element => (
                  <RadioItem key={element.id} {...element} />
                ))}
              </Styled.RadioGroupContainer>
            </Styled.InputContainer>
            <Styled.InfoBox>
              <strong>Nota:</strong> Todos los campos marcados con asterisco (*)
              son obligatorios.
            </Styled.InfoBox>
            <Styled.ButtonBox>
              <Styled.Button type="submit">Actualizar</Styled.Button>
            </Styled.ButtonBox>
          </form>
        ) : (
          <Fragment>
            <Styled.SummaryInfo>
              La información ha sido actualizada satisfactoriamente, con los
              siguientes datos:
            </Styled.SummaryInfo>
            <Summary />
            <Styled.ButtonBox>
              <Styled.Button onClick={resetValues}>Enviar nuevo</Styled.Button>
            </Styled.ButtonBox>
          </Fragment>
        )}
      </Styled.Main>
    </Styled.Container>
  );
};
export default Form;
