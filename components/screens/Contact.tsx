"use client"

import React, { useState } from 'react'

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredTime: string;
  agreeToContact: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  preferredTime?: string;
  agreeToContact?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us what brings you here';
    }
    
    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Preferred contact time is required';
    }
    
    if (!formData.agreeToContact) {
      newErrors.agreeToContact = 'You must agree to be contacted';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      alert('Thank you for your message! Dr. Blake will contact you soon.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        agreeToContact: false
      });
      setErrors({});
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Get in Touch
            </h2>
            <p className="text-gray-600">
            Ready to start your healing journey? Reach out today
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8">
            <h3 className="text-2xl font-thin text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                </label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-2 border focus:ring-2 focus:ring-amber-900 focus-visible:ring-0 focus:border-transparent ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                </label>
                <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-2 border focus:ring-2 focus:ring-amber-900 focus-visible:ring-0 focus:border-transparent ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(323) 555-0192"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-2 border focus:ring-2 focus:ring-amber-900 focus-visible:ring-0 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    What brings you here? *
                </label>
                <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`w-full px-4 py-2 border focus:ring-2 focus:ring-amber-900 focus-visible:ring-0 focus:border-transparent ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell me about what you're looking for help with..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred time to reach you *
                </label>
                <input
                    type="text"
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    className={`w-full px-4 py-2 border focus:ring-2 focus:ring-amber-900 focus-visible:ring-0 focus:border-transparent ${
                    errors.preferredTime ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="e.g., Weekday mornings, evenings after 6pm"
                />
                {errors.preferredTime && <p className="mt-1 text-sm text-red-600">{errors.preferredTime}</p>}
                </div>

                <div>
                <label className="flex items-start">
                    <input
                    type="checkbox"
                    checked={formData.agreeToContact}
                    onChange={(e) => handleInputChange('agreeToContact', e.target.checked)}
                    className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-amber-900 focus-visible:ring-0"
                    />
                    <span className="text-sm text-gray-700">
                    I agree to be contacted by Dr. Serena Blake regarding my inquiry *
                    </span>
                </label>
                {errors.agreeToContact && <p className="mt-1 text-sm text-red-600">{errors.agreeToContact}</p>}
                </div>

                <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 font-semibold transition-colors"
                >
                Send Message
                </button>
            </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
            <div className="bg-white p-8">
                <h3 className="text-2xl font-thin text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                    <p className="font-thin text-gray-900">Office Address</p>
                    <p className="text-gray-600 font-extralight">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                    <p className="font-thin text-gray-900">Phone</p>
                    <p className="text-gray-600 font-extralight">(323) 555-0192</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                    <p className="font-thin text-gray-900">Email</p>
                    <p className="text-gray-600 font-extralight">serena@blakepsychology.com</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Contact
