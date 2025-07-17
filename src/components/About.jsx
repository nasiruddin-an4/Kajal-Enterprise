const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
            About Kajal Enterprise
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-brand-green to-brand-green-dark"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">
            Pioneering agricultural technology solutions since 2018
          </p>
        </div>

        {/* Main Content with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-green rounded-3xl transform rotate-3 opacity-10"></div>
            <img
              src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Modern Agriculture"
              className="relative rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Who We Are & What We Do
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Kajal Enterprise is a pioneering government contractor established
              in 2018, specializing in agricultural technology solutions, import
              & export services, and garment accessories supply.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Under the leadership of Md Saiful Islam Khan, our dedicated team
              of 14 professionals is committed to revolutionizing agriculture
              through innovative technology and sustainable practices.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-brand-green mb-2">
                  14+
                </div>
                <div className="text-gray-600">Professional Team Members</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-brand-green mb-2">
                  5+
                </div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="bg-brand-green bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-brand-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To transform agricultural practices through innovative technology
              solutions, ensuring sustainable food production while supporting
              farmers with state-of-the-art equipment and systems that enhance
              productivity and reduce environmental impact.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="bg-brand-green bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-brand-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become the leading provider of agricultural technology
              solutions in Bangladesh, creating a sustainable ecosystem where
              traditional farming meets modern innovation, contributing to
              national food security and economic growth.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-16">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Professionalism",
                description:
                  "Maintaining the highest standards of professional conduct in all our business operations and client relationships.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
              {
                title: "Integrity",
                description:
                  "Building trust through honest, transparent, and ethical business practices in every interaction and project.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                ),
              },
              {
                title: "Innovation",
                description:
                  "Constantly evolving and adapting to new technologies and methods to deliver better solutions for our clients.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                ),
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="bg-brand-green bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-brand-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {value.icon}
                  </svg>
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
      </div>
    </section>
  );
};

export default About;
