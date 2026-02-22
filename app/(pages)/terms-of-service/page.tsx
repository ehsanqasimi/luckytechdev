import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TermsOfService = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using the Lucky Tech Dev website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
    },
    {
      title: "2. Use License",
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on Lucky Tech Dev's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
      
      • Modify or copy the materials
      • Use the materials for any commercial purpose or for any public display
      • Attempt to decompile or reverse engineer any software contained on the website
      • Remove any copyright or other proprietary notations from the materials
      • Transfer the materials to another person or "mirror" the materials on any other server
      • Violate any applicable laws or regulations relating to access to the website`,
    },
    {
      title: "3. Disclaimer",
      content: `The materials on Lucky Tech Dev's website are provided on an 'as is' basis. Lucky Tech Dev makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.`,
    },
    {
      title: "4. Limitations",
      content: `In no event shall Lucky Tech Dev or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Lucky Tech Dev's website, even if Lucky Tech Dev or an authorized representative has been notified orally or in writing of the possibility of such damage.`,
    },
    {
      title: "5. Accuracy of Materials",
      content: `The materials appearing on Lucky Tech Dev's website could include technical, typographical, or photographic errors. Lucky Tech Dev does not warrant that any of the materials on its website are accurate, complete, or current. Lucky Tech Dev may make changes to the materials contained on its website at any time without notice.`,
    },
    {
      title: "6. Materials on Website",
      content: `Lucky Tech Dev has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Lucky Tech Dev of the site. Use of any such linked website is at the user's own risk.`,
    },
    {
      title: "7. Modifications",
      content: `Lucky Tech Dev may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.`,
    },
    {
      title: "8. Governing Law",
      content: `These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.`,
    },
    {
      title: "9. Service Delivery",
      content: `Lucky Tech Dev provides web development, mobile app development, and digital solutions services. All services are provided on a project basis as outlined in individual contracts and proposals. The company strives to meet deadlines and quality standards as mutually agreed upon with clients.`,
    },
    {
      title: "10. Payment Terms",
      content: `Payment terms will be specified in individual project contracts. Unless otherwise agreed in writing, invoices are due within 30 days of issuance. Late payments may incur additional fees as specified in the contract.`,
    },
    {
      title: "11. Intellectual Property Rights",
      content: `Upon receipt of full payment, client receives ownership of the final deliverables created specifically for their project. Lucky Tech Dev retains the right to use general methodologies, techniques, and know-how developed during the project. All pre-existing Lucky Tech Dev intellectual property remains the exclusive property of Lucky Tech Dev.`,
    },
    {
      title: "12. Confidentiality",
      content: `Both parties agree to maintain the confidentiality of any proprietary information shared during the engagement. This includes project details, business information, and any other sensitive data shared between the parties.`,
    },
    {
      title: "13. Limitation of Liability",
      content: `Lucky Tech Dev's total liability for any claim arising out of or relating to this agreement shall not exceed the amount paid by client for the services in question. Lucky Tech Dev shall not be liable for indirect, incidental, special, consequential, or punitive damages.`,
    },
    {
      title: "14. Indemnification",
      content: `Client agrees to indemnify and hold harmless Lucky Tech Dev from any claims, damages, or costs arising from client's use of the services, violation of these terms, or infringement of third-party rights caused by client-provided content.`,
    },
    {
      title: "15. Termination",
      content: `Either party may terminate the engagement by providing written notice as specified in the individual project contract. Upon termination, client remains responsible for payment of all work completed to date.`,
    },
    {
      title: "16. Contact Information",
      content: `If you have any questions about these Terms of Service, please contact us at:
      
      Lucky Tech Dev
      Email: hello@luckytech.dev
      Phone: +1 (555) 123-4567
      Address: 123 Tech Street, San Francisco, CA 94105, USA`,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Terms of <span className="text-indigo-600">Service</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Last Updated: January 6, 2026
          </p>
          <p className="text-gray-600 leading-relaxed">
            Please read these terms of service carefully before using the Lucky
            Tech Dev website and services. By accessing and using our website,
            you acknowledge that you have read, understood, and agree to be
            bound by all of the terms and conditions contained herein.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <div key={idx} className="border-l-4 border-indigo-600 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Notes */}
          <div className="mt-16 p-6 bg-indigo-50 rounded-xl border border-indigo-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Important Notice
            </h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service constitute the entire agreement between you
              and Lucky Tech Dev regarding your use of the website and services.
              If any provision of these terms is found to be invalid or
              unenforceable, the remaining provisions shall continue in full
              force and effect.
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/privacy-policy"
            className="p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-lg transition-all group"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
              Privacy Policy
            </h3>
            <p className="text-gray-600 mb-4">
              Learn how we collect, use, and protect your personal information.
            </p>
            <div className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all">
              Read More <ArrowRight size={18} />
            </div>
          </Link>

          <Link
            href="/contact"
            className="p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-lg transition-all group"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-4">
              Have questions about our terms? Get in touch with our team.
            </p>
            <div className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all">
              Contact <ArrowRight size={18} />
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-600 mb-8">
            If you understand and accept these terms, feel free to explore our
            services and get in touch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;
