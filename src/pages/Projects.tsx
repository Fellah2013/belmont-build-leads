import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Residential", "Commercial", "Infrastructure"];

  const allProjects = [
    {
      title: "The Belmont Highlands",
      category: "Residential",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/project-residential-1-4e5785f4-1778843426389.webp",
      description: "A luxury 20-unit residential complex featuring sustainable design and modern amenities in a serene neighborhood.",
    },
    {
      title: "Riverside Corporate Hub",
      category: "Commercial",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/project-commercial-1-4f58baff-1778843428650.webp",
      description: "State-of-the-art office spaces in the heart of Nairobi's business district, designed for maximum productivity.",
    },
    {
      title: "Northern Corridor Bridge",
      category: "Infrastructure",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/project-infrastructure-1-f2d05b3e-1778843428156.webp",
      description: "A vital civil engineering project connecting major industrial hubs, built to withstand the test of time.",
    },
    {
      title: "Modern Suburban Villa",
      category: "Residential",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-residential-03517988-1778843424810.webp",
      description: "A sleek, contemporary villa with open-plan living and premium finishes throughout.",
    },
    {
      title: "Tech Plaza Mall",
      category: "Commercial",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-commercial-e7ed452c-1778843425152.webp",
      description: "A multi-level shopping complex featuring architectural glass facades and efficient visitor flow.",
    },
    {
      title: "Urban Highway Expansion",
      category: "Infrastructure",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-civil-4e03f465-1778843425535.webp",
      description: "A major road expansion project aimed at reducing traffic congestion in the city center.",
    },
  ];

  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of our commitment to excellence and our ability to deliver projects of all scales and complexities.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-navy font-bold mr-4">
              <Filter className="h-5 w-5" />
              <span>Filter by:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                    filter === cat 
                      ? "bg-orange text-white shadow-md" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard 
                key={project.title} 
                {...project} 
                delay={0}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl">No projects found in this category.</p>
          </div>
        )}
      </section>

      {/* Before/After Section Preview */}
      <section className="py-24 bg-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-orange font-bold uppercase tracking-widest text-sm mb-4">The Transformation</h2>
            <h3 className="text-4xl font-heading font-bold mb-6">Before & After Results</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <h4 className="text-2xl font-bold font-heading">Lavington House Renovation</h4>
               <p className="text-gray-300 leading-relaxed">
                 We took an aging 1980s property and transformed it into a modern, energy-efficient masterpiece. The project involved complete structural overhaul and luxury finishing.
               </p>
               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white/5 p-4 rounded-lg">
                   <p className="text-orange font-bold text-2xl">4 Mo.</p>
                   <p className="text-xs text-gray-400 uppercase">Duration</p>
                 </div>
                 <div className="bg-white/5 p-4 rounded-lg">
                   <p className="text-orange font-bold text-2xl">100%</p>
                   <p className="text-xs text-gray-400 uppercase">Client Satisf.</p>
                 </div>
               </div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-renovation-c9c5d8e9-1778843426340.webp" 
                alt="Renovation" 
                className="w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-orange text-white px-4 py-1 font-bold text-sm uppercase rounded">After</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;