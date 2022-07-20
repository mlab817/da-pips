import FeaturesSection from "../components/features/features.component";
import OurTeamSection from "../components/our-team/our-team.component";
import ContactUsSection from "../components/contact-us/contact-us.component";
import FooterSection from "../components/footer-section/footer-section.component";

import PipSection from "../components/pip/pip.component";
import HeroSection from "../components/hero/hero.component";
import HeaderSection from "../components/header-section/header-section.component";
import DaPipSection from "../components/da-pip/da-pip.component";

const LandingPage = () => {
  return (
    <div className="bg-gray-50">
      <HeaderSection />

      <HeroSection />

      <PipSection />

      <DaPipSection />

      <FeaturesSection />

      <OurTeamSection />

      <ContactUsSection />

      <FooterSection />
    </div>
  )
}

export default LandingPage