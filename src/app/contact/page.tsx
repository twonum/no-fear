import React from "react";

export default function Contact() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{ marginTop: "2rem" }}
    >
      <div className="w-full max-w-lg p-6 bg-gradient-to-b from-transparent to-black rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          Have Any Inquiries?
        </h1>
        <p className="text-center text-sm mb-8">
          If you have any questions or need further information about our
          project, feel free to reach out. We’re here to help!
        </p>
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 text-white bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white transition duration-300 hover:shadow-[0_0_10px_white]"
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 text-white bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white transition duration-300 hover:shadow-[0_0_10px_white]"
            />
          </div>
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full px-4 py-2 text-white bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white transition duration-300 hover:shadow-[0_0_10px_white]"
            />
          </div>
          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 text-white bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white transition duration-300 hover:shadow-[0_0_10px_white]"
            ></textarea>
          </div>
          {/* Send Message Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 text-lg font-bold border border-white rounded-md bg-transparent hover:bg-white hover:text-black transition duration-300 hover:shadow-[0_0_20px_white]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
