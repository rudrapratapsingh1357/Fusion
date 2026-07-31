import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Bot, Plane } from 'lucide-react';

const C = {
  cyan: '#00FFFF',
  border: '#1e1e1e',
  muted: '#6B7280',
  secondary: '#9CA3AF',
};

const Join = () => {
  // Form state for validation and display, even though submission is disabled
  const [formData, setFormData] = useState({
    fullName: '',
    courseBranch: '',
    yearOfStudy: '',
    email: '',
    whatsappNumber: '',
    iotKnowledge: '',
    roboticsKnowledge: '',
    uavKnowledge: '',
    experience: '',
    reason: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate fields just to demonstrate client-side feedback/validation capability
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.courseBranch.trim()) newErrors.courseBranch = 'Course / Branch is required';
    if (!formData.yearOfStudy) newErrors.yearOfStudy = 'Year of Study is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'Contact number is required';
    }

    setErrors(newErrors);
  };

  const domainHighlights = [
    {
      Icon: Wifi,
      title: 'Internet of Things',
      desc: 'Work with sensor ecosystems, microcontrollers, and localized data telemetry.',
    },
    {
      Icon: Bot,
      title: 'Robotics',
      desc: 'Build smart mechanical actuators, physical robots, and direct control logic.',
    },
    {
      Icon: Plane,
      title: 'UAVs & Drones',
      desc: 'Design flight systems, payload mechanics, and autonomous navigation.',
    },
  ];

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 pt-8 pb-16">
        
        {/* ── LEFT COLUMN: INFO & INTRO ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Apply for Membership</span>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              color: '#fff',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
            }}
          >
            Join FUSION<span style={{ color: C.cyan }}>.</span>
          </h1>

          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.05rem',
              color: C.secondary,
              lineHeight: 1.75,
              marginBottom: '32px',
              maxWidth: '480px',
            }}
          >
            FUSION welcomes students who are experienced builders and those who are only beginning to explore IoT, Robotics, and UAVs.
          </p>

          <blockquote
            style={{
              borderLeft: `2px solid ${C.cyan}`,
              paddingLeft: '20px',
              margin: '0 0 40px 0',
            }}
          >
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.15rem',
                fontWeight: 500,
                color: '#fff',
                lineHeight: 1.6,
                letterSpacing: '-0.01em',
              }}
            >
              "You don't need to know everything before joining."
            </p>
          </blockquote>

          {/* Domain lists/highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#fff',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              What you can explore
            </h3>
            
            {domainHighlights.map((domain, index) => (
              <div key={index} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: C.cyan, marginTop: '3px', opacity: 0.8 }}>
                  <domain.Icon size={18} />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      color: '#fff',
                      marginBottom: '4px',
                    }}
                  >
                    {domain.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.85rem',
                      color: C.muted,
                      lineHeight: 1.6,
                      maxWidth: '380px',
                    }}
                  >
                    {domain.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT COLUMN: REGISTRATION FORM ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <form
            onSubmit={handleFormSubmit}
            noValidate
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="form-label">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`form-input ${errors.fullName ? 'is-error' : ''}`}
                placeholder="Enter your full name"
                required
              />
              {errors.fullName && <span className="form-error">{errors.fullName}</span>}
            </div>

            {/* Course / Branch */}
            <div>
              <label htmlFor="courseBranch" className="form-label">Course / Branch *</label>
              <input
                type="text"
                id="courseBranch"
                name="courseBranch"
                value={formData.courseBranch}
                onChange={handleInputChange}
                className={`form-input ${errors.courseBranch ? 'is-error' : ''}`}
                placeholder="e.g. B.Tech CSE, BCA"
                required
              />
              {errors.courseBranch && <span className="form-error">{errors.courseBranch}</span>}
            </div>

            {/* Year of Study */}
            <div>
              <label htmlFor="yearOfStudy" className="form-label">Year of Study *</label>
              <select
                id="yearOfStudy"
                name="yearOfStudy"
                value={formData.yearOfStudy}
                onChange={handleInputChange}
                className={`form-select ${errors.yearOfStudy ? 'is-error' : ''}`}
                required
              >
                <option value="">Select your year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
              {errors.yearOfStudy && <span className="form-error">{errors.yearOfStudy}</span>}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="form-label">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${errors.email ? 'is-error' : ''}`}
                placeholder="e.g. yourname@gla.ac.in"
                required
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            {/* WhatsApp / Contact Number */}
            <div>
              <label htmlFor="whatsappNumber" className="form-label">Contact / WhatsApp Number *</label>
              <input
                type="tel"
                id="whatsappNumber"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleInputChange}
                className={`form-input ${errors.whatsappNumber ? 'is-error' : ''}`}
                placeholder="Enter 10-digit number"
                required
              />
              {errors.whatsappNumber && <span className="form-error">{errors.whatsappNumber}</span>}
            </div>

            {/* IoT Knowledge Level */}
            <div>
              <label htmlFor="iotKnowledge" className="form-label">What do you know about IoT?</label>
              <select
                id="iotKnowledge"
                name="iotKnowledge"
                value={formData.iotKnowledge}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select your experience level</option>
                <option value="none">Never explored it</option>
                <option value="basic">Know the basics</option>
                <option value="advanced">Built / experimented with it</option>
              </select>
            </div>

            {/* Robotics Knowledge Level */}
            <div>
              <label htmlFor="roboticsKnowledge" className="form-label">What do you know about Robotics?</label>
              <select
                id="roboticsKnowledge"
                name="roboticsKnowledge"
                value={formData.roboticsKnowledge}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select your experience level</option>
                <option value="none">Never explored it</option>
                <option value="basic">Know the basics</option>
                <option value="advanced">Built / experimented with it</option>
              </select>
            </div>

            {/* UAV Knowledge Level */}
            <div>
              <label htmlFor="uavKnowledge" className="form-label">What do you know about UAVs / Drones?</label>
              <select
                id="uavKnowledge"
                name="uavKnowledge"
                value={formData.uavKnowledge}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select your experience level</option>
                <option value="none">Never explored it</option>
                <option value="basic">Know the basics</option>
                <option value="advanced">Built / experimented with it</option>
              </select>
            </div>

            {/* Project / Experimentation Details */}
            <div>
              <label htmlFor="experience" className="form-label">What have you built, learned or experimented with? (Optional)</label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Briefly describe any projects, programming languages or hardware you have experimented with..."
              />
            </div>

            {/* Reason to join */}
            <div>
              <label htmlFor="reason" className="form-label">Why do you want to join FUSION? (Optional)</label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="What interests you most about FUSION..."
              />
            </div>

            {/* Submit area with explicit warning and disabled action */}
            <div style={{ marginTop: '12px', borderTop: `1px solid ${C.border}`, paddingTop: '24px' }}>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.85rem',
                  color: '#EF4444',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                }}
              >
                * Online submissions will open soon. The form below is currently a frontend prototype.
              </p>
              
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  opacity: 0.6,
                  cursor: 'not-allowed',
                }}
                disabled
              >
                Registration Opening Soon
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Join;
