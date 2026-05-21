import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Warehouse, 
  Pickaxe, 
  Wrench, 
  Paintbrush, 
  LayoutDashboard,
  ShieldCheck,
  Clock,
  UserCheck,
  CheckCircle2
} from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      title: "Residential Construction",
      description: "From luxury villas to modern apartments, we build dream homes with attention to every detail.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-residential-03517988-1778843424810.webp",
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      title: "Commercial Construction",
      description: "Creating functional and inspiring business environments, including offices, malls, and hotels.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-commercial-e7ed452c-1778843425152.webp",
      icon: <Warehouse className="h-6 w-6" />,
    },
    {
      title: "Civil Engineering",
      description: "Delivering vital infrastructure projects like roads, bridges, and drainage systems with precision.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-civil-4e03f465-1778843425535.webp",
      icon: <Pickaxe className="h-6 w-6" />,
    },
  ];

  const projects = [
    {
      title: "The Belmont Highlands",
      category: "Residential",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/project-residential-1-4e5785f4-1778843426389.webp",
      description: "A luxury 20-unit residential complex featuring sustainable design and modern amenities.",
    },
    {
      title: "Riverside Corporate Hub",
      category: "Commercial",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/project-commercial-1-4f58baff-1778843428650.webp",
      description: "State-of-the-art office spaces in the heart of Nairobi's business district.",
    },
    {
      title: "Northern Corridor Bridge",
      category: "Infrastructure",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/project-infrastructure-1-f2d05b3e-1778843428156.webp",
      description: "A vital civil engineering project connecting major industrial hubs.",
    },
  ];

  return (
    <div className="bg-white">
      <Hero />

      {/* Stats Section */}
      <section className="py-12 bg-navy -mt-12 relative z-20 max-w-6xl mx-auto rounded-lg shadow-2xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Projects Completed", value: "250+" },
            { label: "Skilled Workers", value: "150+" },
            { label: "Happy Clients", value: "200+" },
            { label: "Years Experience", value: "15+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h4 className="text-3xl md:text-4xl font-heading font-extrabold text-orange mb-1">
                {stat.value}
              </h4>
              <p className="text-gray-300 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
            Comprehensive Construction Solutions
          </h3>
          <div className="h-1.5 w-24 bg-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} delay={i * 0.1} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" className="border-navy text-navy font-bold hover:bg-navy hover:text-white px-8 py-6">
              View All Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-orange font-bold uppercase tracking-widest text-sm mb-4">Why Belmont?</h2>
              <h3 className="text-4xl font-heading font-bold text-navy mb-8">
                Building the Future with Unmatched Quality
              </h3>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: <ShieldCheck className="h-6 w-6" />, 
                    title: "Quality Assurance", 
                    text: "We use premium materials and follow international building standards for every project." 
                  },
                  { 
                    icon: <Clock className="h-6 w-6" />, 
                    title: "Timely Delivery", 
                    text: "Your time is valuable. We pride ourselves on meeting deadlines without compromising quality." 
                  },
                  { 
                    icon: <UserCheck className="h-6 w-6" />, 
                    title: "Skilled Engineers", 
                    text: "Our team consists of certified experts with years of experience in complex engineering." 
                  },
                  { 
                    icon: <CheckCircle2 className="h-6 w-6" />, 
                    title: "Safety First", 
                    text: "Safety is our priority. We maintain strict safety protocols on all our construction sites." 
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg bg-white shadow-sm border-l-4 border-orange">
                    <div className="text-orange mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-heading font-bold text-navy mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-management-87684770-1778843426246.webp" 
                alt="Construction Management" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange -z-0 rounded-2xl"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 border-4 border-navy -z-0 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-orange font-bold uppercase tracking-widest text-sm mb-4">Our Portfolio</h2>
            <h3 className="text-4xl font-heading font-bold text-navy">
              Explore Our Recent Excellence
            </h3>
          </div>
          <Link to="/projects">
            <Button className="bg-navy hover:bg-navy/90 text-white font-bold px-8">
              View All Projects
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Ready to Start Your Construction Journey?
              </h3>
              <p className="text-xl text-gray-300 mb-10">
                Let's build something extraordinary together. Contact us today for a free consultation and project quote.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button className="bg-orange hover:bg-orange/90 text-white font-bold h-14 px-10 text-lg rounded-full">
                    Contact Us Now
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy font-bold h-14 px-10 text-lg rounded-full">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;