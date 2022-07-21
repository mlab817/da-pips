import MainLayout from "../layouts/main/main.layout";
import PageTitle from "../components/page-title/page-title.component";
import PageContent from "../components/page-content/page-content.component";

const DashboardPage = () => {
  return (
    <MainLayout>
      <PageTitle title="Dashboard" />

      <PageContent />
    </MainLayout>
  )
}

export default DashboardPage