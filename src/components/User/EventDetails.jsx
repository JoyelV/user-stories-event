import { BsDot } from "react-icons/bs";

export default function EventDetails({ eventData }) {
  if (!eventData) return null;

  const {
    date,
    startTime,
    startPeriod,
    endTime,
    endPeriod,
    description,
  } = eventData;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <p style={{ color: "#0062FF", fontWeight: "bold" }}>
          <BsDot size={24} color="#0062FF" />
          {formattedDate.toUpperCase()}, {startTime} {startPeriod} - {endTime} {endPeriod}
        </p>
      </div>
      <p style={{ color: "#2E2E3A", fontSize: "32px", fontWeight: "500" }}>
        About the event
      </p>
      <p style={{ margin: "0 auto", maxWidth: "800px", padding: "0 20px",color:"#7E7E8F" }}>
        {description}
      </p>
      <p style={{ color: "#0062FF", fontWeight: "bold" }}>Read More</p>
    </section>
  );
}
