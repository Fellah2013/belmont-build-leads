import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "5 Tips for Choosing the Best Construction Materials in Kenya",
      excerpt: "Material selection is critical for the durability and cost-effectiveness of your building project. Here's what you need to know...",
      date: "Oct 24, 2023",
      author: "Eng. Samuel Belmont",
      category: "Material Guide",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-renovation-c9c5d8e9-1778843426340.webp"
    },
    {
      title: "Understanding Building Regulations and Permits in Nairobi",
      excerpt: "Navigating the legal landscape of construction can be tricky. We break down the essential permits you need before breaking ground...",
      date: "Nov 12, 2023",
      author: "Jane Muriuki",
      category: "Regulations",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-management-87684770-1778843426246.webp"
    },
    {
      title: "Sustainable Construction: The Future of Urban Living",
      excerpt: "Eco-friendly building practices are no longer optional. Discover how Belmont is leading the way in sustainable development...",
      date: "Dec 05, 2023",
      author: "Admin",
      category: "Innovation",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f78ce892-ee89-4ae9-af9b-c3d55d36271c/service-civil-4e03f465-1778843425535.webp"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tips, and news from the frontlines of the construction industry.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <Card key={i} className="overflow-hidden group border-none shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-navy mb-4 group-hover:text-orange transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Button variant="ghost" className="p-0 text-navy font-bold hover:text-orange hover:bg-transparent group/btn">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-heading font-bold text-navy mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mb-8">Get the latest construction tips and industry news delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow h-14 px-6 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange/20 focus:border-orange transition-all"
            />
            <Button className="bg-orange hover:bg-orange/90 text-white font-bold h-14 px-8 text-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;