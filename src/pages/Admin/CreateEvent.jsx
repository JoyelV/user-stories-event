import { useState } from "react";
import TopNavbar from "../../components/Admin/TopNavbar";
import SideMenu from "../../components/Admin/SideMenu";
import StepOne from "../../components/Admin/StepOne";
import StepTwo from "../../components/Admin/StepTwo";
import StepThree from "../../components/Admin/StepThree";
import { EventProvider } from "../../components/Admin/EventContext";
import "./CreateEvent.css";

function CreateEvent() {
  const [step, setStep] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <EventProvider>
      <TopNavbar />
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        X 
      </button>

      <div className="main-wrapper">
        <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <div className="content-area">
          {step === 1 && <StepOne onNext={() => setStep(2)} />}
          {step === 2 && <StepTwo onNext={() => setStep(3)} />}
          {step === 3 && <StepThree />}
        </div>
      </div>
    </EventProvider>
  );
}

export default CreateEvent;
