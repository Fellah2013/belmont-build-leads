import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/hero-bg-8818b56b-1778843426330.webp"
          alt="Modern Construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-12 h-1 bg-orange"></div>
            <span className="text-orange font-bold uppercase tracking-widest text-sm">
              Premium Construction Services
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-tight text-white">
            Building with <span className="text-orange">Strength.</span> Delivering with Trust.
          </h1>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed font-body">
            Belmont Construction Company is your partner in creating iconic landmarks and sustainable infrastructure. From residential villas to commercial complexes, we build excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button className="bg-orange hover:bg-orange/90 text-white font-bold h-14 px-8 text-lg rounded-md group">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy font-bold h-14 px-8 text-lg rounded-md backdrop-blur-sm">
                View Our Projects
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="flex items-center space-x-4 bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20"
        >
          <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center">
            <Play className="text-white fill-current h-5 w-5" />
          </div>
          <span className="text-white font-bold pr-4">Watch Our Story</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;