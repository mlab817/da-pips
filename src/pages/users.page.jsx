import MainLayout from '../layouts/main/main.layout';
import PageTitle from '../components/page-title/page-title.component';
import PageContent from '../components/page-content/page-content.component';
import User from "../components/user/user.component";

const users = [
	{
		name: 'user1',
		designation: 'designation1',
		imageUrl: ''
	},
	{
		name: 'user1',
		designation: 'designation1',
		imageUrl: ''
	},
	{
		name: 'user1',
		designation: 'designation1',
		imageUrl: ''
	},
	{
		name: 'user1',
		designation: 'designation1',
		imageUrl: ''
	}
]

const UsersPage = () => {
	return (
		<MainLayout>
			<PageTitle title="Users" />
			
			<PageContent>
				<div className="flex flex-wrap">
					{
						users.map((user, index) => <User key={index} user={user} />)
					}

					<div className="p-4 lg:w-1/4 md:w-1/2">
						<div className="h-full flex flex-col items-center text-center">
							Add New User
						</div>
					</div>
				</div>
			</PageContent>
		</MainLayout>
	)
}

export default UsersPage;