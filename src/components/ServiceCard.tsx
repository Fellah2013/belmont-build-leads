import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, image, icon, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="overflow-hidden group border-none shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
            <Link to="/contact">
              <button className="bg-orange text-white px-6 py-3 font-bold rounded shadow-lg flex items-center gap-2">
                Request Service <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
          <div className="absolute top-4 left-4 p-3 bg-orange text-white rounded shadow-lg">
            {icon}
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-orange transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {description}
          </p>
          <Link to="/services" className="text-navy font-bold flex items-center gap-1 hover:text-orange transition-colors">
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;