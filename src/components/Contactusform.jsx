import { useState } from "react";
import { Mail, Phone, Send,} from "lucide-react";
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
import "../styles/Contactusform.css";

export default function Contactusform() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    queries: "",
    project: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container-cont">
        {/* Left Form Section */}
        <div className="contact-form-card">
          <p className="contact-subtitle">
            SCHEDULE YOUR FREE CONSULTATION, WE BUILD BEYOND YOUR EXPECTATION.
          </p>
          <h2 className="contact-title">Let's Grow Together</h2>

          <div className="contact-form">
            <input
              type="text"
              name="firstName"
              placeholder="FIRST NAME"
              value={formData.firstName}
              onChange={handleChange}
            />

            <input
              type="text"
              name="lastName"
              placeholder="LAST NAME"
              value={formData.lastName}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="PHONE NUMBER"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="queries"
              placeholder="MENTION YOUR QUERIES"
              value={formData.queries}
              onChange={handleChange}
            />

            <textarea
              name="project"
              placeholder="ABOUT PROJECT"
              rows="6"
              value={formData.project}
              onChange={handleChange}
            />

            <button onClick={handleSubmit} className="submit-btn">
              Launch Inquiry <Send size={20} />
            </button>
          </div>
        </div>

        {/* Right Info Section */}
        <div className="contact-info">
          <div className="info-card">
            <div className="icon-box">
              <Mail size={32} />
            </div>
            <div>
              <p className="info-label">SEND US A MAIL</p>
              <p className="info-text">info@skap.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-box">
              <Phone size={32} />
            </div>
            <div>
              <p className="info-label">GIVE US A CALL</p>
              <p className="info-text">+91 98765 41234</p>
            </div>
          </div>

            <div className="info-card">
                <div className="icon-box">
                  <Linkedin size={32} />  
                </div>
                <div>
                <p className="info-label">DON'T MISS OUR LINKEDIN UPDATES</p>
              <p className="info-text">Connect on LinkedIn</p>
                </div>
            </div>

          <div className="info-card">
            <div className="icon-box">
              <Instagram size={32} /> 
            </div>
            <div>
              <p className="info-label">SEE WHAT'S NEW ON OUR POSTS</p>
              <p className="info-text">Follow on Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
