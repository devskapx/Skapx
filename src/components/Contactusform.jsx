import { useState, useEffect, useRef } from "react";
import { Mail, Phone, Send, Linkedin, Instagram } from "lucide-react";
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

  const [focused, setFocused] = useState({});
  const [isVisible, setIsVisible] = useState({
    leftCard: false,
    rightCards: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const leftCardRef = useRef(null);
  const rightCardsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === leftCardRef.current) {
            setIsVisible((prev) => ({ ...prev, leftCard: true }));
          }
          if (entry.target === rightCardsRef.current) {
            setIsVisible((prev) => ({ ...prev, rightCards: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (leftCardRef.current) observer.observe(leftCardRef.current);
    if (rightCardsRef.current) observer.observe(rightCardsRef.current);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocused({ ...focused, [field]: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - Replace with your actual values
      const serviceID = 'service_wiuqit8';
      const templateID = 'template_neabui9';
      const publicKey = 'lkei2AozOmjDGG2KS';

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        phone: formData.phone,
        email: formData.email,
        queries: formData.queries,
        project: formData.project,
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: publicKey,
          template_params: templateParams,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          queries: "",
          project: "",
        });
        setFocused({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container-cont">
        {/* Left Form Section */}
        <div 
          ref={leftCardRef}
          className={`contact-form-card ${isVisible.leftCard ? 'visible' : ''}`}
        >
          <p className="contact-subtitle">
            SCHEDULE YOUR FREE CONSULTATION, WE BUILD BEYOND YOUR EXPECTATION.
          </p>
          <h2 className="contact-title">Let's Grow Together</h2>

          <div className="contact-form">
            <div className="input-wrapper">
              <label className={`input-label ${focused.firstName || formData.firstName ? 'active' : ''}`}>
                FIRST NAME
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onFocus={() => handleFocus('firstName')}
                onBlur={() => handleBlur('firstName')}
              />
            </div>

            <div className="input-wrapper">
              <label className={`input-label ${focused.lastName || formData.lastName ? 'active' : ''}`}>
                LAST NAME
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onFocus={() => handleFocus('lastName')}
                onBlur={() => handleBlur('lastName')}
              />
            </div>

            <div className="input-wrapper">
              <label className={`input-label ${focused.phone || formData.phone ? 'active' : ''}`}>
                PHONE NUMBER
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={() => handleBlur('phone')}
              />
            </div>

            <div className="input-wrapper">
              <label className={`input-label ${focused.email || formData.email ? 'active' : ''}`}>
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
              />
            </div>

            <div className="input-wrapper">
              <label className={`input-label ${focused.queries || formData.queries ? 'active' : ''}`}>
                MENTION YOUR QUERIES
              </label>
              <input
                type="text"
                name="queries"
                value={formData.queries}
                onChange={handleChange}
                onFocus={() => handleFocus('queries')}
                onBlur={() => handleBlur('queries')}
              />
            </div>

            <div className="input-wrapper">
              <label className={`input-label ${focused.project || formData.project ? 'active' : ''}`}>
                ABOUT PROJECT
              </label>
              <textarea
                name="project"
                rows="6"
                value={formData.project}
                onChange={handleChange}
                onFocus={() => handleFocus('project')}
                onBlur={() => handleBlur('project')}
              />
            </div>

            <button 
              onClick={handleSubmit} 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Launch Inquiry'} <Send size={20} />
            </button>

            {submitStatus === 'success' && (
              <div className="status-message status-success">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message status-error">
                ✗ Failed to send message. Please try again.
              </div>
            )}
          </div>
        </div>

        {/* Right Info Section */}
        <div 
          ref={rightCardsRef}
          className={`contact-info ${isVisible.rightCards ? 'visible' : ''}`}
        >
          <div className="info-card combined-card">
            <a href="mailto:info@skap.com" className="contact-item contact-link">
              <div className="icon-box">
                <Mail size={32} />
              </div>
              <div>
                <p className="info-label">SEND US A MAIL</p>
                <p className="info-text">info@skap.com</p>
              </div>
            </a>
            <a href="tel:+919876541234" className="contact-item contact-link">
              <div className="icon-box">
                <Phone size={32} />
              </div>
              <div>
                <p className="info-label">GIVE US A CALL</p>
                <p className="info-text">91+ 98765-41234</p>
              </div>
            </a>
          </div>

          <a 
            href="https://www.linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="info-card contact-link"
          >
            <div className="icon-box">
              <Linkedin size={32} />  
            </div>
            <div>
              <p className="info-label">DON'T MISS OUR LINKEDIN UPDATES</p>
              <p className="info-text">Connect on LinkedIn</p>
            </div>
          </a>

          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="info-card contact-link"
          >
            <div className="icon-box">
              <Instagram size={32} /> 
            </div>
            <div>
              <p className="info-label">SEE WHAT'S NEW ON OUR POSTS</p>
              <p className="info-text">Follow on Instagram</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}