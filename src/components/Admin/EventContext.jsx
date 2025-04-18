import React, { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    startTime: "",
    startPeriod: "AM",
    endTime: "",
    endPeriod: "AM",
    venueName: "",
    venueAddress: "",
    image: null,
    description: "",
    tickets: [],
  });

  return (
    <EventContext.Provider value={{ formData, setFormData }}>
      {children}
    </EventContext.Provider>
  );
};
