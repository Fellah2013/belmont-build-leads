import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CalendarCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Thank you! Your message has been sent. Our team will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", projectType: "", budget: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-orange" />,
      title: "Phone Number",
      details: "+254 700 000 000",
      sub: "Mon - Sat, 8am - 6pm"
    },
    {
      icon: <Mail className="h-6 w-6 text-orange" />,
      title: "Email Address",
      details: "info@belmontconstruction.co.ke",
      sub: "We respond within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-orange" />,
      title: "Our Location",
      details: "Belmont Plaza, 4th Floor",
      sub: "Ngong Road, Nairobi, Kenya"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch with our experts today.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-8">Get In Touch</h2>
              <div className="space-y-8">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-lg">{info.title}</h4>
                      <p className="text-gray-900 font-semibold">{info.details}</p>
                      <p className="text-gray-500 text-sm">{info.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-orange text-white rounded-2xl shadow-xl">
              <CalendarCheck className="h-10 w-10 mb-4" />
              <h4 className="text-2xl font-bold mb-2">Request a Site Visit</h4>
              <p className="mb-6 text-orange-50">
                Need us to look at your land or existing structure? Book a professional site assessment.
              </p>
              <Button className="w-full bg-navy hover:bg-navy/90 text-white font-bold h-12">
                Book Visit
              </Button>
            </div>

            <div>
              <h4 className="font-bold text-navy mb-4">Connect on WhatsApp</h4>
              <a 
                href="https://wa.me/254700000000" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                <MessageCircle className="h-6 w-6" />
                Chat with an Expert
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <h3 className="text-3xl font-heading font-bold text-navy mb-8">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      required 
                      className="h-12"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      placeholder="+254 700 000 000" 
                      required 
                      className="h-12"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@example.com" 
                      required 
                      className="h-12"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project">Project Type</Label>
                    <Input 
                      id="project" 
                      placeholder="e.g. Residential Villa" 
                      className="h-12"
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range (Optional)</Label>
                  <Input 
                    id="budget" 
                    placeholder="e.g. KES 5M - 10M" 
                    className="h-12"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How can we help you?</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your project requirements..." 
                    className="min-h-[150px] resize-none"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button type="submit" className="w-full bg-orange hover:bg-orange/90 text-white font-bold h-14 text-lg">
                  <Send className="mr-2 h-5 w-5" />
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.16859737482!2d36.76450531557088!3d-1.283333333333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf1f32c33221cc!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;