import MainLayout from '../layouts/main/main.layout';
import PageTitle from '../components/page-title/page-title.component';
import PageContent from '../components/page-content/page-content.component';

const RegisterPage = () => {
	return (
		<MainLayout>
			<PageTitle title="Register" />
			
			<PageContent>
				<h1>Content</h1>
			</PageContent>
		</MainLayout>
	)
}

export default RegisterPage;