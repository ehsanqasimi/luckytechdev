"use client";

import React from "react";
import Head from "next/head";
import {
  Code,
  Smartphone,
  ShoppingCart,
  Cloud,
  TrendingUp,
  Wrench,
  CheckCircle,
  ArrowRight,
  Zap,
  Database,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Code,
      title: "Web Design & Development",
      description:
        "Custom-built websites and web applications using the latest technologies and best practices. Optimized for SEO, performance, and responsiveness.",
      features: [
        "Responsive design for all devices",
        "Fast loading speeds and performance optimization",
        "SEO-friendly architecture",
        "Modern tech stack (React, Next.js, Node.js)",
        "CMS integration and custom backends",
      ],
      price: "Custom Pricing Available",
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "SEO & Digital Marketing",
      description:
        "Strategic SEO optimization and digital marketing services to increase your online visibility and reach. Improve rankings, traffic, and conversions.",
      features: [
        "Technical SEO audit and optimization",
        "Content strategy and optimization",
        "Link building and backlink analysis",
        "Social media marketing",
        "PPC and conversion rate optimization",
      ],
      price: "Custom Pricing Available",
    },
    {
      id: 3,
      icon: Wrench,
      title: "Maintenance & Support",
      description:
        "Ongoing support, maintenance, and updates to keep your systems running smoothly and securely. Focus on security, speed, and reliability.",
      features: [
        "24/7 monitoring and support",
        "Regular security updates and patches",
        "Performance optimization",
        "Bug fixes and feature requests",
        "Annual maintenance contracts available",
      ],
      price: "Custom Pricing Available",
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced developers, designers, and project managers",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Industry-standard security practices and compliance",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Efficient development process with on-time project completion",
    },
    {
      icon: Database,
      title: "Scalability",
      description: "Solutions built to grow with your business needs",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Consultation",
      description: "We understand your business goals and requirements",
    },
    {
      step: 2,
      title: "Planning",
      description:
        "Detailed project planning and technical architecture design",
    },
    {
      step: 3,
      title: "Development",
      description: "Agile development with regular updates and feedback",
    },
    {
      step: 4,
      title: "Testing",
      description: "Comprehensive testing to ensure quality and performance",
    },
    {
      step: 5,
      title: "Launch",
      description: "Deployment and launch with ongoing support",
    },
    {
      step: 6,
      title: "Support",
      description: "Continuous maintenance and optimization",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Lucky Tech Dev - Web Development, SEO & Digital Marketing Services
        </title>
        <meta
          name="description"
          content="Lucky Tech Dev provides web design, development, SEO, and digital marketing services tailored for businesses. Get a custom solution for your website today."
        />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-indigo-600">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Comprehensive web development, SEO, and digital marketing
              solutions tailored for businesses of all sizes. We combine modern
              technology with strategic expertise to deliver results.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section
          id="services"
          className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-slate-50 to-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <article
                  key={service.id}
                  className="bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all p-8 flex flex-col"
                  aria-labelledby={`service-title-${service.id}`}
                >
                  <div
                    className="inline-flex p-4 bg-indigo-100 rounded-lg mb-4 w-fit"
                    aria-hidden="true"
                  >
                    <service.icon size={32} className="text-indigo-600" />
                  </div>
                  <h3
                    id={`service-title-${service.id}`}
                    className="text-2xl font-bold text-gray-900 mb-3"
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="mb-6 border-t pt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle
                            size={18}
                            className="text-indigo-600 flex-shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <p className="text-gray-800 font-semibold mb-4">
                      {service.price}
                    </p>
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                      aria-label={`Get started with ${service.title}`}
                    >
                      Get Started <ArrowRight size={18} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Lucky Tech Dev
              </h2>
              <p className="text-lg text-gray-600">
                We provide more than just development services — we deliver
                results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className="inline-flex p-4 bg-indigo-100 rounded-lg mb-4"
                    aria-hidden="true"
                  >
                    <item.icon size={32} className="text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Development Process
              </h2>
              <p className="text-lg text-gray-600">
                We follow a structured approach to deliver exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="bg-white p-8 rounded-xl border border-gray-200"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 text-white rounded-full font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Technology Stack
              </h2>
              <p className="text-lg text-gray-600">
                We use the latest and most reliable technologies to deliver
                cutting-edge solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Frontend
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Vue.js",
                    "JavaScript",
                  ].map((tech) => (
                    <div
                      key={tech}
                      className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-center font-semibold text-gray-900 hover:bg-indigo-100 transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Backend & DevOps
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Node.js",
                    "Python",
                    "PostgreSQL",
                    "MongoDB",
                    "AWS",
                    "Docker",
                  ].map((tech) => (
                    <div
                      key={tech}
                      className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-center font-semibold text-gray-900 hover:bg-indigo-100 transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-indigo-600 to-indigo-800">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's discuss your requirements and find the perfect solution for
              your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                aria-label="Contact Lucky Tech Dev"
              >
                Contact Us <ArrowRight size={20} />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
