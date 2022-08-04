import * as Styled from './styles';
import BasePage from 'components/BasePage';
import { TitleBox, Title } from 'components/AgreementPage/styles';
import { Content } from 'components/ReportsPage/styles';
import LogoList from 'components/LogoList';

export default function AboutUsPage({ orgs }) {
  return (
    <BasePage>
      <Content>
        <TitleBox>
          <Title> ¿Quiénes somos? </Title>
        </TitleBox>
        <Styled.Container>
          <p>
            La Plataforma Vigilantes es un esfuerzo conjunto de 14
            organizaciones de la sociedad civil orientado a hacer un seguimiento
            periódico de los 12 compromisos asumidos solemnemente ante la
            ciudadanía por el presidente de la República Pedro Castillo*.
          </p>
          <p>
            Estos compromisos constituyen estándares mínimos de respeto a los
            valores democráticos y al Estado constitucional de Derecho.
          </p>
          <Styled.Footnote>
            *Los doce compromisos fueron suscritos por los candidatos
            presidenciales Pedro Castillo y Keiko Fujimori en una ceremonia
            solemne realizada el 17 de mayo de 2021 en la ciudad de Lima.
          </Styled.Footnote>
        </Styled.Container>
        <Styled.Organizers>
          <Styled.OrganizersTitle>Promotores</Styled.OrganizersTitle>
          <LogoList />
        </Styled.Organizers>
      </Content>
    </BasePage>
  );
}
