import MainLayout from '../layouts/main/main.layout';
import PageTitle from '../components/page-title/page-title.component';
import PageContent from '../components/page-content/page-content.component';

const TrackerPage = () => {
	return (
		<MainLayout>
			<PageTitle title="Tracker" />
			
			<PageContent />
		</MainLayout>
	)
}

export default TrackerPage;