const Focals = ({ focals }) => {
	return (
		<>
			{
				focals.map((focal, index) => (
					<tr key={index} className="border-b-2">
						<td className="px-2 py-2">{focal.name}</td>
						<td className="px-2 py-2">{focal.designation}</td>
						<td className="px-2 py-2">{focal.email}</td>
						<td className="px-2 py-2">{focal.contactNumber}</td>
					</tr>
				))
			}
		</>
		
	)
}

export default Focals
