import { useEffect } from "react";
import { Link } from "react-router-dom";
import aboutData from "../data/about.json";
import teadDetails from "../data/teamDetails.json";
import { motion } from "framer-motion";

const About = () => {
  const { hero, overview, missionVision, values, timeline, team, cta } =
    aboutData;
  const { teamDetails } = teadDetails;

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".observe-animation");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-16">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[700px] bg-gradient-to-br from-brand-green to-brand-green-dark text-white overflow-hidden">
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="h-full w-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('${hero.background}')`,
              filter: "brightness(0.3)",
            }}
          ></motion.div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90">
              {hero.subtitle}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {hero.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-500 leading-relaxed">
                To transform agricultural practices through innovative
                technology solutions, ensuring sustainable food production while
                supporting farmers with state-of-the-art equipment and systems
                that enhance productivity and reduce environmental impact.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-green to-green-900 text-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🔮</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="leading-relaxed opacity-90">
                To become the leading provider of agricultural technology
                solutions in Bangladesh, creating a sustainable ecosystem where
                traditional farming meets modern innovation, contributing to
                national food security and economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-500">
              The principles that guide our journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className={`${value.color} bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6`}
                >
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-500">
              Milestones that shaped our success
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[16px] md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-brand-green"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start ${
                    // On mobile: always left-aligned
                    // On desktop: alternate between left and right
                    index % 2 === 0
                      ? "md:flex-row"
                      : "flex-row md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-brand-green font-bold text-xl mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-brand-green rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Empty space for desktop layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-500">
              The people behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                    <p className="text-brand-green bg-white/90 inline-block px-3 py-1 rounded-full text-sm font-medium">
                      {member.position}
                    </p>
                    <p className="mt-3 text-white/90">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-green to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Transform Agriculture?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join us in revolutionizing farming practices through innovative
            technology and sustainable solutions.
          </p>
          <button className="bg-white text-brand-green px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
