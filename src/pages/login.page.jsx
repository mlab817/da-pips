import { useState } from "react";
import {EyeIcon, EyeOffIcon, LockClosedIcon, UserIcon} from "@heroicons/react/solid";
import {Link} from "react-router-dom";
import googleSignIn from '../assets/google_sign_in.svg'
import Footer from "../components/footer/footer.component";

const defaultFormFields = {
  username: '',
  password: ''
}

const LoginPage = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = ({ target: { name, value } }) => {
    setFormFields({
      ...formFields,
      [name]: value
    })
  }

  const toggleShowPassword = () => setShowPassword(!showPassword)

  const handleLogin = () => {
    if (!formFields.username || !formFields.password) {
      return alert('Please enter username and password')
    }

    console.log('handle login')
  }

  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-50 min-h-screen">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-1/2 md:w-1/2 md:pr-16 lg:pr-0 pr-0 flex flex-col">
            <div className="pr-0">
              <h1 className="title-font font-bold text-3xl text-primary-500">
                Public Investment Programming System
              </h1>
              <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify
                hammock starladder roathse. Craies vegan tousled etsy austin.</p>
            </div>
          </div>

          <div className="lg:w-2/6 md:w-1/2 bg-white shadow rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <label htmlFor="username" className="leading-7 text-sm text-gray-600">Username</label>
            <div className="relative mb-4">
              <input type="text" id="username" name="username"
                     autoFocus
                     onChange={handleChange}
                     placeholder="Username"
                     className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-10 leading-8 transition-colors duration-200 ease-in-out" />
              <UserIcon className="pointer-events-none w-6 h-6 absolute left-0 top-0 mt-2 ml-2 text-gray-500" />
            </div>
            <div className="flex flex-row items-center justify-between">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
              <Link to="/reset" className="text-sm text-indigo-500">Forgot Password?</Link>
            </div>
            <div className="relative mb-4">
              <input type={`${showPassword ? 'text' : 'password'}`} id="password" name="password"
                     placeholder="********"
                     onChange={handleChange}
                     className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-10 leading-8 transition-colors duration-200 ease-in-out" />
              <LockClosedIcon className="pointer-events-none absolute top-0 left-0 mt-2 ml-2 h-6 w-6 text-gray-500" />

              {
                showPassword
                  ? <EyeOffIcon className="absolute top-0 right-0 mt-2 mr-2 h-6 w-6 cursor-pointer text-gray-500" onClick={toggleShowPassword} />
                  : <EyeIcon className="absolute top-0 right-0 mt-2 mr-2 h-6 w-6 cursor-pointer text-gray-500" onClick={toggleShowPassword} />
              }
            </div>
            <button
              onClick={handleLogin}
              className="text-white bg-secondary-500 border-0 py-2 px-8 focus:outline-none hover:bg-secondary-600 rounded text-lg text-white my-4">
              Login
            </button>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-800">OR</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <button
              className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-700 rounded text-lg my-4">
              <img src={googleSignIn} className="h-6 w-6 mr-6 inline-block"  alt="google sign in" />
              Sign in with Google
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default LoginPage