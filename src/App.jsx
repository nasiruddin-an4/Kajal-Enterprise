import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TeamProvider } from "./context/TeamContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import TeamMemberDetails from "./pages/TeamMemberDetails";

function App() {
  return (
    <TeamProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/team/:id" element={<TeamMemberDetails />} />
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
