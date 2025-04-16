import { useState } from "react";
import TopNavbar from "../../components/Admin/TopNavbar";
import SideMenu from "../../components/Admin/SideMenu";
import StepOne from "../../components/Admin/StepOne";
import StepTwo from "../../components/Admin/StepTwo";
import { EventProvider } from "../../components/Admin/EventContext";
import StepThree from "../../components/Admin/StepThree";
import "./CreateEvent.css";

function CreateEvent() {
  const [step, setStep] = useState(1);

  return (
    <EventProvider>
      <TopNavbar />
      <div className="main-wrapper">
        <SideMenu />
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
