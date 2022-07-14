import MainLayout from '../layouts/main/main.layout';
import PageContent from '../components/page-content/page-content.component';
import PageTitle from '../components/page-title/page-title.component';

const ProjectsPage = () => {
	return (
		<MainLayout>
			<PageTitle title="Projects" />
			
			<PageContent></PageContent>
		</MainLayout>
	)
}

export default ProjectsPage;