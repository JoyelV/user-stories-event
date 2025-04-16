import { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    venue: "",
    address: "",
    image: null,
    description: "",
  });

  return (
    <EventContext.Provider value={{ formData, setFormData }}>
      {children}
    </EventContext.Provider>
  );
};
