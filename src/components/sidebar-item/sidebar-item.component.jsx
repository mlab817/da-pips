import { NavLink } from "react-router-dom";
import Icon from "../icon/icon.component";

const SidebarItem = ({ to, icon, label }) => {
  return (
    <li className="my-px">
      <NavLink
        to={to}
        className={({ isActive }) => `${isActive ? 'bg-gray-100 text-gray-700' : 'text-gray-300'} flex flex-row items-center h-10 px-3 rounded-lg`}
      >
        <span className="flex items-center justify-center text-lg">
          <Icon icon={icon} className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="ml-3">
          {label}
        </span>
      </NavLink>
    </li>
  )
}

export default SidebarItem;
