import heroImage from "../../assets/undraw_timeline_re_aw6g.svg";

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font min-h-screen">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Public Investment
            <br className="hidden lg:inline-block" />Programming System
          </h1>
          <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
            cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic
            tumeric truffaut hexagon try-hard chambray.</p>
          <div className="flex justify-center">
            <button
              className="inline-flex text-white bg-secondary-500 border-0 py-2 px-6 focus:outline-none hover:bg-secondary-600 rounded text-lg">
              Get Started
            </button>
            <button
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img src={heroImage} className="h-full w-full" alt="hero" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection