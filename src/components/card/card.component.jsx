const Card = ({ children, onClick }) => {
	return (
		<div onClick={onClick} className="border rounded cursor-pointer px-4 py-4 bg-indigo-700 text-gray-100 hover:bg-indigo-500">
			{children}
		</div>
	)
}

export default Card;