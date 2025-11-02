import React from 'react';
import { Scale, AlertTriangle, CheckCircle, BookOpen, ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <Scale className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 sm:p-10">
            {/* Acceptance */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Acceptance of Terms</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using koussai.dev ("the Service"), you accept and agree to be bound by 
                the terms and provision of this agreement.
              </p>
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <p className="text-green-800 text-sm">
                  <strong>Note:</strong> If you do not agree to these terms, please do not use our Service. 
                  We reserve the right to update these terms at any time without prior notice.
                </p>
              </div>
            </section>

            {/* Service Description */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Service Description</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  koussai.dev provides economic calculators and related educational content designed to 
                  help users understand and perform various economic calculations.
                </p>
                
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-900 mb-3">What We Provide</h3>
                  <ul className="text-blue-800 space-y-2 list-disc list-inside">
                    <li>Free access to economic calculators</li>
                    <li>Educational content and explanations</li>
                    <li>Regular updates and new features</li>
                    <li>Customer support via email</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-semibold text-gray-900">User Responsibilities</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="font-semibold text-orange-900 mb-3">Permitted Uses</h3>
                  <ul className="text-orange-800 space-y-2 text-sm">
                    <li>• Personal education and research</li>
                    <li>• Academic purposes</li>
                    <li>• Professional analysis</li>
                    <li>• Non-commercial use</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                  <h3 className="font-semibold text-red-900 mb-3">Prohibited Activities</h3>
                  <ul className="text-red-800 space-y-2 text-sm">
                    <li>• Illegal or fraudulent activities</li>
                    <li>• Data scraping without permission</li>
                    <li>• Reverse engineering</li>
                    <li>• Spamming or harassment</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Important Disclaimers</h2>
              </div>
              
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
                <h3 className="font-semibold text-yellow-900 mb-4">Educational Purpose Only</h3>
                <div className="space-y-3 text-yellow-800 text-sm">
                  <p>
                    <strong>Not Financial Advice:</strong> Our calculators and content are for educational 
                    purposes only and should not be considered financial, investment, or professional advice.
                  </p>
                  <p>
                    <strong>Accuracy:</strong> While we strive for accuracy, we cannot guarantee that all 
                    calculations are error-free. Always verify important calculations through multiple sources.
                  </p>
                  <p>
                    <strong>Liability:</strong> We are not liable for any decisions made based on information 
                    provided by our Service.
                  </p>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Intellectual Property</h2>
              
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <div className="grid md:grid-cols-2 gap-6 text-purple-800">
                  <div>
                    <p className="font-semibold mb-2">Our Content</p>
                    <p className="text-sm">
                      All calculator algorithms, educational content, and website design are the 
                      intellectual property of koussai.dev.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Your Data</p>
                    <p className="text-sm">
                      You retain ownership of any data you input into our calculators. We do not 
                      claim ownership over your calculations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Limitation of Liability</h2>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="space-y-4 text-gray-700 text-sm">
                  <p>
                    To the fullest extent permitted by law, koussai.dev shall not be liable for any 
                    indirect, incidental, special, consequential, or punitive damages resulting from 
                    your use or inability to use the Service.
                  </p>
                  <p>
                    This includes, but is not limited to, damages for lost profits, data loss, or 
                    business interruption, whether based on warranty, contract, tort, or any other 
                    legal theory.
                  </p>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Governing Law</h2>
              
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                <p className="text-indigo-800">
                  These Terms shall be governed by and construed in accordance with the laws of the 
                  jurisdiction in which koussai.dev operates, without regard to its conflict of law provisions.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="text-center border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Changes to Terms</h3>
              <p className="text-gray-700 mb-4">
                We may update these Terms of Service from time to time. We will notify users of 
                any material changes by posting the new Terms on this page and updating the 
                "Last updated" date.
              </p>
              <p className="text-sm text-gray-600">
                Continued use of the Service after changes constitutes acceptance of the new Terms.
              </p>
            </section>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Need clarification?{' '}
            <a 
              href="mailto:koussaiimahdi@gmail.com" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;