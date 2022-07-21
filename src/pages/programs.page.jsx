import MainLayout from '../layouts/main/main.layout';
import PageTitle from '../components/page-title/page-title.component';
import PageContent from '../components/page-content/page-content.component';
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
				},
				{
					name: 'RFO CAR'
				},
				{
					name: 'RFO II'
				},
				{
					name: 'RFO IVA'
				},
				{
					name: 'RFO IVB'
				},
				{
					name: 'RFO V'
				},
				{
					name: 'RFO VI'
				},
				{
					name: 'RFO VII'
				},
				{
					name: 'RFO VIII'
				},
				{
					name: 'RFO IX'
				},
				{
					name: 'RFO X'
				},
				{
					name: 'RFO XI'
				},
				{
					name: 'RFO XII'
				},
				{
					name: 'RFO CARAGA'
				},
			]
		}
	]
}

const activities = [
	'PSS on National Rice Program',
	'R&D on National Rice Program',
	'ESETS on National Rice Program',
	'PAEF on National Rice Program',
	'INS on National Rice Program',
]

const ProgramsPage = () => {
	return (
		<MainLayout>
			<PageTitle title={program.name} />

			<PageTitle title="National Rice Program - RFO I" />

			<PageContent>
				<table className="table-fixed border">
					<thead>
						<tr className="border">
							<th>Activity</th>
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
						activities.map((activity, key) => (
							<tr className="border">
								<td className="text-base">{activity}</td>
								<td className="text-base text-right">0</td>
								<td className="text-base text-right">0</td>
								<td className="text-base text-right">0</td>
								<td className="text-base text-right">0</td>
								<td className="text-base text-right">0</td>
								<td className="text-base text-right">0</td>
								<td className="text-base text-right">0</td>
							</tr>
						))
					}
					</tbody>
				</table>
			</PageContent>

			<PageContent>
				<table className="table-fixed border">
					<thead>
						<tr className="border">
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
								<tr className="border">
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
