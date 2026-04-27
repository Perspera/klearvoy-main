'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { ContactFormData, FormErrors, validateForm } from '@/lib/contact-form';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setStatusMessage('');

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setStatusMessage(result.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
        });
        setErrors({});
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message || 'Failed to send message');
        if (result.errors) {
          setErrors(result.errors);
        }
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage(t('contact.errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero/home-banner-bg.png"
            alt={t('contact.title')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <h1 className="text-5xl md:text-6xl font-heading text-white">{t('contact.title')}</h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <p className="text-sm tracking-widest text-accent-dark mb-4 uppercase">{t('contact.getInTouch').toUpperCase()}</p>
              <h2 className="text-4xl font-heading text-primary mb-8">{t('contact.letsDiscuss')}</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-heading text-primary mb-3">{t('contact.factoryAddress')}</h3>
                  <p className="text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: t('contact.address') }} />
                </div>

                <div>
                  <h3 className="text-lg font-heading text-primary mb-3">{t('contact.phone')}</h3>
                  <p className="text-secondary">+86 156 9241 5580</p>
                </div>

                <div>
                  <h3 className="text-lg font-heading text-primary mb-3">{t('contact.email')}</h3>
                  <p className="text-secondary">info@klearvoy.com</p>
                  <p className="text-secondary">hudson.zheng@klearvoy.com</p>
                </div>

                <div>
                  <h3 className="text-lg font-heading text-primary mb-3">{t('contact.whatsapp')}</h3>
                  <div className="mt-3">
                    <Image
                      src="/assets/images/contact/whatsapp-qr-code.jpg"
                      alt="WhatsApp QR Code"
                      width={120}
                      height={120}
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card-bg p-10">
              <h3 className="text-2xl font-heading text-primary mb-8">{t('contact.sendMessage')}</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded">
                  {t('contact.successMessage')}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded">
                  {statusMessage || t('contact.errorMessage')}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    {t('contact.name')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border ${
                      errors.name ? 'border-red-500' : 'border-border'
                    } focus:border-accent-dark focus:outline-none transition-smooth`}
                    placeholder={t('contact.name')}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{t('contact.nameRequired')}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    {t('contact.emailLabel')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border ${
                      errors.email ? 'border-red-500' : 'border-border'
                    } focus:border-accent-dark focus:outline-none transition-smooth`}
                    placeholder={t('contact.emailLabel')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email === 'Email is required' ? t('contact.emailRequired') : t('contact.emailInvalid')}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    {t('contact.phoneLabel')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-border focus:border-accent-dark focus:outline-none transition-smooth"
                    placeholder="+86 xxx xxxx xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                    {t('contact.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-border focus:border-accent-dark focus:outline-none transition-smooth"
                    placeholder={t('contact.company')}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                    {t('contact.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-border focus:border-accent-dark focus:outline-none transition-smooth"
                    placeholder={t('contact.subject')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    {t('contact.message')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border ${
                      errors.message ? 'border-red-500' : 'border-border'
                    } focus:border-accent-dark focus:outline-none transition-smooth resize-none`}
                    placeholder={t('contact.message')}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message === 'Message is required' ? t('contact.messageRequired') : t('contact.messageTooShort')}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 text-sm font-medium tracking-wider transition-smooth cursor-pointer ${
                    isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-secondary'
                  }`}
                >
                  {isSubmitting ? t('contact.sending') : t('contact.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
