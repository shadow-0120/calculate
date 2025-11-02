import React from 'react';
import { Shield, Lock, Eye, Database, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
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
            <div className="p-3 bg-blue-100 rounded-xl">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 sm:p-10">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                At koussai.dev, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our economic calculators and services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>Email address (when you contact us)</li>
                    <li>Name (optional, when provided)</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Technical Information</h3>
                  <ul className="text-gray-700 space-y-2 list-disc list-inside">
                    <li>Browser type and version</li>
                    <li>IP address (anonymized)</li>
                    <li>Device information</li>
                    <li>Usage data and analytics</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Calculator Data</h3>
                  <p className="text-gray-700">
                    All calculations are performed locally in your browser. We do not store or transmit 
                    your input data to our servers unless explicitly required for specific features.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-semibold text-gray-900">How We Use Your Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <h3 className="font-semibold text-green-900 mb-3">Service Operation</h3>
                  <ul className="text-green-800 space-y-2 text-sm">
                    <li>• Provide and maintain our calculators</li>
                    <li>• Improve user experience</li>
                    <li>• Develop new features</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="font-semibold text-blue-900 mb-3">Communication</h3>
                  <ul className="text-blue-800 space-y-2 text-sm">
                    <li>• Respond to your inquiries</li>
                    <li>• Send important updates</li>
                    <li>• Provide customer support</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Data Protection</h2>
              </div>
              
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <h3 className="font-semibold text-red-900 mb-4">Security Measures</h3>
                <div className="grid md:grid-cols-2 gap-4 text-red-800 text-sm">
                  <div>
                    <p className="font-medium mb-2">Encryption</p>
                    <p>All data transmissions are encrypted using SSL/TLS protocols</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Access Control</p>
                    <p>Strict access controls and authentication mechanisms</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Regular Audits</p>
                    <p>Continuous security monitoring and vulnerability assessments</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Data Minimization</p>
                    <p>We only collect what's necessary for service operation</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Rights</h2>
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <div className="grid md:grid-cols-2 gap-6 text-purple-800">
                  <div>
                    <p className="font-semibold mb-3">Access & Correction</p>
                    <p className="text-sm">Request access to or correction of your personal data</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-3">Data Portability</p>
                    <p className="text-sm">Receive your data in a structured, machine-readable format</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-3">Deletion</p>
                    <p className="text-sm">Request deletion of your personal information</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-3">Objection</p>
                    <p className="text-sm">Object to certain data processing activities</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="text-center border-t border-gray-200 pt-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Mail className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Questions?</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Contact us at{' '}
                <a 
                  href="mailto:koussaiimahdi@gmail.com" 
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  koussaiimahdi@gmail.com
                </a>
              </p>
              <p className="text-sm text-gray-600">
                We typically respond within 24-48 hours.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;