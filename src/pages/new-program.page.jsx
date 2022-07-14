import MainLayout from "../layouts/main/main.layout";
import PageContent from "../components/page-content/page-content.component";
import PageTitle from "../components/page-title/page-title.component";
import {useState} from "react";
import {PlusCircleIcon} from "@heroicons/react/solid";

const NewProgramPage = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const handleNext = () => setCurrentPage(currentPage => currentPage + 1)

  const handlePrevious = () => setCurrentPage(currentPage => currentPage - 1)

  const handleCurrentPage = (page) => setCurrentPage(page)

  return (
    <MainLayout>
      <PageTitle title="New Program" />

      <PageContent>
        {currentPage}
        <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">

          <div className="flex mx-auto flex-wrap mb-20">
            <a
              onClick={() => handleCurrentPage(1)}
              className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t cursor-pointer">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                   className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              STEP 1
            </a>

            <a onClick={() => handleCurrentPage(2)}
              className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider cursor-pointer">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                   className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
              STEP 2
            </a>

            <a onClick={() => handleCurrentPage(3)}
              className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider cursor-pointer">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                   className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="3"/>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"/>
              </svg>
              STEP 3
            </a>

            <a onClick={() => handleCurrentPage(4)}
              className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider cursor-pointer">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                   className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              STEP 4
            </a>
          </div>

          <div className="flex flex-col">
            <img className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
               alt="hero" src="https://dummyimage.com/720x600" />
            <div className="flex flex-col text-center w-full">
              <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-relaxed text-base text-gray-600">Program Name</label>
                <input type="text" id="full-name" name="full-name"
                       className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">Description</p>
            </div>
          </div>

          <div className="flex flex-col mb-20">
            <img className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
                 alt="hero" src="https://dummyimage.com/720x600" />
            <div className="flex flex-col text-center w-full">
              <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-relaxed text-base text-gray-600">Add Subprograms</label>
                <input type="text" id="full-name" name="full-name"
                       className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">Description</p>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <div className="flex flex-row mb-4">
              <input type="text"
                     placeholder="Activity..."
                     className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              <PlusCircleIcon className="h-12 w-12 text-gray-500 ml-3" />
            </div>
          </div>

          <div className="flex flex-col">
            <img className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
                 alt="hero" src="https://dummyimage.com/720x600" />
            <div className="flex flex-col text-center w-full">
              <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-relaxed text-base text-gray-600">Add Contributors</label>
                <input type="text" id="full-name" name="full-name"
                       className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">Description</p>
            </div>
          </div>
        </div>
      </PageContent>
    </MainLayout>
  )
}

export default NewProgramPage