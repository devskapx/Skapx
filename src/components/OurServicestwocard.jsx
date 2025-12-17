import React from 'react';
import { Cpu, Briefcase } from 'lucide-react';
import ArrowIcon from '../../public/images/arrow-right.svg'; // Your SVG image path
import '../styles/OurServicestwocard.css';

export default function OurServicestwocard() {
  const techSolutions = [
    {
      title: 'Mobile Experience Engineering',
      description: 'Scalable And Intuitive Mobile Apps For iOS & Android.'
    },
    {
      title: 'Next-Gen Web Solutions',
      description: 'High-Performance Web Platforms Tailored For Growth'
    },
    {
      title: 'SaaS Product Innovation',
      description: 'Build And Scale Subscription-Based SaaS Products With Ease.'
    },
    {
      title: 'Experience Design (UI/UX Studio)',
      description: 'Human-First Designs That Engage And Convert.'
    },
    {
      title: 'Intelligent Automation',
      description: 'Smarter Workflows And Insights Powered By AI.'
    },
    {
      title: 'API Ecosystem & Integration',
      description: 'Connect Your Business With Secure, Seamless Integration.'
    }
  ];

  const hiringSolutions = [
    {
      title: 'Talent Acquisition & Workforce Strategy',
      description: 'Find The Right Talent Aligned With Your Business Goals.'
    },
    {
      title: 'Executive & Leadership Hiring',
      description: 'Secure Leaders Who Can Drive Growth And Transformation.'
    },
    {
      title: 'Recruitment Process Outsourcing',
      description: 'End-To-End Hiring Handled By Our Experts, Saving Time And Costs.'
    },
    {
      title: 'Employer Branding & Culture Design',
      description: 'Position Your Brand As The Workplace Of Choice.'
    },
    {
      title: 'HR Automation & Digital Systems',
      description: 'Streamline HR With Smart, Tech-Enabled Solutions.'
    },
    {
      title: 'Payroll & Compliance Management',
      description: 'Hassle-Free Payroll And 100% Compliance Guaranteed.'
    },
    {
      title: 'Onboarding & Employee Experience',
      description: 'Deliver Seamless Employee Journeys From Day One.'
    }
  ];

  return (
    <div className="services-container">
      <div className="services-wrapper">
        <div className="services-grid">
          {/* Tech Solutions Section */}
          <div className="service-card">
            <div className="service-header">
              <div className="icon-wrapper">
                <Cpu className="icon" />
              </div>
              <h2 className="service-title">Tech Solutions</h2>
            </div>

            <div className="solutions-list">
              {techSolutions.map((solution, index) => (
                <div key={index} className="solution-item">
                  <div className="solution-content">
                    <div className="arrow-wrapper">
                      <img src={ArrowIcon} alt="arrow" className="arrow-icon" />
                    </div>
                    <div>
                      <h3 className="solution-title">
                        {solution.title}
                      </h3>
                      <p className="solution-description">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hiring Solutions Section */}
          <div className="service-card">
            <div className="service-header">
              <div className="icon-wrapper">
                <Briefcase className="icon" />
              </div>
              <h2 className="service-title">Hiring Solutions</h2>
            </div>

            <div className="solutions-list">
              {hiringSolutions.map((solution, index) => (
                <div key={index} className="solution-item">
                  <div className="solution-content">
                    <div className="arrow-wrapper">
                      <img src={ArrowIcon} alt="arrow" className="arrow-icon" />
                    </div>
                    <div>
                      <h3 className="solution-title">
                        {solution.title}
                      </h3>
                      <p className="solution-description">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="cta-wrapper">
          <button className="cta-button">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}