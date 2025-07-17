import { useEffect } from "react";

const About = () => {
  const stats = [
    { label: "Years of Experience", value: "7+", icon: "📅" },
    { label: "Team Members", value: "14", icon: "👥" },
    { label: "Successful Projects", value: "50+", icon: "🎯" },
    { label: "Government Contracts", value: "25+", icon: "🏛️" },
  ];

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "Kajal Enterprise established by Md Saiful Islam Khan with a vision to revolutionize agriculture through technology.",
    },
    {
      year: "2019",
      title: "First Government Contract",
      description:
        "Secured first major contract with Department of Agriculture Extension (DAE) for greenhouse installations.",
    },
    {
      year: "2020",
      title: "Technology Integration",
      description:
        "Introduced IoT-based precision agriculture solutions and smart irrigation systems.",
    },
    {
      year: "2021",
      title: "Partnership Expansion",
      description:
        "Formed strategic partnerships with Sensometer, Radiant Technologies, and Rite Solutions.",
    },
    {
      year: "2022",
      title: "Cold Storage Solutions",
      description:
        "Launched zero energy cooling chambers and specialized storage systems for agricultural produce.",
    },
    {
      year: "2023",
      title: "Solar Integration",
      description:
        "Implemented solar-powered irrigation systems promoting sustainable farming practices.",
    },
    {
      year: "2024",
      title: "Import & Export Expansion",
      description:
        "Expanded services to include agricultural equipment import and garment accessories supply.",
    },
    {
      year: "2025",
      title: "Future Innovation",
      description:
        "Planning data centers, vertical farming, and automated packaging solutions.",
    },
  ];

  const values = [
    {
      title: "Professionalism",
      description:
        "Maintaining the highest standards of professional conduct in all our business operations and client relationships.",
      icon: "🎯",
      color: "bg-blue-500",
    },
    {
      title: "Integrity",
      description:
        "Building trust through honest, transparent, and ethical business practices in every interaction and project.",
      icon: "🛡️",
      color: "bg-green-500",
    },
    {
      title: "Innovation",
      description:
        "Embracing cutting-edge technology and creative solutions to solve agricultural challenges.",
      icon: "💡",
      color: "bg-yellow-500",
    },
    {
      title: "Sustainability",
      description:
        "Committed to environmentally responsible practices that ensure long-term agricultural productivity.",
      icon: "🌱",
      color: "bg-emerald-500",
    },
    {
      title: "Quality Excellence",
      description:
        "Delivering superior products and services that exceed client expectations and industry standards.",
      icon: "⭐",
      color: "bg-purple-500",
    },
    {
      title: "Continuous Improvement",
      description:
        "Constantly evolving and adapting to new technologies and methods to deliver better solutions.",
      icon: "🔄",
      color: "bg-indigo-500",
    },
  ];

  const team = [
    {
      name: "Md Saiful Islam Khan",
      position: "Proprietor & Founder",
      description:
        "Visionary leader with extensive experience in agricultural technology and government contracting.",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    },
    {
      name: "Technical Team",
      position: "8 Specialists",
      description:
        "Expert engineers and technicians specializing in IoT, solar systems, and agricultural technology.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    },
    {
      name: "Operations Team",
      position: "6 Professionals",
      description:
        "Dedicated professionals managing project execution, quality control, and client relations.",
      image:
        "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    },
  ];

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
      {/* Hero Section - Enhanced */}
      <section className="relative h-[600px] bg-gradient-to-br from-brand-green to-brand-green-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg')`,
              filter: "brightness(0.3)",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-5xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
              Pioneering Agricultural Innovation
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-in opacity-90">
              Since 2018, weve been revolutionizing farming practices through
              technology and sustainable solutions.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl"
                >
                  <div className="text-3xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="observe-animation opacity-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Who We Are & What We Do
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Kajal Enterprise is a pioneering government contractor
                  established in 2018, specializing in agricultural technology
                  solutions, import & export services, and garment accessories
                  supply.
                </p>
                <p>
                  Under the leadership of Md Saiful Islam Khan, our dedicated
                  team of 14 professionals is committed to revolutionizing
                  agriculture through innovative technology and sustainable
                  practices.
                </p>
              </div>
            </div>
            <div className="relative observe-animation opacity-0">
              <div className="absolute inset-0 bg-brand-green rounded-3xl transform rotate-3 opacity-10"></div>
              <img
                src="https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern Agriculture"
                className="relative rounded-3xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To transform agricultural practices through innovative
                technology solutions, ensuring sustainable food production while
                supporting farmers with state-of-the-art equipment and systems
                that enhance productivity and reduce environmental impact.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-green to-brand-green-dark text-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
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
            <p className="text-xl text-gray-600">
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
                <p className="text-gray-600 leading-relaxed">
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
            <p className="text-xl text-gray-600">
              Milestones that shaped our success
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-green"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-brand-green font-bold text-xl mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-brand-green rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
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
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-green to-brand-green-dark text-white">
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
