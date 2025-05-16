import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Bubble decorations */}
      <div className="fixed top-20 left-20 w-64 h-64 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
      <div className="fixed bottom-20 right-20 w-80 h-80 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
      <div className="fixed top-1/2 left-1/3 w-40 h-40 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-gray-700">
            <p className="font-medium text-lg text-purple-700">Last Updated: May 16, 2025</p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">1. Introduction</h2>
              <p>
                Welcome to Elva ("we," "our," or "us"). We respect your privacy and are committed to protecting your
                personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our Elva virtual assistant application.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">2. Information We Collect</h2>
              <p>We may collect several types of information from and about users of our application, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal identifiers such as name and email address</li>
                <li>Usage data and interaction with the application</li>
                <li>Device information and technical data</li>
                <li>User preferences and settings</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Personalize your experience</li>
                <li>Communicate with you about updates and new features</li>
                <li>Analyze usage patterns to enhance functionality</li>
                <li>Protect against unauthorized access and misuse</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">4. Data Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who perform services on our behalf</li>
                <li>Business partners with your consent</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">5. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information.
                However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">7. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="font-medium">Email: kesternkese@gmail.com</p>
              <p className="font-medium">Phone: 830-475-5744</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
