import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import React, { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import WeatherDisplay from '../components/WeatherDisplay/WeatherDisplay';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  submit?: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation('contact');
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = t('errors.name');
    if (!formData.email.trim()) {
      newErrors.email = t('errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('errors.emailInvalid');
    }
    if (!formData.subject.trim()) newErrors.subject = t('errors.subject');
    if (!formData.message.trim()) newErrors.message = t('errors.message');
    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await emailjs.sendForm(
          'service_qftryeh',
          'template_fktuno4',
          formRef.current as HTMLFormElement,
          'BuIYx9hnXwuMJjbhE'
      );

      if (response.status === 200) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setErrors({ submit: t('errors.submit') });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <div className="contact-page">
        {showSuccess && (
            <div className="success-modal">
              <div className="modal-content">
                <FaCheckCircle className="success-icon" />
                <h3>{t('success.title')}</h3>
                <p>{t('success.message')}</p>
                <button onClick={() => setShowSuccess(false)} className="modal-close-btn">
                  {t('success.close')}
                </button>
              </div>
            </div>
        )}

        <section className="contact-hero contact-hero-bg">
          <div className="hero-overlay-box">
            <h1 className="hero-text">{t('hero.title')}</h1>
            <p className="hero-text">{t('hero.subtitle')}</p>
          </div>
        </section>

        <div className="contact-container">
          <section className="contact-form-section">
            <h2>{t('form.title')}</h2>
            {errors.submit && <div className="error-message">{errors.submit}</div>}

            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t('form.name')}</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('form.email')}</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t('form.subject')}</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('form.message')}</label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <input type="hidden" name="from_name" value={formData.name} />
              <input type="hidden" name="from_email" value={formData.email} />

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                      <span className="spinner"></span> {t('form.sending')}
                    </>
                ) : (
                    t('form.submit')
                )}
              </button>
            </form>
          </section>

          <section className="contact-info-section">
            <h2>{t('info.title')}</h2>

            <WeatherDisplay location="Odienne" />

            <div className="contact-info-card">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>{t('info.address')}</h3>
                <p>Odienné, Ivory Coast</p>
                <p>Zip Code: 00225</p>
              </div>
            </div>

            <div className="contact-info-card">
              <FaPhone className="contact-icon" />
              <div>
                <h3>{t('info.phone')}</h3>
                <p>+225 XX XX XX XX</p>
                <p>{t('info.hours')}</p>
              </div>
            </div>

            <div className="contact-info-card">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>{t('info.email')}</h3>
                <p>AfriNutsExport2023@outlook.com</p>
                <p>inquiries@afrinutsexport.com</p>
              </div>
            </div>

            <div className="contact-info-card">
              <FaClock className="contact-icon" />
              <div>
                <h3>{t('info.businessHours')}</h3>
                <p>Monday - Friday: 8:00 - 17:00</p>
                <p>Saturday: 9:00 - 13:00</p>
              </div>
            </div>
          </section>
        </div>

        <section className="map-section">
          <h2>{t('map.title')}</h2>
          <div className="map-container">
            <iframe
                title="AfriNuts Export Location"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.4744261831!2d-7.5903136!3d9.5091664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzAnMzMuMCJOIDfCsDM1JzI1LjEiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
  );
};

export default Contact;