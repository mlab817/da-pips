import avatar from '../../assets/avatar.jpg';
import {Link} from 'react-router-dom';
import Search from '../search/search.component';
import {BellIcon, SearchIcon} from '@heroicons/react/solid';

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
              <SearchIcon
                className="h-6 w-6 text-gray-500"
              />
            </a>
          </div>
        </form>
        <div className="flex ml-auto">
          <Link to="/" className="flex flex-row items-center mr-3">
            <BellIcon className="h-6 w-6 text-gray-700" />
          </Link>
          
          <Link to="/" className="flex flex-row items-center">
            <img
              src={avatar}
              alt
              className="h-10 w-10 bg-gray-200 border rounded-full"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header