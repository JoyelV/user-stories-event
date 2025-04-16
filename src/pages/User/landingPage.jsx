import Navbar from '../../components/Navbar';
import EventPage from '../../components/EventDetails';
import TicketCard from '../../components/TicketCard';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import './landingPage.css';

function LandingPage() {
  return (
    <>
      <div id="home">
        <Navbar />
        <EventPage />
      </div>
      <div id="tickets">
        <TicketCard />
      </div>
      <ContactSection />
      <Footer />
    </>
  )
}

export default LandingPage;