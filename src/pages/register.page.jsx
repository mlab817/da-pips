import MainLayout from '../layouts/main/main.layout';
import PageTitle from '../components/page-title/page-title.component';
import PageContent from '../components/page-content/page-content.component';

const RegisterPage = () => {
	const handleSubmit = (e) => {
		e.preventDefault()

		console.log('form submission triggered')
	}

	return (
		<MainLayout>
			<PageTitle title="Register" />
			
			<PageContent>
				<form onSubmit={handleSubmit}>

				</form>
			</PageContent>
		</MainLayout>
	)
}

export default RegisterPage;