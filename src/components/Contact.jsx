import { Mail, Phone, MapPin } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { CONTACT_INFO } from '../constants/data';

const Contact = ({ formData, formErrors, isSubmitting, onInputChange, onSubmit }) => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl px-8 mx-auto">
        <SectionHeader 
          title="Get In Touch"
          subtitle="Let's work together on your next project"
        />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">Contact Information</h3>
            
            <div className="flex items-center p-6 space-x-4 transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl hover:translate-x-2">
              <div className="flex items-center justify-center w-12 h-12 bg-linear-to-r from-indigo-500 to-purple-600 rounded-xl">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">{CONTACT_INFO.email}</p>
              </div>
            </div>

            <div className="flex items-center p-6 space-x-4 transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl hover:translate-x-2">
              <div className="flex items-center justify-center w-12 h-12 bg-linear-to-r from-indigo-500 to-purple-600 rounded-xl">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-center p-6 space-x-4 transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl hover:translate-x-2">
              <div className="flex items-center justify-center w-12 h-12 bg-linear-to-r from-indigo-500 to-purple-600 rounded-xl">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Location</h4>
                <p className="text-gray-600">{CONTACT_INFO.location}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-white shadow-xl rounded-3xl">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={onInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                    formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-indigo-500'
                  }`}
                  placeholder="Your Name"
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={onInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                    formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-indigo-500'
                  }`}
                  placeholder="your.email@example.com"
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-semibold text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={onInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                    formErrors.subject ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-indigo-500'
                  }`}
                  placeholder="What's this about?"
                />
                {formErrors.subject && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={onInputChange}
                  rows="6"
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none resize-vertical ${
                    formErrors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-indigo-500'
                  }`}
                  placeholder="Tell me about your project or just say hi!"
                />
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 font-semibold text-white transition-all duration-300 bg-linear-to-r from-indigo-500 to-purple-600 rounded-xl hover:shadow-lg hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 rounded-full border-white/30 border-t-white animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
