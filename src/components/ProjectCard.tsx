import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
  delay?: number;
}

const ProjectCard = ({ title, category, image, description, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="group relative overflow-hidden aspect-[4/3] border-none">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end">
          <Badge className="bg-orange text-white w-fit mb-4">{category}</Badge>
          <h3 className="text-2xl font-heading font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200 text-sm mb-6 line-clamp-2">{description}</p>
          <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-navy hover:bg-orange hover:text-white transition-colors">
            <ExternalLink className="h-5 w-5" />
          </button>
        </div>
        {/* Basic info shown when not hovered (mobile friendly) */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded shadow-lg md:group-hover:hidden transition-all duration-300">
           <p className="text-[10px] text-orange font-bold uppercase tracking-wider mb-1">{category}</p>
           <h3 className="text-lg font-heading font-bold text-navy truncate">{title}</h3>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;