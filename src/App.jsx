import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import KelasPage from './pages/KelasPage';
import TestimonialPage from './pages/TestimonialPage';
import SyaratKetentuanPage from './pages/SyaratKetentuanPage';
import FaqPage from './pages/FaqPage';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syarat" Component={SyaratKetentuanPage} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
