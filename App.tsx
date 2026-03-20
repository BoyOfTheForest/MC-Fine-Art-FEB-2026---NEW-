import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PressPage } from './pages/PressPage';
import { ContactPage } from './pages/ContactPage';
import { NewsPage } from './pages/NewsPage';
import { CollectionsLandingPage } from './pages/CollectionsLandingPage';
import { CollectionDetailPage } from './pages/CollectionDetailPage';
import { SeriesLandingPage } from './pages/SeriesLandingPage';
import { SeriesDetailPage } from './pages/SeriesDetailPage';
import { SubjectsLandingPage } from './pages/SubjectsLandingPage';
import { SubjectDetailPage } from './pages/SubjectDetailPage';
import { QuizLandingPage } from './pages/QuizLandingPage';
import { GenericPage } from './pages/GenericPage';
import { ArtworkDetailPage } from './pages/ArtworkDetailPage';
import { WaitlistPage } from './pages/WaitlistPage';
import { ScrollRestoration } from './components/ScrollRestoration';
import { ScrollToTopButton } from './components/ScrollToTopButton';

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About & Info Routes */}
            <Route path="/about/services" element={<ServicesPage />} />
            <Route path="/about/meet-matthew" element={<AboutPage />} />
            <Route path="/about/press-kit" element={<PressPage />} />
            <Route path="/about/news" element={<NewsPage />} />
            
            {/* Contact Route */}
            <Route path="/contact" element={<ContactPage />} />

            {/* General About Fallback */}
            <Route path="/about/*" element={<AboutPage />} />

            {/* Collection Routes */}
            <Route path="/collections" element={<CollectionsLandingPage />} />
            <Route path="/collections/:id" element={<CollectionDetailPage />} />

            {/* Series Routes */}
            <Route path="/series" element={<SeriesLandingPage />} />
            <Route path="/series/*" element={<SeriesDetailPage />} />

            {/* Subject Routes */}
            <Route path="/subjects" element={<SubjectsLandingPage />} />
            <Route path="/subjects/:id" element={<SubjectDetailPage />} />

            {/* Artwork Detail Route */}
            <Route path="/artwork/:id" element={<ArtworkDetailPage />} />

            {/* Quiz */}
            <Route path="/quiz" element={<QuizLandingPage />} />

            {/* Waitlist */}
            <Route path="/waitlist" element={<WaitlistPage />} />

            {/* Fallback */}
            <Route path="*" element={<GenericPage />} />
          </Routes>
        </main>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;