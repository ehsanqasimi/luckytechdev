import React from "react";
import Link from "next/link";
import { ArrowRight, Shield, Lock, Eye } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Introduction",
      content: `Lucky Tech Dev ("we", "us", "our", or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.

Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our website or services.`,
    },
    {
      title: "2. Information We Collect",
      content: `We may collect information about you in a variety of ways. The information we may collect on the site includes:

Personal Identification Information:
• Name, email address, phone number, physical address
• Company name and industry information
• Project details and requirements
• Payment information

Automatically Collected Information:
• Browser type and version
• Operating system
• Device type and identifier
• Pages visited and time spent on each page
• Referral source and exit pages
• IP address and geolocation data
• Cookies and similar tracking technologies`,
    },
    {
      title: "3. Use of Your Information",
      content: `Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:

• Create and manage your account
• Email you regarding your inquiry or service request
• Fulfill and send information about your orders
• Generate analytics about our site usage
• Improve our website and services
• Monitor and analyze trends and usage
• Perform other business activities as needed
• Process your transactions and send related information
• Respond to your inquiries and offer customer support
• Send promotional communications (with your consent)
• Prevent fraudulent transactions and enhance security`,
    },
    {
      title: "4. Disclosure of Your Information",
      content: `We may share your information in the following situations:

Service Providers: We may disclose your information to third parties who perform services on our behalf, including payment processors, hosting providers, and analytics services.

Business Transfers: If Lucky Tech Dev is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.

Law and Protection: We may disclose your information when required by law or to protect our legal rights, your safety, or the safety of others.

Consent: We may disclose your information with your explicit consent for any purpose.

Aggregate Data: We may share aggregated, anonymized data that cannot identify you with third parties.`,
    },
    {
      title: "5. Security of Your Information",
      content: `We implement appropriate technical and organizational measures designed to protect the security of any personal information we process. However, please note that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.

Security measures include:
• SSL/TLS encryption for data in transit
• Secure password protection
• Limited access to personal information
• Regular security audits and updates
• Compliance with industry security standards`,
    },
    {
      title: "6. Cookies and Tracking Technologies",
      content: `We use cookies and similar tracking technologies to track activity on our website and improve your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.

Types of cookies we use:
• Essential cookies (required for website function)
• Performance cookies (analyze site usage)
• Functional cookies (remember your preferences)
• Marketing cookies (track advertising effectiveness)

You may opt-out of cookie tracking through your browser settings or privacy tools.`,
    },
    {
      title: "7. Third-Party Links",
      content: `Our website may contain links to third-party websites. This Privacy Policy does not apply to websites operated by other companies or organizations. We encourage you to review the privacy policies of any third-party sites before providing your information or using their services. Lucky Tech Dev is not responsible for the privacy practices of third-party websites.`,
    },
    {
      title: "8. Data Retention",
      content: `We retain personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. The retention period may vary depending on the context and our legal obligations.

General retention periods:
• Account information: Duration of your relationship with us plus 7 years
• Communication records: 3-5 years after last interaction
• Payment information: As required by law (typically 7 years)
• Marketing data: Until you opt-out

You may request deletion of your data subject to legal obligations and legitimate business needs.`,
    },
    {
      title: "9. Your Rights and Choices",
      content: `You have certain rights regarding your personal information:

Access: You have the right to know what personal information we hold about you.

Correction: You may request correction of inaccurate or incomplete information.

Deletion: You may request deletion of your personal information in certain circumstances.

Objection: You may object to certain processing of your information.

Data Portability: You may request your information in a portable format.

Opt-out: You may opt-out of marketing communications at any time.

To exercise any of these rights, please contact us using the information provided in the Contact section.`,
    },
    {
      title: "10. GDPR Compliance",
      content: `For users in the European Union, United Kingdom, and other jurisdictions with similar privacy laws, we comply with the General Data Protection Regulation (GDPR) and similar regulations.

Legal basis for processing:
• Contractual necessity (to provide services)
• Legitimate interests (business operations)
• Consent (where you've explicitly agreed)
• Legal obligation (compliance with law)

You have additional rights under GDPR including the right to lodge a complaint with your local data protection authority.`,
    },
    {
      title: "11. CCPA Compliance",
      content: `For California residents, we comply with the California Consumer Privacy Act (CCPA). Under CCPA, you have the right to:

• Know what personal information is collected
• Know whether your information is sold or shared
• Delete your personal information
• Opt-out of the sale or sharing of your information
• Non-discrimination for exercising your CCPA rights

To submit a CCPA request, please contact us at privacy@luckytech.dev. We will verify your identity before processing your request.`,
    },
    {
      title: "12. Children's Privacy",
      content: `Our website and services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected such information, we will take steps to delete it promptly.

If you are aware that we have collected information from a child, please contact us immediately at privacy@luckytech.dev.`,
    },
    {
      title: "13. Contact Preferences",
      content: `You can manage your communication preferences by:

• Updating your account settings
• Clicking "unsubscribe" in any email from us
• Contacting us directly with your preferences
• Opting out of cookies through your browser

Please note that even if you opt-out of marketing communications, we will continue to send you service-related and transactional emails.`,
    },
    {
      title: "14. International Data Transfers",
      content: `Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country.

When we transfer information internationally, we implement appropriate safeguards including:
• Standard contractual clauses
• Privacy Shield (where applicable)
• Binding corporate rules
• Your explicit consent

By using our services, you consent to the transfer of your information as described in this Privacy Policy.`,
    },
    {
      title: "15. Changes to This Privacy Policy",
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, and other factors. We will notify you of material changes by updating the "Last Updated" date and, where required, obtaining your consent.

Your continued use of our website following the posting of revised Privacy Policy means you accept and agree to the changes.`,
    },
    {
      title: "16. Contact Us",
      content: `If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:

Lucky Tech Dev
Email: privacy@luckytech.dev
Phone: +1 (555) 123-4567
Address: 123 Tech Street, San Francisco, CA 94105, USA
Data Protection Officer: dpo@luckytech.dev

We will respond to your inquiry within 30 days.`,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Privacy <span className="text-indigo-600">Policy</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Last Updated: January 6, 2026
          </p>
          <p className="text-gray-600 leading-relaxed">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, disclose, and protect your information. Please read
            this policy carefully to understand our privacy practices.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Shield,
                title: "Data Protection",
                description:
                  "We implement industry-leading security measures to protect your information",
              },
              {
                icon: Lock,
                title: "Encryption",
                description:
                  "All sensitive data is encrypted in transit and at rest",
              },
              {
                icon: Eye,
                title: "Transparency",
                description:
                  "We're transparent about what data we collect and how we use it",
              },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex p-3 bg-indigo-100 rounded-lg mb-4">
                  <feature.icon size={32} className="text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Content */}
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

          {/* Notice Box */}
          <div className="mt-16 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Your Privacy Rights
            </h3>
            <p className="text-gray-700 leading-relaxed">
              You have the right to access, correct, delete, or port your
              personal information. You also have the right to object to certain
              processing of your data. To exercise these rights, please contact
              us using the information in the Contact section. We will respond
              to your request within 30 days.
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/terms-of-service"
            className="p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-lg transition-all group"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
              Terms of Service
            </h3>
            <p className="text-gray-600 mb-4">
              Review our terms and conditions for using our website and
              services.
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
              Have privacy concerns? Contact our Data Protection Officer.
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
            Questions About Our Privacy Practices?
          </h2>
          <p className="text-gray-600 mb-8">
            We're here to help. Contact us anytime with your privacy concerns or
            requests.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
