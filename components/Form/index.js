import * as Styled from './styles';
import Router from 'next/router';
import Button from 'components/Button';
import TextInput from 'components/TextInput';
import { Fragment, useState } from 'react';
import FooterInfo from 'components/FooterInfo';
import fetchJson from 'lib/fetchJson';

const Form = ({ agreements }) => {
  const [currentAgreement, setCurrentAgreement] = useState({ id: '' });
  const [currentData, setCurrentData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateForm = async event => {
    event.preventDefault();

    if (isLoading) {
      return;
    }

    setIsLoading(true);

    if (!currentAgreement.id) {
      alert(
        'No ha seleccionado un compromiso, debe hacerlo de la lista desplegable',
      );
      return;
    }

    const body = {
      title: event.target.title.value,
      description: event.target.description.value,
      data_source: event.target.source.value,
      agreement_id: event.target.agreement.value,
      status: event.target.status.value,
      political_party: 'Perú Libre',
    };

    try {
      await fetchJson('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      alert('Formulario enviado');
    } catch (error) {
      alert('Error publicando los datos');
      setIsLoading(false);
      return;
    }

    const data = [
      {
        label: 'Título',
        value: body.title,
      },
      {
        label: 'Descripción',
        value: body.description,
      },
      {
        label: 'Fuente',
        value: body.data_source,
      },
      {
        label: 'Número de compromiso',
        value: body.agreement_id,
      },
      {
        label: 'Nivel de alerta',
        value: body.status,
      },
    ];
    setCurrentData(data);
    setIsLoading(false);
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

  const handleExit = async () => {
    await fetchJson('/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
    Router.push('/update-form/login');
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
          No se ha seleccionado ningún compromiso. Seleccione uno de la lista
          desplegable.
        </Styled.AgreementMessage>
      </Styled.AgreementContainer>
    );
  };

  const alternatives = [
    {
      id: 'statusModerate',
      name: 'status',
      label: 'Alerta moderada',
      value: 'moderate',
    },
    {
      id: 'statusHigh',
      name: 'status',
      label: 'Alerta grave',
      value: 'high',
    },
    {
      id: 'statusExtreme',
      name: 'status',
      label: 'Alerta muy grave',
      value: 'extreme',
    },
  ];

  const RadioItem = props => {
    return (
      <Styled.RadioItemContainer>
        <Styled.RadioButton
          id={props.id}
          name={props.name}
          value={props.value}
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
              <TextInput
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
              <TextInput
                id="source"
                name="source"
                type="text"
                autoComplete="source"
                required
              />
              <Styled.Example>Ej. https://vigilantes.pe/</Styled.Example>
            </Styled.InputContainer>

            <Styled.InputContainer>
              <Styled.Label htmlFor="agreement" className="required">
                Número de compromiso
              </Styled.Label>
              <Styled.Select
                id="agreement"
                onChange={handleSelect}
                value={currentAgreement.id}
                name="agreement">
                <option value="">- -</option>
                {agreements?.map(({ ...item }) => (
                  <option key={item.id} value={item.id}>
                    {item.id}
                  </option>
                ))}
              </Styled.Select>
            </Styled.InputContainer>
            <AgreementBox />
            <Styled.InputContainer>
              <Styled.Label htmlFor="status" className="required">
                ¿Qué nivel de alerta tiene?
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
              <Button type="button" level="secondary" onClick={handleExit}>
                Salir
              </Button>
              <Button type="submit" disabled={isLoading} isLoading={isLoading}>
                Actualizar
              </Button>
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
              <Button onClick={handleExit} type="button" level="secondary">
                Salir
              </Button>
              <Button onClick={resetValues}>Enviar nuevo</Button>
            </Styled.ButtonBox>
          </Fragment>
        )}
        <FooterInfo />
      </Styled.Main>
    </Styled.Container>
  );
};
export default Form;
