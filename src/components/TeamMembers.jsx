import { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useTeam } from "../context/TeamContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamMembers = () => {
  const { allMembers } = useTeam();

  // Slider settings
  const settings = {
    dots: false,
    infinite: allMembers.length > 3,
    speed: 500,
    slidesToShow: Math.min(allMembers.length, 3),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(allMembers.length, 2),
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
            Meet Our Expert Team
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-brand-green to-brand-green-dark"></div>
          </h2>
        </div>

        {/* Team Members Carousel */}
        <div className="relative px-4 py-4">
          <Slider {...settings} className="team-carousel -mx-4">
            {allMembers.map((member, index) => (
              <div key={index} className="px-4">
                <Link
                  to={`/team/${member.id}`}
                  className="block hover:no-underline"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full border border-gray-100">
                    {/* Member Image with Gradient Overlay */}
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-1">
                          {member.name}
                        </h3>
                        <p className="text-brand-green bg-white/90 inline-block px-3 py-1 rounded-full text-sm font-medium">
                          {member.position}
                        </p>
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="p-6">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {member.description}
                      </p>

                      {/* Quick Info */}
                      <div className="space-y-2 text-sm border-t pt-4 border-gray-100">
                        <div className="flex items-center">
                          <span className="text-gray-500">Experience:</span>
                          <span className="ml-2 font-medium text-gray-900">
                            {member.experience} years
                          </span>
                        </div>
                      </div>

                      {/* View Profile Button */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <Link
                          to={`/team/${member.id}`}
                          className="inline-flex items-center justify-center w-full bg-brand-green hover:bg-brand-green text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          <span>View Full Profile</span>
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
