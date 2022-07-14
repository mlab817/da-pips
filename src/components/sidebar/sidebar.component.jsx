import Banner from "../banner/banner.component";
import SidebarItem from "../sidebar-item/sidebar-item.component";
import SidebarHeader from "../sidebar-header/sidebar-header.component";

import avatar from '../../assets/avatar.jpg'
import {Link} from "react-router-dom";

const links = [
  {
    icon: 'HomeIcon',
    label: 'Home',
    to: '/'
  },
  {
    icon: 'DocumentIcon',
    label: 'Activities',
    to: '/activities'
  },
  {
    icon: 'DocumentIcon',
    label: 'Programs',
    to: '/programs'
  },
  {
    icon: 'DocumentIcon',
    label: 'Projects',
    to: '/projects'
  },
  {
    icon: 'DocumentIcon',
    label: 'PIP',
    to: '/pip'
  },
  {
    icon: 'PhoneIcon',
    label: 'Directory',
    to: '/directory'
  },
  {
    icon: 'UsersIcon',
    label: 'Users',
    to: '/users'
  },
  {
    icon: 'PlusCircleIcon',
    label: 'Register',
    to: '/register'
  }
]

const Sidebar = () => {
  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      alert('Logged out')
    } else {
      alert('Cancelled')
    }
  }
  
  return (
    <aside className="w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-indigo-500">
      <Banner />

      <div className="flex flex-col items-center">
        <img src={avatar} className="h-32 w-32 object-cover inline-block rounded-full" alt="user avatar" />
        <span className="mt-4 text-white">Banner Program</span>
      </div>

      <div className="sidebar-content px-4 py-6">
        <ul className="flex flex-col w-full">
          <SidebarHeader title="Menu" />

          {
            links.map(({ to, label, icon }, index) => <SidebarItem key={index} to={to} label={label} icon={icon} />)
          }
          
          <li className="my-px">
            <Link
              to="/"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </span>
              <span className="ml-3">Settings</span>
            </Link>
          </li>
          <li className="my-px">
            <Link
              onClick={handleLogout}
              as="button"
              to="/"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-red-400">
                <svg
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span className="ml-3">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar