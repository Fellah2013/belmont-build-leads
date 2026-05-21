import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  PenTool, 
  Construction, 
  CheckCircle,
  MessageSquare,
  ClipboardList,
  HardHat,
  Key
} from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      title: "Consultation",
      icon: <MessageSquare className="h-8 w-8" />,
      description: "We begin with a detailed discussion to understand your vision, requirements, and budget constraints. We provide initial advice and feasibility insights.",
      details: ["Requirement Analysis", "Budget Consultation", "Initial Site Visit"]
    },
    {
      title: "Design & Planning",
      icon: <PenTool className="h-8 w-8" />,
      description: "Our architectural and engineering team develops detailed plans, 3D visualizations, and material specifications for your approval.",
      details: ["Architectural Design", "Structural Engineering", "Permit Acquisition"]
    },
    {
      title: "Construction Phase",
      icon: <Construction className="h-8 w-8" />,
      description: "Our skilled crews bring the plans to life. We maintain high standards of safety and quality while providing regular progress updates.",
      details: ["Site Mobilization", "Quality Control", "Timeline Management"]
    },
    {
      title: "Completion & Handover",
      icon: <Key className="h-8 w-8" />,
      description: "After rigorous inspections and final touches, we hand over the completed project to you, ready for use.",
      details: ["Final Inspection", "Client Handover", "Post-completion Support"]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">How We Work</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our streamlined process ensures transparency, efficiency, and excellence from the first handshake to the final key handover.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className={`flex flex-col ${i % 2 !== 0 ? "md:items-end" : "md:items-start"}`}>
                    <span className="text-orange font-bold text-5xl mb-4">0{i + 1}</span>
                    <h3 className="text-3xl font-heading font-bold text-navy mb-4">{step.title}</h3>
                    <p className={`text-gray-600 text-lg leading-relaxed mb-6 ${i % 2 !== 0 ? "md:text-right" : ""}`}>
                      {step.description}
                    </p>
                    <ul className={`flex flex-wrap gap-3 ${i % 2 !== 0 ? "md:justify-end" : "md:justify-start"}`}>
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="bg-gray-50 px-4 py-2 rounded-full text-sm font-semibold text-navy border border-gray-100">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Icon Circle */}
                <div className="relative z-10 w-20 h-20 bg-orange rounded-full flex items-center justify-center text-white shadow-xl">
                  {step.icon}
                  {/* Small pulse effect */}
                  <div className="absolute inset-0 bg-orange/20 rounded-full animate-ping -z-10"></div>
                </div>

                {/* Placeholder for spacing */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-heading font-bold text-navy mb-6">Our Promise to You</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We understand that a construction project is a significant investment. That's why we commit to total transparency and communication at every stage of the journey.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: <ClipboardList className="text-orange h-5 w-5" />, title: "Detailed Reports" },
                    { icon: <Search className="text-orange h-5 w-5" />, title: "Open Inspections" },
                    { icon: <HardHat className="text-orange h-5 w-5" />, title: "On-site Safety" },
                    { icon: <CheckCircle className="text-orange h-5 w-5" />, title: "Quality Checks" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      {item.icon}
                      <span className="font-bold text-navy">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-navy rounded-2xl p-8 text-white">
                <blockquote className="text-xl italic font-serif leading-relaxed">
                  "The process with Belmont was so clear and organized. I always knew exactly what was happening on my site and when we would reach the next milestone."
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-600"></div>
                  <div>
                    <p className="font-bold">David Mwangi</p>
                    <p className="text-sm text-gray-400">Homeowner, Karen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;