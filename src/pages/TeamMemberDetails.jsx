import { useParams, Link } from "react-router-dom";
import { useTeam } from "../context/TeamContext";

const TeamMemberDetails = () => {
  const { id } = useParams();
  const { allMembers } = useTeam();

  const member = allMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Member Not Found
          </h2>
          <Link to="/" className="text-brand-green hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-brand-green hover:text-brand-green-dark mb-8"
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
          Back to Team
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Image and Basic Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-96">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
                  <p className="text-brand-green bg-white/90 inline-block px-3 py-1 rounded-full text-sm font-medium">
                    {member.position}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* About */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Expertise */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Expertise
                </h2>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience & Education */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Experience
                  </h2>
                  <p className="text-2xl font-bold text-brand-green">
                    {member.experience}
                  </p>
                  <p className="text-gray-600">Professional Experience</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Education
                  </h2>
                  <p className="text-gray-900 font-medium">
                    {member.education}
                  </p>
                </div>
              </div>

              {/* Achievements if available */}
              {member.achievements && (
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Key Achievements
                  </h2>
                  <ul className="space-y-3">
                    {member.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-brand-green mt-1 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetails;
