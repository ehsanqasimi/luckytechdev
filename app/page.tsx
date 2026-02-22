"use client";

import {
  ArrowRight,
  Zap,
  Code,
  Smartphone,
  Palette,
  Settings,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen light-purple-gradient relative overflow-hidden">
      {/* White moving light circle following mouse */}
      <div
        className="mouse-light"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Web Development for{" "}
              <span className="text-indigo-600">
                Startups and Small Businesses
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              LuckyTechDev builds fast, modern, and scalable websites for
              startups and small businesses. We design and develop custom web
              solutions that help businesses grow, convert users, and stand out
              online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Start Your Project <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                View Services <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex items-center justify-center">
            <div className="w-full h-80 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-2xl flex items-center justify-center border-2 border-indigo-200">
              <div className="space-y-4 p-6">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <Code size={24} className="text-white" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <Smartphone size={24} className="text-white" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-indigo-400 rounded-lg flex items-center justify-center">
                    <Zap size={24} className="text-white" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Work With LuckyTechDev
            </h2>
            <p className="text-lg text-gray-600">
              Every project is built with performance, usability, SEO and future
              growth in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Modern Web Development",
                desc: "Clean, scalable development using proven frontend and backend technologies.",
              },
              {
                icon: Palette,
                title: "Clean and Functional Design",
                desc: "Interfaces designed to look professional and guide users effectively.",
              },
              {
                icon: Zap,
                title: "High Performance Builds",
                desc: "Performance optimized websites that load fast and feel smooth to use.",
              },
              {
                icon: Settings,
                title: "Scalable Architecture",
                desc: "Architecture designed to scale as your business and traffic grow.",
              },
              {
                icon: TrendingUp,
                title: "Data-Driven",
                desc: "Websites built with analytics and SEO foundations for measurable results.",
              },
              {
                icon: Smartphone,
                title: "Mobile First Development",
                desc: "Mobile first layouts for better usability and search rankings.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all bg-gradient-to-br from-white to-gray-50"
              >
                <div className="inline-flex p-3 bg-indigo-100 rounded-lg mb-4">
                  <feature.icon size={28} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Practical web solutions tailored to startups and growing
              businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Design and Development",
                desc: "Custom designed and developed websites using modern frontend and backend technologies.",
              },
              {
                title:
                  "SEO (Search Engine Optimization) and Website Optimization",
                desc: "SEO focused website optimization to improve search visibility and traffic.",
              },
              {
                title: "Long Term Website Maintenance & Support",
                desc: "Ongoing maintenance, updates, and support to keep your website secure and reliable.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-gray-200 hover:border-indigo-300 bg-white hover:shadow-lg transition-all group cursor-pointer"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link
                  href="/services"
                  className="text-indigo-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-indigo-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Let Us Build Your Website
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us discuss how we can build a reliable, high quality website
            tailored to your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors"
          >
            Contact Us Today <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Page;
