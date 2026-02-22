"use client";

import React, { useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

const Contact = () => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);

    // Also handle any iframes that might already exist
    const iframes = document.querySelectorAll(
      "iframe[data-tally-src]:not([src])"
    );
    iframes.forEach((iframe) => {
      const src = iframe.getAttribute("data-tally-src");
      if (src) {
        iframe.setAttribute("src", src);
      }
    });
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "0435577417",
      subtext: "Mon-Fri, 9:00 AM - 10:00 PM (AEDT)",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@luckytech.dev",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "2A Lucy St",
      subtext: "Merrylands West, NSW 2160",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "9:00 AM - 10:00 PM (AEDT)",
      subtext: "Monday to Friday",
    },
  ];

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer:
        "Most projects take 4-12 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes! We offer flexible support packages ranging from monthly maintenance to 24/7 managed services.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "We work with React, Next.js, Node.js, Python, AWS, Docker, and many more. We choose the best tech for your specific needs.",
    },
    {
      question: "How much does a project cost?",
      answer:
        "Costs vary based on project scope and complexity. We provide custom quotes after understanding your requirements.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "Absolutely! We often work alongside existing teams and can provide staff augmentation services.",
    },
    {
      question: "Do you sign NDAs?",
      answer:
        "Yes, we sign NDAs and take client confidentiality very seriously. We can discuss terms in our initial meeting.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="text-indigo-600">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Have a project in mind? We'd love to hear about it. Let's discuss
            how we can help transform your vision into reality.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all"
            >
              <div className="inline-flex p-3 bg-indigo-100 rounded-lg mb-4">
                <info.icon size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-900 font-semibold mb-1">{info.content}</p>
              <p className="text-sm text-gray-600">{info.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Send us a Message
              </h2>

              <iframe
                data-tally-src="https://tally.so/embed/7RbeR9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="398"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Contact Form"
              ></iframe>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-8 border border-indigo-200">
                <div className="flex items-start gap-4 mb-4">
                  <MessageSquare
                    className="text-indigo-600 flex-shrink-0"
                    size={28}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Prefer to Chat?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Join our live chat or schedule a quick call with our team
                      to discuss your project.
                    </p>
                    <Link
                      href="https://wa.me/+61435577417"
                      className="text-indigo-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Start Live Chat <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What Happens Next?
                </h3>
                {[
                  {
                    step: 1,
                    title: "Initial Contact",
                    desc: "We'll review your inquiry and reach out within 24 hours",
                  },
                  {
                    step: 2,
                    title: "Consultation Call",
                    desc: "Schedule a free call to discuss your project in detail",
                  },
                  {
                    step: 3,
                    title: "Custom Proposal",
                    desc: "We'll prepare a tailored proposal with timeline and pricing",
                  },
                  {
                    step: 4,
                    title: "Get Started",
                    desc: "Upon approval, we'll kick off your project right away",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border border-gray-200 rounded-lg hover:border-indigo-300 transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
                  <span>{faq.question}</span>
                  <span className="text-indigo-600 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Fill out the form above and let's turn your ideas into reality.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Back to Home <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Contact;
