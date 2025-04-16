import { assets } from "../assets/assets";
import { BsDot } from "react-icons/bs"; 

export default function EventDetails() {
    return (
      <section>
        <img src={assets.Group} alt="Event" style={{ maxWidth: '600px', width: '100%', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }} />
        <div style={{ display: "flex",justifyContent:"center", alignItems: "center", gap: "8px" }}>
      <p style={{ color: "#0062FF", fontWeight: "bold"}}>
      <BsDot size={24} color="#0062FF" />
        AUGUST 24th, 8:00AM - 9:00AM
      </p>
    </div>
    <p style={{color:"#2E2E3A",fontSize:"32px" ,fontWeight:"500"}}>About the event</p>
        <p style={{color:"#7E7E8F",textAlign:"center",margin:"0px 100px"}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.  
        </p>
        <p style={{color:"#0062FF",fontWeight:"bold"}}>Read More</p>
      </section>
    );
  }