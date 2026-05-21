import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Warehouse, 
  Pickaxe, 
  Wrench, 
  Paintbrush, 
  LayoutDashboard,
  HardHat,
  Calculator,
  ShieldCheck,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const allServices = [
    {
      title: "Residential Construction",
      description: "Custom homes, luxury villas, and modern apartment complexes built to the highest standards of comfort and style.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-residential-03517988-1778843424810.webp",
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      title: "Commercial Construction",
      description: "Functional and professional office buildings, shopping malls, and industrial spaces designed for business success.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-commercial-e7ed452c-1778843425152.webp",
      icon: <Warehouse className="h-6 w-6" />,
    },
    {
      title: "Civil Engineering",
      description: "Major infrastructure projects including road networks, bridges, dams, and structural engineering solutions.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-civil-4e03f465-1778843425535.webp",
      icon: <Pickaxe className="h-6 w-6" />,
    },
    {
      title: "Renovation & Remodeling",
      description: "Transforming existing spaces into modern, functional areas while preserving structural integrity and character.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-renovation-c9c5d8e9-1778843426340.webp",
      icon: <Wrench className="h-6 w-6" />,
    },
    {
      title: "Interior Finishing",
      description: "Premium interior design, gypsum works, tiling, painting, and high-end fit-outs for a perfect final look.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-interior-3c11926d-1778843425929.webp",
      icon: <Paintbrush className="h-6 w-6" />,
    },
    {
      title: "Project Management",
      description: "Professional oversight from inception to completion, ensuring quality, budget control, and timely delivery.",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-management-87684770-1778843426246.webp",
      icon: <LayoutDashboard className="h-6 w-6" />,
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive construction and engineering solutions tailored to meet the unique needs of every project.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, i) => (
            <ServiceCard key={i} {...service} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-orange font-bold uppercase tracking-widest text-sm mb-4">The Belmont Standard</h2>
              <h3 className="text-4xl font-heading font-bold text-navy mb-8">
                How We Deliver Excellence in Every Project
              </h3>
              <div className="space-y-6">
                {[
                  { icon: <HardHat className="text-orange" />, title: "Certified Expertise", text: "Our engineers and project managers are highly trained and industry-certified." },
                  { icon: <Calculator className="text-orange" />, title: "Transparent Pricing", text: "We provide detailed, upfront cost estimates with no hidden charges." },
                  { icon: <ShieldCheck className="text-orange" />, title: "Guaranteed Quality", text: "We stand by our work with post-construction warranties and support." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-navy text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/contact">
                  <Button className="bg-orange text-white px-8 py-6 h-auto text-lg font-bold">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
               <div className="aspect-square bg-navy rounded-2xl p-12 flex flex-col justify-center text-white relative z-10">
                  <CheckCircle className="h-16 w-16 text-orange mb-6" />
                  <h4 className="text-3xl font-heading font-bold mb-4">Complete Peace of Mind</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    When you hire Belmont, you're not just getting a contractor. You're getting a partner who cares about your vision as much as you do.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {["Full Site Surveys", "Regulatory Compliance", "Weekly Progress Updates", "Final Inspections"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="absolute -top-4 -right-4 w-full h-full border-4 border-orange rounded-2xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-heading font-bold text-navy mb-12">Common Questions</h3>
        <div className="space-y-6 text-left">
          {[
            { q: "How long does a typical residential project take?", a: "A standard family home typically takes 6 to 9 months, depending on complexity and material selection." },
            { q: "Do you handle building permits and approvals?", a: "Yes, we handle the entire regulatory process, including NEMA, NCA, and local county approvals." },
            { q: "Can you work with my own architect?", a: "Absolutely. We often collaborate with external architects to bring their designs to life." }
          ].map((faq, i) => (
            <div key={i} className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-navy text-lg mb-2">{faq.q}</h4>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;