import MainLayout from '../layouts/main/main.layout';
import PageTitle from '../components/page-title/page-title.component';
import PageContent from '../components/page-content/page-content.component';
import OuSubprogramsComponent from '../components/subprograms/ou-subprograms.component';
import OuSubprograms from '../components/subprograms/ou-subprograms.component';

const program = {
	name: 'National Rice Program',
	subprograms: [
		{
			name: 'PSS',
			ous: [
				{
					name: 'BPI'
				},
				{
					name: 'RFO I'
				}
			]
		}
	]
}

const ProgramsPage = () => {
	return (
		<MainLayout>
			<PageTitle title={program.name} />
			
			<PageContent>
				<table>
					<thead>
						<tr>
							<th>Subprogram</th>
							<th>Operating Unit</th>
							<th>2023</th>
							<th>2024</th>
							<th>2025</th>
							<th>2026</th>
							<th>2027</th>
							<th>2028</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
					{
						program.subprograms.map((sp, index) => (
							<>
								<tr>
									<td>
										{sp.name}
									</td>
								</tr>
								<OuSubprograms ous={sp.ous} />
							</>
						))
					}
					</tbody>
				</table>
			</PageContent>
		</MainLayout>
	)
}

export default ProgramsPage
