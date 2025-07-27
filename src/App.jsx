import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TeamProvider } from "./context/TeamContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./components/ScrollToTop"; // Add this import
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import TeamMemberDetails from "./pages/TeamMemberDetails";
import ServiceDetails from "./pages/ServiceDetails";
import ImportExportDetails from "./pages/ImportExportDetails";
import ProjectDetails from "./pages/ProjectDetails";
import ArticleDetails from "./pages/ArticleDetails";
import News from "./pages/News";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <TeamProvider>
      <Router>
        <ScrollToTop /> {/* Add this component */}
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team/:id" element={<TeamMemberDetails />} />
              <Route path="/services/:id" element={<ServiceDetails />} />
              <Route
                path="/import-export/:id"
                element={<ImportExportDetails />}
              />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<ArticleDetails />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </TeamProvider>
  );
}

export default App;
