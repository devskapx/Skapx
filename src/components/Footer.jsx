import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Footer.css";
import contactImage from "../../public/images/unnamed.svg";
import logo from "../../public/images/logo.svg";
import {
  Facebook,
  Instagram,
  YouTube,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    // 1️⃣ INTERNAL EMAIL TO BOSS + HR + TL (FIXED FORMAT)
    emailjs
      .send(
        "service_wiuqit8", // Replace with your FULL service ID
        "template_t82nu1q", // Replace with FULL template ID
        {
          from_name: form.name,
          reply_to: form.email,
          phone: form.phone,

          // ⭐ FIXED Multiple Recipient Format (Correct commas)
          to_email:
            "info@skapx.com, hr@skapx.com, sanjay@skapx.com, kalai@skapx.com",
        },
        "lkei2AozOmjDGG2KS" // Replace with your FULL public key
      )
      .then(() => {
        console.log("Internal email sent successfully!");

        alert("Thank you! Your message has been sent successfully.");
        setForm({ name: "", email: "", phone: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Try again.");
        setLoading(false);
      });
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Services", href: "/services" },
  ];

  const contactDetails = [
    { label: "Phone", value: "+91 999-99-99", type: "phone" },
    { label: "Email", value: "Info@skapx.com", type: "email" },
    { label: "Location", value: "India", type: "location" },
  ];

  const handleContactClick = (detail) => {
    if (detail.type === "phone") window.open(`tel:${detail.value}`, "_self");
    else if (detail.type === "email")
      window.open(`mailto:${detail.value}`, "_self");
    else alert(`Location: ${detail.value}`);
  };

  const socialLinks = [
    { name: "", icon: <Facebook />, url: "https://facebook.com" },
    { name: "", icon: <Instagram />, url: "https://instagram.com" },
    { name: "", icon: <YouTube />, url: "https://youtube.com" },
    { name: "", icon: <Twitter />, url: "https://twitter.com" },
  ];

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleBrandClick = () => {
    alert("SkapX - Your trusted technology partner");
  };

  return (
    <main className="contact-main">
      <div className="contact-container">
        
        {/* Contact Form */}
        <section className="contact-form-section">
          <div className="form-box">
            <h3 className="form-heading">GET IN TOUCH</h3>
            <h2 className="form-subtitle">
              Seeking personalized support?{" "}
              <span className="highlight-text-footr">
                Request a call from our team
              </span>
            </h2>

            <form onSubmit={handleSubmit} className="form">
              <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="EMAIL ID"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="PHONE NUMBER"
                value={form.phone}
                onChange={handleChange}
              />

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Schedule Free Consultation"}
              </button>
            </form>

            <div className="policy-links">
              <button type="button" onClick={() => alert("Privacy Policy clicked")}>
                Privacy Policy
              </button>
              <span>|</span>
              <button type="button" onClick={() => alert("Terms of Service clicked")}>
                Terms of Service
              </button>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="info-section">
          <p className="info-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <div className="links-contact-row">
            <nav className="quick-links">
              <h4>QUICK LINKS</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button className="link-btn">{link.label}</button>
                  </li>
                ))}
              </ul>
            </nav>

            <address className="contact-info">
              <h4>CONTACT US</h4>
              <ul>
                {contactDetails.map((detail) => (
                  <li key={detail.label}>
                    <button
                      onClick={() => handleContactClick(detail)}
                      className="link-btn"
                    >
                      {detail.value}
                    </button>
                  </li>
                ))}
              </ul>
            </address>
          </div>

          <nav className="social-links">
            {socialLinks.map((s) => (
              <button
                key={s.name}
                onClick={() => handleSocialClick(s.url)}
                className="social-btn"
              >
                {s.icon}
                <span>{s.name}</span>
              </button>
            ))}
          </nav>

          <footer className="copyright">
            © 2025 — Copyright | SkapX
          </footer>
        </section>

        <aside className="branding">
          <button onClick={handleBrandClick} className="brand-btn">
            <img src={logo} alt="SkapX Logo" className="brand-logo" />
          </button>
        </aside>
      </div>
    </main>
  );
};

export default Footer;
