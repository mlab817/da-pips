const members = [
  {
    name: 'Joseph Manicad',
    position: 'Planning Officer V'
  },
  {
    name: 'Kristine Eusebio',
    position: 'Planning Officer II'
  },
  {
    name: 'Andreah Kate Orlina',
    position: 'Planning Officer II'
  },
  {
    name: 'Alexander Estoesta III',
    position: 'Planning Officer II'
  },
  {
    name: 'Angel Mae Conda',
    position: 'Science Research Specialist I'
  },
  {
    name: 'Jerech Flauta',
    position: 'Administrative Assistant VI'
  },
  {
    name: 'Victoria Alay',
    position: 'Administrative Assistant VI'
  },
  {
    name: 'Eloisa Marie Vergara',
    position: 'Planning Officer I'
  },
  {
    name: 'Mark Lester Bolotaolo',
    position: 'Planning Officer IV (Consultant)'
  }
]

const OurTeamSection = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn
            asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>

        <div className="flex flex-wrap -m-2">
          {
            members.map((member, key) => (
              <div key={key} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img alt="team"
                       className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                       src={`https://robohash.org/${member.name}`} />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">{btoa(member.name)}</h2>
                    <p className="text-gray-500">{member.position}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default OurTeamSection
