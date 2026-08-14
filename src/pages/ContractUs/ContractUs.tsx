import React, { useState } from 'react';
import Swal from 'sweetalert2';
import SectionTitle from '../Home/Share/SectionTitle/SectionTitle';

const ContractUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill in all required fields!'
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: `Thank you, ${formData.name}. We will get back to you shortly!`,
      confirmButtonColor: '#4f46e5'
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 text-slate-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto">
          <SectionTitle
            heading="Contact Our Team"
            subHeading="We are here to assist you. Send us a message and we'll reply shortly."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Contact Details (col-span-5) */}
          <div className="lg:col-span-5 bg-white border border-slate-100 rounded-2xl p-8 flex flex-col justify-between space-y-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="space-y-6">
              <div>
                <span className="bg-indigo-50 text-indigo-600 font-bold text-xs px-3.5 py-1.5 rounded-lg uppercase tracking-wider">
                  Support Desk
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
                Connect Directly
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Reach out to us via call, email, or WhatsApp. We respond to inquiries within 24 hours.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-lg">📞</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-sm">Call Us</p>
                    <p className="text-slate-500 text-xs mt-0.5">+880 1952-487468</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-lg">✉️</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-sm">Email Us</p>
                    <p className="text-slate-500 text-xs mt-0.5">support@sar-shop.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-lg">📍</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-sm">Location</p>
                    <p className="text-slate-500 text-xs mt-0.5">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="space-y-4 pt-6 border-t border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Social Channels</p>
              <div className="flex gap-3 flex-wrap">
                <a 
                  href="https://web.facebook.com/engrarfin/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2.5 bg-slate-50 hover:bg-rose-50 border border-slate-150 hover:border-rose-250 text-slate-650 hover:text-rose-600 text-xs font-semibold rounded-xl transition-all"
                >
                  Facebook
                </a>
                <a 
                  href="https://whatsapp.com/dl/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2.5 bg-slate-50 hover:bg-green-50 border border-slate-150 hover:border-green-250 text-slate-650 hover:text-green-600 text-xs font-semibold rounded-xl transition-all"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (col-span-7) */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <h2 className="text-xl font-bold text-slate-800 tracking-tight mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase">Your Name <span className="text-rose-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full border border-slate-200 rounded-xl p-3 bg-slate-50 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all focus:ring-2 focus:ring-indigo-500/10"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase">Your Email <span className="text-rose-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full border border-slate-200 rounded-xl p-3 bg-slate-50 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all focus:ring-2 focus:ring-indigo-500/10"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-slate-500 uppercase">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full border border-slate-200 rounded-xl p-3 bg-slate-50 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all focus:ring-2 focus:ring-indigo-500/10"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase">Message <span className="text-rose-500">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full border border-slate-200 rounded-xl p-3 bg-slate-50 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all focus:ring-2 focus:ring-indigo-500/10 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 active:scale-[0.98] transition-all duration-150 text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContractUs;
