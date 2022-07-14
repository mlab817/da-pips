import MainLayout from '../layouts/main/main.layout';
import PageTitle from '../components/page-title/page-title.component';
import PageContent from '../components/page-content/page-content.component';

const UsersPage = () => {
	return (
		<MainLayout>
			<PageTitle title="Users" />
			
			<PageContent />
		</MainLayout>
	)
}

export default UsersPage;