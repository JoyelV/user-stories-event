import Navbar from '../../components/User/Navbar';
import TicketCard from '../../components/User/TicketCard';
import ContactSection from '../../components/User/ContactSection';
import Footer from '../../components/User/Footer';
import EventDetails from '../../components/User/EventDetails';
import EventPage from '../../components/User/HeroSection';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './landingPage.css';

const apiUrl = import.meta.env.VITE_BACKEND_URL;

function LandingPage() {
  const { eventId } = useParams(); 
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        console.log("id",eventId);
        const res = await fetch(`${apiUrl}/api/events/${eventId}`);
        const data = await res.json();
        console.log(data,"data");
        setEventData(data);
      } catch (err) {
        console.error('Error fetching event:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (loading) return <p>Loading...</p>;
  if (!eventData) return <p>Event not found.</p>;

  return (
    <>
      <div id="home">
        <Navbar />
        <EventPage eventData={eventData} />
        <EventDetails eventData={eventData}/>
      </div>
      <div id="tickets">
        <TicketCard eventData={eventData}/>
      </div>
      <ContactSection />
      <Footer />
    </>
  )
}

export default LandingPage;