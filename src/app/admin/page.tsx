"use client";

import { Box, Text, Link } from "@chakra-ui/react";
import { Home } from "lucide-react";
import React from "react";

const AdminPage = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <Box
      className="min-h-screen bg-transparent text-white px-6 py-8 mt-16"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.85))",
        position: "relative",
      }}
    >
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="absolute top-8 left-8 flex items-center space-x-2 text-white hover:text-black transition duration-300 text-lg z-[1001]"
      >
        <Home size={24} className="text-white" />
        <span className="relative">
          <span className="underline decoration-transparent hover:decoration-white transition-all duration-300">
            Back
          </span>
        </span>
      </button>

      {/* Content Section */}
      <Box className="space-y-8">
        {/* Header Section */}
        <Box textAlign="center">
          <Text
            fontSize="6xl"
            fontWeight="extrabold"
            color="white"
            textTransform="uppercase"
            letterSpacing="wide"
            className="text-glow"
            style={{
              animation: "glow 1s ease-in-out infinite alternate",
              textShadow: "0 0 15px rgba(0, 255, 255, 0.7)",
            }}
          >
            Welcome to the Ultimate Admin Dashboard
          </Text>
          <Text
            fontSize="xl"
            color="gray.400"
            mt={4}
            className="text-glow"
            style={{
              animation: "glow 1.5s ease-in-out infinite alternate",
              textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
            }}
          >
            Where Technology Meets Creativity, Power, and Innovation
          </Text>
        </Box>

        {/* Main Content */}
        <Box className="text-center space-y-6">
          <Text fontSize="3xl" color="white" fontWeight="bold">
            Explore the Next Level of Surveillance Detection Technology
          </Text>
          <Text fontSize="lg" color="gray.300" maxWidth="700px" mx="auto">
            This dashboard provides an all-in-one interface to manage and
            monitor the AI-based Surveillance Detection System. Get access to
            the latest insights, datasets, and more, all designed to empower
            developers and researchers.
          </Text>

          {/* Detailed Information Section */}
          <Box className="mt-8 text-left max-w-4xl mx-auto">
            <Text fontSize="xl" color="gray.300" lineHeight="1.8">
              The admin dashboard provides an intuitive and powerful platform
              for managing surveillance data and leveraging machine learning
              models to detect unusual activities. From video uploads to
              real-time predictions, the system offers an end-to-end solution
              for surveillance professionals and researchers alike.
            </Text>
            <Text fontSize="xl" color="gray.300" mt={4} lineHeight="1.8">
              Whether you&apos;re a developer seeking to integrate cutting-edge
              AI technology or a researcher exploring new datasets, this
              dashboard gives you the tools and resources needed to drive
              innovation. Stay ahead of the curve with real-time updates and
              seamless data management.
            </Text>
          </Box>

          {/* Links Section */}
          <Box className="space-y-4 mt-8">
            <Link
              href="https://github.com/twonum/Project-Submission"
              //@ts-ignore
              isExternal
              fontSize="xl"
              color="white"
              border="2px solid white"
              p={2}
              borderRadius="md"
              _hover={{
                textDecoration: "none",
                borderColor: "white",
                transform: "scale(1.05)",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.7)",
              }}
              className="link-hover"
            >
              Explore the GitHub Repository
            </Link>
            <Link
              href="https://cocodataset.org/#overview"
              //@ts-ignore
              isExternal
              fontSize="xl"
              color="white"
              border="2px solid white"
              p={2}
              borderRadius="md"
              _hover={{
                textDecoration: "none",
                borderColor: "white",
                transform: "scale(1.05)",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.7)",
              }}
              className="link-hover"
            >
              Access the Dataset
            </Link>
            <Link
              href="https://www.linkedin.com/in/taha-saleem/"
              //@ts-ignore
              isExternal
              fontSize="xl"
              color="white"
              border="2px solid white"
              p={2}
              borderRadius="md"
              _hover={{
                textDecoration: "none",
                borderColor: "white",
                transform: "scale(1.05)",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.7)",
              }}
              className="link-hover"
            >
              Connect on LinkedIn
            </Link>
          </Box>
        </Box>

        {/* Footer */}
        <Box className="mt-12 text-center text-gray-400">
          <Text fontSize="sm">
            &copy; 2024 All Rights Reserved | Designed with Love by M TAHA
            SALEEM
          </Text>
        </Box>
      </Box>

      {/* Custom CSS for Glow Animation */}
      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 20px rgba(0, 255, 255, 0.7),
            0 0 40px rgba(0, 255, 255, 0.7);
        }
        .link-hover:hover {
          text-decoration: none;
          color: white;
          border-color: white;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
        }
        @keyframes glow {
          0% {
            text-shadow: 0 0 10px rgba(0, 255, 255, 0.7),
              0 0 20px rgba(0, 255, 255, 0.7);
          }
          100% {
            text-shadow: 0 0 30px rgba(0, 255, 255, 1),
              0 0 60px rgba(0, 255, 255, 1);
          }
        }
      `}</style>
    </Box>
  );
};

export default AdminPage;
