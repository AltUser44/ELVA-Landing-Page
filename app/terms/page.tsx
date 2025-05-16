import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Bubble decorations */}
      <div className="fixed top-40 right-20 w-72 h-72 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
      <div className="fixed bottom-40 left-20 w-64 h-64 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
      <div className="fixed top-1/3 right-1/3 w-48 h-48 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>

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
            Terms of Service
          </h1>

          <div className="space-y-6 text-gray-700">
            <p className="font-medium text-lg text-purple-700">Last Updated: May 16, 2025</p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Elva virtual assistant application ("Service"), you agree to be bound by these
                Terms of Service. If you do not agree to these terms, please do not use our Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">2. Description of Service</h2>
              <p>
                Elva is a virtual assistant application designed to help users plan, execute, and reflect on their daily
                goals. The Service may include features such as task management, scheduling, reminders, and personalized
                recommendations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">3. User Accounts</h2>
              <p>
                To use certain features of the Service, you may need to create an account. You are responsible for
                maintaining the confidentiality of your account information and for all activities that occur under your
                account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">4. User Content</h2>
              <p>
                You retain ownership of any content you submit to the Service. By submitting content, you grant us a
                worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display
                such content in connection with providing and promoting the Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">5. Prohibited Conduct</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for any illegal purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Attempt to gain unauthorized access to the Service</li>
                <li>Use the Service to transmit harmful code or malware</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">6. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by Elva Inc. and are
                protected by international copyright, trademark, patent, trade secret, and other intellectual property
                laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">7. Termination</h2>
              <p>
                We may terminate or suspend your account and access to the Service immediately, without prior notice or
                liability, for any reason, including if you breach these Terms of Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">8. Disclaimer of Warranties</h2>
              <p>
                The Service is provided "as is" and "as available" without warranties of any kind, either express or
                implied. We do not warrant that the Service will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">9. Limitation of Liability</h2>
              <p>
                In no event shall Elva Inc. be liable for any indirect, incidental, special, consequential, or punitive
                damages, including loss of profits, data, or use, arising out of or in connection with these Terms of
                Service or the Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms of Service at any time. We will provide notice of
                any significant changes. Your continued use of the Service after such changes constitutes your
                acceptance of the new Terms of Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-indigo-700">11. Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
              <p className="font-medium">Email: kesternkese@gmail.com</p>
              <p className="font-medium">Phone: 830-475-5744</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
