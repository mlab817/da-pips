import MainLayout from "../layouts/main/main.layout";
import PageTitle from "../components/page-title/page-title.component";
import PageContent from "../components/page-content/page-content.component";

const teams = [
  'National Rice Program',
  'National Corn Program',
  'High Value Crops Development Program',
  'National Livestock Program',
  'National Organic Agriculture Program',
  'Market Development Services Program',
  'Farm to Market Road Development Program',
  'Regulatory Program',
  'Ongoing Projects',
  'Proposed/Pipeline Projects'
]

const TeamsPage = () => {
  return (
    <MainLayout>
      <PageTitle title="Teams" />

      <PageContent />
    </MainLayout>
  )
}

export default TeamsPage
