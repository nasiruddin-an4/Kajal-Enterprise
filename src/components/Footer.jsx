import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-brand-green mb-4">
              Kajal Enterprise
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Connecting innovation with agriculture
            </p>
            <p className="text-gray-400 leading-relaxed">
              Leading government contractor specializing in agricultural
              technology solutions, import & export services, and sustainable
              farming practices since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-brand-green transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-brand-green transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-400 hover:text-brand-green transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-400 hover:text-brand-green transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-brand-green transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">
                H # 500, 3rd floor, R # 7, A # 4<br />
                Mirpur DOHS, Dhaka - 1216
                <br />
                Bangladesh
              </p>
              <p className="text-gray-400 text-sm">
                <a
                  href="mailto:kajalenterprise@gmail.com"
                  className="hover:text-brand-green transition-colors"
                >
                  kajalenterprise@gmail.com
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                <a
                  href="tel:+8801795075025"
                  className="hover:text-brand-green transition-colors"
                >
                  +880 1795 075 025
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h5 className="text-sm font-semibold text-brand-green mb-2">
                Government Tenders
              </h5>
              <p className="text-xs text-gray-400">
                Greenhouse, Cold Storage, Precision Agriculture, Solar
                Irrigation
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-brand-green mb-2">
                Import & Export
              </h5>
              <p className="text-xs text-gray-400">
                Agriculture Equipment, Electronics, Construction Materials
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-brand-green mb-2">
                Innovation
              </h5>
              <p className="text-xs text-gray-400">
                Data Centre, Vertical Farming, Automated Systems
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Kajal Enterprise. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-xs text-gray-500">
              Proprietor: Md Saiful Islam Khan
            </span>
            <span className="text-xs text-gray-500">Est. 2018</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
