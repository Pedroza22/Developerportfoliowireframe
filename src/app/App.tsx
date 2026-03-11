import { WireframeNavigation } from './components/wireframes/WireframeNavigation';
import { WireframeHero } from './components/wireframes/WireframeHero';
import { WireframeAbout } from './components/wireframes/WireframeAbout';
import { WireframeProjects } from './components/wireframes/WireframeProjects';
import { WireframeExperience } from './components/wireframes/WireframeExperience';
import { WireframeEducation } from './components/wireframes/WireframeEducation';
import { WireframeHobbies } from './components/wireframes/WireframeHobbies';
import { WireframeContact } from './components/wireframes/WireframeContact';
import { WireframeFooter } from './components/wireframes/WireframeFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <WireframeNavigation />
      <WireframeHero />
      <WireframeAbout />
      <WireframeProjects />
      <WireframeExperience />
      <WireframeEducation />
      <WireframeHobbies />
      <WireframeContact />
      <WireframeFooter />
    </div>
  );
}
