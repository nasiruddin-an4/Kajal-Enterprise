import Hero from "../components/Hero";
import Services from "../components/Services";
import Partners from "../components/Partners";
import Statistics from "../components/Statistics";
import RecentProjects from "../components/RecentProjects";
import TeamMembers from "../components/TeamMembers";
import NewsArticles from "../components/NewsArticles";
import ClientReviews from "../components/ClientReviews";
import { useNavigation } from '../context/NavigationContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { setLastSection, lastSection } = useNavigation();
  const navigate = useNavigate();

  const handleSectionClick = (sectionId) => {
    setLastSection(sectionId);
  };

  const handleBack = () => {
    if (lastSection) {
      navigate('/');
      setTimeout(() => {
        scrollToSection(lastSection);
      }, 100);
    } else {
      navigate('/');
    }
  };

  return (
    <div>
      <button
        onClick={handleBack}
        className="inline-flex items-center text-brand-green hover:text-brand-green mb-8"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </button>

      <section id="home" onClick={() => handleSectionClick('home')}>
        <Hero />
      </section>

      <section id="services" onClick={() => handleSectionClick('services')}>
        <Services />
      </section>

      <section id="statistics" onClick={() => handleSectionClick('statistics')}>
        <Statistics />
      </section>

      <section id="recent-projects" onClick={() => handleSectionClick('recent-projects')}>
        <RecentProjects />
      </section>

      <section id="partners" onClick={() => handleSectionClick('partners')}>
        <Partners />
      </section>
    </div>
  );
};

export default Home;
