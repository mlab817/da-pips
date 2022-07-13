import avatar from '../../assets/avatar.jpg'
import {Link} from "react-router-dom";
import Search from "../search/search.component";

const Header = () => {
  return (
    <header className="bg-white shadow py-4 px-4">
      <div className="flex items-center flex-row">
        <form action="#">
          <div className="hidden md:flex relative">
            <Search />
          </div>
          <div className="flex md:hidden">
            <a href="#" className="flex items-center justify-center h-10 w-10 border-transparent">
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </a>
          </div>
        </form>
        <div className="flex ml-auto">
          <Link to="/" className="flex flex-row items-center">
            <img
              src={avatar}
              alt
              className="h-10 w-10 bg-gray-200 border rounded-full"
            />
            <span className="flex flex-col ml-2">
                <span className="truncate w-20 font-semibold tracking-wide leading-none">John Doe</span>
                <span className="truncate w-20 text-gray-500 text-xs leading-none mt-1">Manager</span>
              </span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header