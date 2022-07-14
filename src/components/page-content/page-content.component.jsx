const PageContent = ({ children }) => {
	return (
		<div
			className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4 px-4 py-4"
		>
			{children}
		</div>
	)
}

export default PageContent;