import MainLayout from "../layouts/main/main.layout";
import PageTitle from '../components/page-title/page-title.component';
import PageContent from '../components/page-content/page-content.component';
import Card from '../components/card/card.component';
import {useState} from 'react';

const subprograms = [
	'PSS',
	'ESETS',
	'R&D',
	'INS',
	'AMEFFS',
]

const activities = [
	'Seeds Procured for Distribution - Certified seeds',
	'Seeds Procured for Distribution - Commercial Hybrid',
	'Inorganic Fertilizer',
	'Seed Reserve - Certified Seeds procured',
	'Seed Reserve - Hybrid Seeds procured',
	'Insecticide reserve',
	'Fungicide reserve',
	'Rodenticides reserve',
	'Bactericide reserve',
	'DA RFO Station Upgraded',
	'Seed Reserve Warehouse - Maintained',
	'DA RFO Station Maintained',
	'BioFertilizer (solid)'
]

const ActivitiesPage = () => {
	const [activeTab, setActiveTab] = useState('PSS')
	
	const handleClick = (val) => setActiveTab(val)
	
	return (
		<MainLayout>
			<PageTitle title={`${activeTab} on National Rice Program`} />

			{/*<div className="grid grid-cols-6 gap-4">*/}
			{/*	{*/}
			{/*		subprograms.map((sp, index) => (*/}
			{/*			<Card key={index} onClick={() => handleClick(sp)}>*/}
			{/*				<h2>*/}
			{/*					{sp}*/}
			{/*				</h2>*/}
			{/*			</Card>*/}
			{/*		))*/}
			{/*	}*/}
			{/*</div>*/}

			<PageContent>
				<table className="table-auto border border-collapse mt-4">
					<thead>
						<tr className="bg-indigo-700 text-white">
							<th className="border px-1 py-1 text-center">PAP</th>
							<th className="border px-1 py-1 text-center">2023</th>
							<th className="border px-1 py-1 text-center">2024</th>
							<th className="border px-1 py-1 text-center">2025</th>
							<th className="border px-1 py-1 text-center">2026</th>
							<th className="border px-1 py-1 text-center">2027</th>
							<th className="border px-1 py-1 text-center">2028</th>
							<th className="border px-1 py-1 text-center">Total</th>
							<th className="border px-1 py-1 text-center">Actions</th>
						</tr>
					</thead>
					<tbody>
						{
							activities.map((activity, index) => (
								<tr key={index} className="border">
									<td className="border px-1 py-1">{activity}</td>
									<td className="border px-1 py-1">
										<input className="border-0 text-right px-1 py-1" type="text"/>
									</td>
									<td className="border px-1 py-1">
										<input className="border-0 text-right px-1 py-1" type="text"/>
									</td>
									<td className="border px-1 py-1">
										<input className="border-0 text-right px-1 py-1" type="text"/>
									</td>
									<td className="border px-1 py-1">
										<input className="border-0 text-right px-1 py-1" type="text"/>
									</td>
									<td className="border px-1 py-1">
										<input className="border-0 text-right px-1 py-1" type="text"/>
									</td>
									<td className="border px-1 py-1">
										<input className="border-0 text-right px-1 py-1" type="text"/>
									</td>
									<td className="border px-1 py-1">
										<input className="border-0 text-right px-1 py-1" type="text"/>
									</td>
									<td className="px-2 py-1 text-center flex flex-row">
										<button className="px-2 py-1 bg-indigo-700 text-white rounded hover:ring-2">Update</button>
										<button className="px-2 py-1 bg-indigo-700 text-white rounded hover:ring-2 ml-1">Submit</button>
									</td>
								</tr>)
							)
						}
					</tbody>
					<tfoot>
						<tr>
							<td className="border px-1 py-1 text-center">Total</td>
							<td className="border px-1 py-1 text-center">2023</td>
							<td className="border px-1 py-1 text-center">2024</td>
							<td className="border px-1 py-1 text-center">2025</td>
							<td className="border px-1 py-1 text-center">2026</td>
							<td className="border px-1 py-1 text-center">2027</td>
							<td className="border px-1 py-1 text-center">2028</td>
							<td className="border px-1 py-1 text-center">Total</td>
							<td className="border px-1 py-1 text-center">Actions</td>
						</tr>
					</tfoot>
				</table>
			</PageContent>
		</MainLayout>
	)
}

export default ActivitiesPage;