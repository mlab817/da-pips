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
    icon: 'UserGroupIcon',
    label: 'Teams',
    to: '/teams'
  },
  {
    icon: 'UserIcon',
    label: 'Users',
    to: '/users'
  },
  {
    icon: 'PlusCircleIcon',
    label: 'Register',
    to: '/register'
  },
  {
    icon: 'TrendingUpIcon',
    label: 'Tracker',
    to: '/tracker'
  },
  {
    icon: 'DocumentReportIcon',
    label: 'Reports',
    to: '/reports'
  },
  {
    icon: 'CogIcon',
    label: 'Settings',
    to: '/settings'
  }
]

const Sidebar = () => {
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
          
          <SidebarItem icon="LockOpenIcon" label="Logout" to="/logout" />
          
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar