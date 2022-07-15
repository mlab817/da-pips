const FeatureCard = ({ feature: { title, description } }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div
            className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-secondary-500 text-white flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                 strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 className="text-gray-900 text-lg title-font font-medium">{title}</h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">{description}</p>
          <a className="mt-3 text-secondary-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                 strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    title: 'Shooting Stars',
    description: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.'
  },
  {
    title: 'The Catalyzer',
    description: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.'
  },
  {
    title: 'Neptune',
    description: 'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.'
  },
]

const FeaturesSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Features</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            features.map((feature, key) => <FeatureCard key={key} feature={feature} />)
          }
        </div>
        <button
          className="flex mx-auto mt-16 text-white bg-secondary-500 border-0 py-2 px-8 focus:outline-none hover:bg-secondary-600 rounded text-lg">
          More
        </button>
      </div>
    </section>
  )
}

export default FeaturesSection