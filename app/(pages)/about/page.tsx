"use client";

import React from "react";
import Head from "next/head";
import {
  Award,
  Target,
  Heart,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace new technologies to solve complex problems creatively.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work closely with our clients, treating their success as our own and maintaining transparent communication.",
    },
    {
      icon: Heart,
      title: "Quality",
      description:
        "We're committed to delivering high-quality solutions that exceed expectations and stand the test of time.",
    },
    {
      icon: Zap,
      title: "Excellence",
      description:
        "We strive for excellence in every project, detail, and interaction with our clients and partners.",
    },
  ];

  const milestones = [
    {
      year: "2016",
      title: "Founded",
      description:
        "Lucky Tech Dev was founded with a vision to transform businesses through technology.",
    },
    {
      year: "2017",
      title: "First 50 Clients",
      description: "Grew to serve 50+ clients across various industries.",
    },
    {
      year: "2019",
      title: "Team Expansion",
      description:
        "Expanded team to 25+ professionals across development, design, and management.",
    },
    {
      year: "2021",
      title: "Global Reach",
      description:
        "Started serving international clients across North America, Europe, and Asia.",
    },
    {
      year: "2023",
      title: "100+ Projects",
      description:
        "Milestone of completing 100+ successful projects with 95%+ client satisfaction.",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description:
        "Recognized as a leading technology development company in the region.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          About Lucky Tech Dev - Web Development & Digital Solutions
        </title>
        <meta
          name="description"
          content="Learn about Lucky Tech Dev, a leading web development company delivering custom digital solutions, web and mobile applications, and digital transformation services since 2016."
        />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                About <span className="text-indigo-600">Lucky Tech Dev</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                We're a team of passionate developers, designers, and innovators
                dedicated to transforming businesses through cutting-edge
                technology solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Since 2016, we've helped businesses of all sizes achieve their
                digital goals with custom web and mobile applications, cloud
                solutions, and comprehensive digital strategies.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors w-fit"
                aria-label="Work with Lucky Tech Dev"
              >
                Work With Us <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <article className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <Target
                  className="text-indigo-600"
                  size={32}
                  aria-hidden="true"
                />
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To empower businesses by delivering innovative, reliable, and
                scalable technology solutions that drive growth, improve
                efficiency, and create lasting value. We build long-term
                partnerships with our clients to help them stay ahead in the
                digital landscape.
              </p>
            </article>

            <article className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <Lightbulb
                  className="text-indigo-600"
                  size={32}
                  aria-hidden="true"
                />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become the most trusted technology partner for businesses
                seeking excellence in digital transformation. We envision a
                future where companies leverage cutting-edge technology to solve
                real-world problems and create meaningful impact in their
                industries and communities.
              </p>
            </article>
          </div>
        </section>

        {/* Core Values */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {values.map((value, idx) => (
                <article
                  key={idx}
                  className="bg-white rounded-xl p-8 border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all"
                  aria-labelledby={`value-title-${idx}`}
                >
                  <div
                    className="inline-flex p-3 bg-indigo-100 rounded-lg mb-4"
                    aria-hidden="true"
                  >
                    <value.icon size={32} className="text-indigo-600" />
                  </div>
                  <h3
                    id={`value-title-${idx}`}
                    className="text-xl font-bold text-gray-900 mb-3"
                  >
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why We're Different
              </h2>
              <p className="text-lg text-gray-600">
                What sets Lucky Tech Dev apart from the rest
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Client-Centric Approach",
                  description:
                    "We prioritize understanding your business goals and challenges, ensuring our solutions directly address your needs.",
                },
                {
                  title: "Transparent Communication",
                  description:
                    "Regular updates, honest feedback, and open collaboration throughout the entire project lifecycle.",
                },
                {
                  title: "Agile Methodology",
                  description:
                    "We use agile practices to ensure flexibility, faster delivery, and continuous improvement.",
                },
                {
                  title: "Ongoing Support",
                  description:
                    "Our relationship doesn't end at launch. We provide comprehensive support and maintenance.",
                },
                {
                  title: "Cutting-Edge Technology",
                  description:
                    "We stay updated with the latest technologies and best practices to deliver modern solutions.",
                },
                {
                  title: "Proven Track Record",
                  description:
                    "With 150+ projects completed and 95% client satisfaction, our results speak for themselves.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle
                    className="text-indigo-600 flex-shrink-0"
                    size={24}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-indigo-600 to-indigo-800">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's work together to bring your vision to life and achieve your
              business goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              aria-label="Contact Lucky Tech Dev"
            >
              Get in Touch <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
