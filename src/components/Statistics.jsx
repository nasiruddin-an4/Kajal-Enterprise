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
    <section className="py-20 relative overflow-hidden bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
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
              <p className="text-gray-500 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
