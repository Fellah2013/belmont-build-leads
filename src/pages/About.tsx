import React from "react";
import { 
  Target, 
  ShieldCheck, 
  Users,
  Award,
  BadgeCheck,
  TrendingUp,
  Briefcase,
  LucideIcon
} from "lucide-react";

const About = () => {
  const values: { icon: LucideIcon; title: string; text: string }[] = [
    { icon: ShieldCheck, title: "Integrity", text: "We conduct our business with honesty, transparency, and ethical practices." },
    { icon: Award, title: "Quality", text: "We never compromise on the quality of materials or workmanship." },
    { icon: Briefcase, title: "Safety", text: "We prioritize the well-being of our workers and the safety of our sites." },
    { icon: Users, title: "Reliability", text: "We are a dependable partner you can count on to deliver results." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">About Belmont</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A legacy of excellence, a commitment to quality, and a vision for the future of construction in Kenya.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-orange font-bold uppercase tracking-widest text-sm mb-4">Our Story</h2>
            <h3 className="text-4xl font-heading font-bold text-navy mb-6">
              Founded on the Principles of Integrity and Quality
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Belmont Construction Company was established in 2008 with a single mission: to provide high-quality, reliable, and innovative construction solutions that exceed client expectations.
              </p>
              <p>
                What started as a small residential renovation firm has grown into a full-service construction and civil engineering leader in the region. We have successfully delivered over 250 projects, ranging from custom family homes to massive infrastructure works.
              </p>
              <p>
                Our success is built on the expertise of our people, our commitment to safety, and our unwavering focus on delivering excellence in every brick we lay.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-management-87684770-1778843426246.webp" 
              alt="Team at site" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-orange p-8 rounded-2xl shadow-xl text-white hidden md:block">
              <p className="text-4xl font-bold">15+</p>
              <p className="font-bold">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-lg border-t-4 border-orange">
              <Target className="h-12 w-12 text-orange mb-6" />
              <h3 className="text-2xl font-heading font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To transform our clients' visions into reality through superior craftsmanship, innovative engineering, and professional project management, while maintaining the highest standards of safety and sustainability.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-lg border-t-4 border-navy">
              <TrendingUp className="h-12 w-12 text-navy mb-6" />
              <h3 className="text-2xl font-heading font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the most trusted and preferred construction partner in East Africa, recognized for our commitment to quality, integrity, and the development of sustainable infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange font-bold uppercase tracking-widest text-sm mb-4">Our DNA</h2>
          <h3 className="text-4xl font-heading font-bold text-navy">Core Values</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, i) => (
            <div key={i} className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center text-orange mx-auto mb-6">
                <val.icon className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">{val.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{val.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-orange font-bold uppercase tracking-widest text-sm mb-4">Expert Team</h2>
            <h3 className="text-4xl font-heading font-bold text-white">Leading with Experience</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Eng. Samuel Belmont", role: "CEO & Founder", exp: "25+ Years" },
              { name: "Jane Muriuki", role: "Project Director", exp: "15+ Years" },
              { name: "John Doe", role: "Chief Engineer", exp: "20+ Years" }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-48 h-48 bg-white/10 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white/5 group-hover:border-orange transition-colors flex items-center justify-center">
                  <Users className="h-20 w-20 text-white/20" />
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-orange font-semibold">{member.role}</p>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
                  <BadgeCheck className="h-4 w-4" />
                  <span>{member.exp} Experience</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;