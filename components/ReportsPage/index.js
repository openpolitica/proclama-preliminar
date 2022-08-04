import * as Styled from './styles';
import BasePage from 'components/BasePage';
import { TitleBox, Title } from 'components/AgreementPage/styles';
import ReportCard from 'components/ReportCard';

export default function ReportsPage({ reports }) {
  return (
    <BasePage>
      <Styled.Content>
        <TitleBox>
          <Title> Listado de reportes </Title>
        </TitleBox>
        <Styled.List>
          {reports?.map(({ id, title, url }) => {
            return <ReportCard key={id} title={title} link={url} />;
          })}
        </Styled.List>
      </Styled.Content>
    </BasePage>
  );
}
