import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-transparent mt-16">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-white mb-4 tracking-wide">
        About Our AI Surveillance Detection Platform
      </h1>

      {/* Description Section */}
      <p className="text-lg text-white text-center max-w-4xl mb-8 leading-relaxed">
        Welcome to our revolutionary{" "}
        <strong>AI Surveillance Detection Platform</strong>, a comprehensive
        solution for advanced safety and security applications. This project was
        designed and developed by <strong>Muhammad Taha Saleem</strong>{" "}
        (2022-CS-139), with crucial contributions from{" "}
        <strong>Hussain Ali</strong> (2022-CS-129). Together, we have built a
        sophisticated system capable of addressing diverse surveillance needs
        with precision and efficiency.
      </p>

      {/* Features Section */}
      <div className="text-white text-left max-w-4xl space-y-6">
        <h2 className="text-2xl font-semibold border-b border-white pb-2 mb-4">
          Key Features
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Comprehensive Detection Categories:</strong> This platform
            offers precise detection across multiple categories, including:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
              <li>Animals</li>
              <li>Furniture</li>
              <li>Tools</li>
              <li>Vehicles</li>
              <li>People</li>
              <li>Food</li>
            </ul>
          </li>

          <li>
            <strong>Surveillance Tools:</strong> A robust suite of tools
            tailored for surveillance, ensuring advanced monitoring and data
            analysis capabilities.
          </li>

          <li>
            <strong>Admin Dashboard:</strong> A feature-rich dashboard for
            administrators, allowing them to:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
              <li>
                Manage datasets, including uploading and linking market
                datasets.
              </li>
              <li>Track detection logs with screenshots of events.</li>
              <li>
                Monitor system performance and maintain security standards.
              </li>
            </ul>
          </li>

          <li>
            <strong>Real-Time Alerts:</strong> Automatically sends email
            notifications with screenshots whenever an event is detected,
            ensuring timely responses.
          </li>

          <li>
            <strong>Modern Design:</strong> Features a sleek, monochromatic
            theme with transparent backgrounds, subtle hover effects, and a
            user-friendly interface for effortless navigation.
          </li>

          <li>
            <strong>Contact and Support:</strong> Includes a dedicated contact
            page for user inquiries, feedback, and assistance.
          </li>

          <li>
            <strong>Dataset Integration:</strong> Seamless integration with
            dataset markets, providing links and detailed descriptions for data
            sources.
          </li>
        </ul>
      </div>

      {/* Footer Section */}
      <footer className="mt-12 text-center text-white">
        <p>
          Our AI Surveillance Detection Platform is a testament to innovation
          and dedication. We aim to redefine security and monitoring solutions
          for a safer future. Stay connected for upcoming features and updates!
        </p>
      </footer>
    </div>
  );
}
