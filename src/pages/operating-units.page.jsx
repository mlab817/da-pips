import MainLayout from "../layouts/main/main.layout";
import PageTitle from "../components/page-title/page-title.component";
import PageContent from "../components/page-content/page-content.component";

const ous = [
  {
    acronym: 'CO',
    type: 'osec'
  },
  {
    acronym: 'RFO 1',
    type: 'osec'
  },
  {
    acronym: 'BPI',
    type: 'osec'
  },
  {
    acronym: 'ACPC',
    type: 'attached_agencies'
  },
  {
    acronym: 'PCA',
    type: 'attached_corporations'
  }
]

const OperatingUnitsPage = () => {
  return (
    <MainLayout>
      <PageTitle title="Operating Units" />

      <PageContent>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {
                ous.map((ou, key) => (
                  <div key={key} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{ou.type.toUpperCase()}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{ou.acronym}</h2>
                      <p className="mt-1">$16.00</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </PageContent>
    </MainLayout>
  )
}

export default OperatingUnitsPage
