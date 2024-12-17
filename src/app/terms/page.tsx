/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen px-8 py-16 bg-transparent text-white mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-100">
          Terms and Conditions
        </h1>
        <p className="text-gray-300 leading-relaxed mb-4">
          Welcome to AI Vision. By using this application, you agree to comply
          with and be bound by the following terms and conditions. Please review
          them carefully.
        </p>

        <h2 className="text-2xl font-semibold text-gray-100 mt-6 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-300 mb-4">
          By accessing and using AI Vision, you acknowledge that you have read,
          understood, and agree to be legally bound by these terms and
          conditions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-100 mt-6 mb-4">
          2. Usage
        </h2>
        <p className="text-gray-300 mb-4">
          AI Vision provides tools for real-time object detection. You are
          responsible for ensuring compliance with applicable laws and
          regulations while using the service.
        </p>

        <h2 className="text-2xl font-semibold text-gray-100 mt-6 mb-4">
          3. Limitations
        </h2>
        <p className="text-gray-300 mb-4">
          This application is provided as-is&quot; without warranties of any
          kind, express or implied. AI Vision is not liable for any damages or
          misuse of the application.
        </p>

        <h2 className="text-2xl font-semibold text-gray-100 mt-6 mb-4">
          4. Intellectual Property
        </h2>
        <p className="text-gray-300 mb-4">
          All content, design, and code within AI Vision are the intellectual
          property of the developers and are protected by copyright laws.
        </p>

        <h2 className="text-2xl font-semibold text-gray-100 mt-6 mb-4">
          5. Amendments
        </h2>
        <p className="text-gray-300 mb-4">
          We reserve the right to update these terms and conditions at any time.
          Changes will be communicated via the application.
        </p>

        <footer className="mt-12 text-center text-gray-400">
          <p>
            Contact us at{" "}
            <a
              href="mailto:tahasaleem.professional@gmail.com"
              className="underline hover:text-gray-200"
            >
              tahasaleem.professional@gmail.com
            </a>{" "}
            for more information.
          </p>
        </footer>
      </div>
    </div>
  );
}
