import MainLayout from '../layouts/main/main.layout';
import PageTitle from '../components/page-title/page-title.component';
import PageContent from '../components/page-content/page-content.component';
import Focals from '../components/focals/focals.component';

const directory = [
	{
		agency: {
			name: 'Agricultural Credit Policy Council',
			acronym: 'ACPC'
		},
		head: {
			name: 'Jocelyn Alma R. Badiola',
			email: 'oed@acpc.gov.ph',
			designation: 'Executive Director',
			contactNumber: '(02)8634-3320'
		},
		focals: [
			{
				name: 'Jenny T. Apsilan',
				email: 'jtaspilan@acpc.gov.ph',
				designation: 'Project Development Officer V',
				contactNumber: '(02)8634-3320',
				main: true
			},
			{
				name: 'Joan C. Basay',
				email: 'jcbasay@acpc.gov.ph',
				designation: 'Project Development Officer III',
				contactNumber: '(02)8634-3321'
			},
			{
				name: 'Jan Morihei Sevilla',
				email: 'jmsevilla@acpc.gov.ph',
				designation: 'Project Development Officer II',
				contactNumber: '(02)8634-3322'
			}
		]
	}
]

const DirectoryPage = () => {
	return (
		<MainLayout>
			<PageTitle title="Directory" />
			
			<PageContent>
				<table className="table-auto">
					<thead>
						<tr>
							<th className="px-2 py-2 text-center">Name</th>
							<th className="px-2 py-2 text-center">Designation</th>
							<th className="px-2 py-2 text-center">Email</th>
							<th className="px-2 py-2 text-center">Contact No.</th>
						</tr>
					</thead>
					<tbody>
						{
							directory.map((d, index) => (
								<>
									<tr>
										<td className="text-center" colSpan="100%">{`${d.agency.name} (${d.agency.acronym})`}</td>
									</tr>
									<tr key={index} className="border-b-2">
										<td className="px-2 py-2">{d.head.name}</td>
										<td className="px-2 py-2">{d.head.designation}</td>
										<td className="px-2 py-2">{d.head.email}</td>
										<td className="px-2 py-2">{d.head.contactNumber}</td>
									</tr>
									<Focals focals={d.focals} />
								</>
							))
						}
					</tbody>
				</table>
			</PageContent>
		</MainLayout>
	)
}

export default DirectoryPage;