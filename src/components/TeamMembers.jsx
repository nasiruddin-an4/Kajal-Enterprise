import { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useTeam } from "../context/TeamContext";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamMembers = () => {
  const { allMembers } = useTeam();

  // Slider settings
  const settings = {
    dots: false,
    infinite: allMembers.length > 3,
    speed: 500,
    slidesToShow: Math.min(allMembers.length, 4),
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
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-brand-green mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Our dedicated team of experts bringing innovation to agriculture
          </p>
        </div>

        {/* Enhanced Team Members Carousel */}
        <div className="relative px-4 py-4 overflow-hidden">
          <Slider {...settings} className="team-carousel">
            {allMembers.map((member, index) => (
              <div key={index} className="px-4">
                <Link
                  to={`/team/${member.id}`}
                  className="block group relative"
                >
                  <div className="bg-white rounded-xl shadow transition-all duration-500 transform overflow-hidden h-full border border-gray-100">
                    {/* Member Image with Enhanced Overlay */}
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Social Media Icons - Show on Hover */}
                      <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-4 transform translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                        {member.social?.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-brand-green hover:scale-110 transition-all duration-300"
                          >
                            <i className="ri-linkedin-fill text-xl text-white"></i>
                          </a>
                        )}
                        {member.social?.twitter && (
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-brand-green hover:scale-110 transition-all duration-300"
                          >
                            <i className="ri-twitter-fill text-xl text-white"></i>
                          </a>
                        )}
                        {member.social?.facebook && (
                          <a
                            href={member.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-brand-green hover:scale-110 transition-all duration-300"
                          >
                            <i className="ri-facebook-fill text-xl text-white"></i>
                          </a>
                        )}
                        <a
                          href={`mailto:${member.email}`}
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-brand-green hover:scale-110 transition-all duration-300"
                        >
                          <i className="ri-mail-line text-xl text-white"></i>
                        </a>
                      </div>

                      {/* Member Info with Enhanced Animation */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-xl font-bold text-white">
                          {member.name}
                        </h3>
                        <p className="text-gray-300 text-sm ">
                          {member.position}
                        </p>
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
