const SidebarHeader = ({ title }) => {
  return (
    <li className="my-px">
      <span className="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">
        {title && title.toUpperCase()}
      </span>
    </li>
  )
}

export default SidebarHeader;
