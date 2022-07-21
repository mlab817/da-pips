const OuSubprograms = ({ ous }) => {
	return (
		<>
			{
				ous.map((ou, index) => (
					<tr key={index} className="border">
						<td></td>
						<td>{ou.name}</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				))
			}
		</>
	)
}

export default OuSubprograms