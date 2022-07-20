import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";

const HeaderSection = () => {
  return (
    <header className="text-gray-600 body-font bg-white shadow">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} className="w-12 h-12 p-2" alt="logo" />
          <span className="ml-3 text-xl">
              {import.meta.env.VITE_APP_NAME}
            </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/home" className="mr-5 hover:text-gray-900">Home</Link>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <Link
          to="/login"
          className="inline-flex items-center bg-secondary-500 border-0 py-2 px-3 focus:outline-none hover:bg-secondary-600 rounded text-base mt-4 md:mt-0 text-white">
          Login
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
               className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </header>
  )
}

export default HeaderSection
