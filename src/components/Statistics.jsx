import { useState, useEffect } from "react";

const Statistics = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0,
  });

  const finalValues = {
    projects: 50,
    clients: 25,
    experience: 7,
    satisfaction: 100,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map((key) => {
      const increment = finalValues[key] / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= finalValues[key]) {
          current = finalValues[key];
          clearInterval(intervals.find((i) => i === interval));
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const stats = [
    {
      icon: "🎯",
      value: counters.projects,
      suffix: "+",
      label: "Successful Projects",
      description: "Government contracts completed",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "🏛️",
      value: counters.clients,
      suffix: "+",
      label: "Government Clients",
      description: "Departments served nationwide",
      color: "from-green-500 to-green-600",
    },
    {
      icon: "📅",
      value: counters.experience,
      suffix: "+",
      label: "Years Experience",
      description: "In agricultural technology",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "⭐",
      value: counters.satisfaction,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Project success rate",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Impact in Numbers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-brand-green-dark mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Seven years of excellence in agricultural technology and government
            contracting, delivering innovative solutions that transform farming
            practices across Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              {/* Counter */}
              <div className="mb-2">
                <span
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </span>
                <span
                  className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Decorative Element */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl`}
              ></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Trusted by Government Agencies
            </h3>
            <p className="text-gray-600 mb-6">
              Our proven track record with the Department of Agriculture
              Extension (DAE) and other government bodies demonstrates our
              commitment to excellence and reliability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-brand-green bg-opacity-10 px-6 py-3 rounded-full">
                <span className="text-brand-green font-semibold">
                  ISO Certified
                </span>
              </div>
              <div className="bg-brand-green bg-opacity-10 px-6 py-3 rounded-full">
                <span className="text-brand-green font-semibold">
                  Government Approved
                </span>
              </div>
              <div className="bg-brand-green bg-opacity-10 px-6 py-3 rounded-full">
                <span className="text-brand-green font-semibold">
                  Quality Assured
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
