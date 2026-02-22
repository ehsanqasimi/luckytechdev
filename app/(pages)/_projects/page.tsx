"use client";

import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A fully-featured e-commerce platform with payment integration, inventory management, and customer dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/800x400.png?text=E-Commerce+Platform",
      website: "https://example-ecommerce.com",
      results: "40% increase in sales, 50k+ active users",
    },
    {
      id: 2,
      title: "Zaman Tiling Group",
      description:
        "Cross-platform application for a tiling business in sydney (Zaman tiling Group).",
      technologies: ["React Native", "Firebase", "Redux"],
      image: "https://images2.imgbox.com/57/37/NIuhkhdw_o.png",
      website: "https://zamantilinggroup.luckytech.dev/",
      results: "More clients short after launching the website.",
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      description:
        "Enterprise-level analytics dashboard with real-time data visualization and reporting tools.",
      technologies: ["Next.js", "PostgreSQL", "Chart.js", "AWS"],
      image: "https://via.placeholder.com/800x400.png?text=SaaS+Dashboard",
      website: "https://example-saas-dashboard.com",
      results: "Used by 200+ companies, $2M ARR",
    },
    {
      id: 4,
      title: "Food Delivery App",
      description:
        "Mobile-first platform with real-time order tracking and restaurant management system.",
      technologies: ["Flutter", "Firebase", "Google Maps API"],
      image: "https://via.placeholder.com/800x400.png?text=Food+Delivery+App",
      website: "https://example-food-delivery.com",
      results: "1000+ restaurants onboarded, 250k orders/month",
    },
    {
      id: 5,
      title: "AI Chat Assistant",
      description:
        "Intelligent chatbot powered by machine learning for customer support and engagement automation.",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      image: "https://via.placeholder.com/800x400.png?text=AI+Chat+Assistant",
      website: "https://example-ai-chat.com",
      results: "70% support ticket reduction, 95% satisfaction rate",
    },
    {
      id: 6,
      title: "Fitness Tracking Platform",
      description:
        "Comprehensive fitness tracking platform with workout plans, progress analytics, and social features.",
      technologies: ["React Native", "Firebase", "Apple HealthKit"],
      image:
        "https://via.placeholder.com/800x400.png?text=Fitness+Tracking+Platform",
      website: "https://example-fitness-app.com",
      results: "50k+ active users, $500k revenue",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-indigo-600">Projects</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Explore our portfolio of successful projects and digital solutions
            we've delivered for clients worldwide.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all group flex flex-col h-full"
              >
                {/* Project Image/Icon */}
                <div className="relative bg-gradient-to-br from-indigo-100 to-indigo-50 h-40 flex items-center justify-center overflow-hidden group-hover:from-indigo-200 group-hover:to-indigo-100 transition-colors">
                  {project.image && project.image.startsWith("http") ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-6xl">{project.image}</span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Visit Website Link */}
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-indigo-700 transition-colors"
                  >
                    Visit Website <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="px-4 sm:px-6 lg:px-8 py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "8+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-indigo-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-indigo-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help bring your ideas to life with our
            proven expertise and innovative solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors"
          >
            Start a Project <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Projects;
