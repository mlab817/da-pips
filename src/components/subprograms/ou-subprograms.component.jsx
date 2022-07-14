const OuSubprograms = ({ ous }) => {
	return (
		<>
			{
				ous.map((ou, index) => (
					<tr key={index}>
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