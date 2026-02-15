import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { Mail, MessageSquare, Mic2, Palette, MapPin, CheckCircle, Headphones } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [inquiryType, setInquiryType] = useState('general');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero */}
      <section className="bg-gray-50 pt-32 pb-20 px-6 text-center">
        <h1 className="text-5xl font-light text-black mb-6">Get in Touch</h1>
        <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
          Whether you are looking to acquire a piece, book a speaking engagement, or just say hello—I'd love to hear from you.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-20">
        
        {/* 2. Left Column: Inquiry Selector & Context */}
        <div className="w-full lg:w-1/3 space-y-12">
          
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">How can we help?</h3>
            
            <button 
              onClick={() => { setInquiryType('acquisition'); setSubmitted(false); }}
              className={`w-full text-left p-4 rounded-2xl flex items-center transition-all ${inquiryType === 'acquisition' ? 'bg-black text-white shadow-xl' : 'bg-white hover:bg-gray-50 text-gray-600'}`}
            >
              <Palette size={20} className="mr-4" />
              <span className="font-medium">Acquire Art</span>
            </button>

            <button 
              onClick={() => { setInquiryType('speaking'); setSubmitted(false); }}
              className={`w-full text-left p-4 rounded-2xl flex items-center transition-all ${inquiryType === 'speaking' ? 'bg-black text-white shadow-xl' : 'bg-white hover:bg-gray-50 text-gray-600'}`}
            >
              <Mic2 size={20} className="mr-4" />
              <span className="font-medium">Book Matthew to Speak</span>
            </button>
            
            <button 
              onClick={() => { setInquiryType('podcast'); setSubmitted(false); }}
              className={`w-full text-left p-4 rounded-2xl flex items-center transition-all ${inquiryType === 'podcast' ? 'bg-black text-white shadow-xl' : 'bg-white hover:bg-gray-50 text-gray-600'}`}
            >
              <Headphones size={20} className="mr-4" />
              <span className="font-medium">Podcast Interview</span>
            </button>

            <button 
              onClick={() => { setInquiryType('press'); setSubmitted(false); }}
              className={`w-full text-left p-4 rounded-2xl flex items-center transition-all ${inquiryType === 'press' ? 'bg-black text-white shadow-xl' : 'bg-white hover:bg-gray-50 text-gray-600'}`}
            >
              <MessageSquare size={20} className="mr-4" />
              <span className="font-medium">Press & Media</span>
            </button>

            <button 
              onClick={() => { setInquiryType('general'); setSubmitted(false); }}
              className={`w-full text-left p-4 rounded-2xl flex items-center transition-all ${inquiryType === 'general' ? 'bg-black text-white shadow-xl' : 'bg-white hover:bg-gray-50 text-gray-600'}`}
            >
              <Mail size={20} className="mr-4" />
              <span className="font-medium">General Inquiry</span>
            </button>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Studio Details</h3>
            <div className="flex items-start space-x-3 mb-4 text-gray-600">
               <MapPin size={18} className="mt-1 flex-shrink-0" />
               <p>Based in Florida, USA<br/>Available Worldwide</p>
            </div>
            <div className="flex items-start space-x-3 text-gray-600">
               <Mail size={18} className="mt-1 flex-shrink-0" />
               <p>info@matthewcicanese.com</p>
            </div>
          </div>

        </div>

        {/* 3. Right Column: The Form */}
        <div className="w-full lg:w-2/3">
           <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm min-h-[500px] flex items-center justify-center">
             {submitted ? (
               <div className="text-center animate-[fadeIn_0.5s_ease-out]">
                 <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
                 <h2 className="text-3xl font-light mb-4">Message Received</h2>
                 <p className="text-gray-500 max-w-md mx-auto mb-8">
                   Thank you for reaching out. A member of our studio team will review your inquiry and get back to you shortly.
                 </p>
                 <Button onClick={() => setSubmitted(false)} variant="outline">Send Another Message</Button>
               </div>
             ) : (
               <div className="w-full">
                <h2 className="text-2xl font-light mb-8 capitalize">
                  {inquiryType === 'acquisition' && 'Inquire about a piece'}
                  {inquiryType === 'speaking' && 'Speaking & Events'}
                  {inquiryType === 'podcast' && 'Podcast Invitation'}
                  {inquiryType === 'press' && 'Press Inquiry'}
                  {inquiryType === 'general' && 'Send a Message'}
                </h2>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">First Name</label>
                      <input required type="text" className="w-full bg-gray-50 border-b-2 border-transparent focus:border-black rounded-t-lg px-4 py-3 focus:outline-none transition-colors" />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Last Name</label>
                      <input required type="text" className="w-full bg-gray-50 border-b-2 border-transparent focus:border-black rounded-t-lg px-4 py-3 focus:outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                    <input required type="email" className="w-full bg-gray-50 border-b-2 border-transparent focus:border-black rounded-t-lg px-4 py-3 focus:outline-none transition-colors" />
                  </div>

                  {inquiryType === 'speaking' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Event Date</label>
                        <input type="date" className="w-full bg-gray-50 border-b-2 border-transparent focus:border-black rounded-t-lg px-4 py-3 focus:outline-none transition-colors" />
                      </div>
                      <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Location</label>
                        <input type="text" className="w-full bg-gray-50 border-b-2 border-transparent focus:border-black rounded-t-lg px-4 py-3 focus:outline-none transition-colors" placeholder="City, State" />
                      </div>
                    </div>
                  )}

                  {inquiryType === 'podcast' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Podcast Name</label>
                        <input type="text" className="w-full bg-gray-50 border-b-2 border-transparent focus:border-black rounded-t-lg px-4 py-3 focus:outline-none transition-colors" placeholder="e.g. Art & Nature" />
                      </div>
                      <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Link to Show / Website</label>
                        <input type="url" className="w-full bg-gray-50 border-b-2 border-transparent focus:border-black rounded-t-lg px-4 py-3 focus:outline-none transition-colors" placeholder="https://..." />
                      </div>
                    </div>
                  )}

                  <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                    <textarea required rows={5} className="w-full bg-gray-50 border-b-2 border-transparent focus:border-black rounded-t-lg px-4 py-3 focus:outline-none transition-colors resize-none" placeholder={inquiryType === 'podcast' ? "Tell us about your audience and proposed topic..." : ""}></textarea>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button type="submit" className="bg-black text-white px-10 py-4 rounded-full">
                      Send Inquiry
                    </Button>
                  </div>
                </form>
               </div>
             )}
           </div>
        </div>

      </div>
    </div>
  );
};