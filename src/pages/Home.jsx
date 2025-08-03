import Hero from "../components/Hero";
import Services from "../components/Services";
import Partners from "../components/Partners";
import Statistics from "../components/Statistics";
import RecentProjects from "../components/RecentProjects";
import TeamMembers from "../components/TeamMembers";
import NewsArticles from "../components/NewsArticles";
import ClientReviews from "../components/ClientReviews";

const Home = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="statistics">
        <Statistics />
      </section>

      <section id="recent-projects">
        <RecentProjects />
      </section>

      {/* <section id="team">
        <TeamMembers />
      </section> */}

      {/* <section id="news">
        <NewsArticles />
      </section> */}

      {/* <section id="reviews">
        <ClientReviews />
      </section> */}

      <section id="partners">
        <Partners />
      </section>
    </div>
  );
};

export default Home;
