/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import AnimalsDetection from "../../components/animals-detection-model";
import FoodDetection from "../../components/food-detection-model";
import FurnitureDetection from "../../components/furniture-detection-model";
import ObjectDetection from "../../components/object-detection";
import ToolsDetection from "../../components/tools-detection-model";
import VehicleDetection from "../../components/vehicles-detection-model";
import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SurveillanceConsole = () => {
  const [isDetectionActive, setIsDetectionActive] = useState(false);
  const [category, setCategory] = useState("");
  const [showEdiblesButton, setShowEdiblesButton] = useState(false);
  //@ts-ignore
  const handleCategorySelection = (selectedCategory) => {
    setCategory(selectedCategory);
    setIsDetectionActive(true);
  };

  return (
    <div className="surveillance-console">
      {!isDetectionActive ? (
        <div className="content-container">
          <h1 className="page-title">Surveillance Console</h1>
          <p className="intro-text">
            Welcome to the <strong>Surveillance Console</strong>—the heart of
            our real-time AI-powered detection system. Choose a category to
            start monitoring suspicious activities.
          </p>

          <div className="task-info">
            <h2 className="section-title">Current Tasks</h2>
            <div className="task-cards">
              {/* Task Card: Monitor People Movements */}
              <div className="task-card">
                <div className="task-icon">👥</div>
                <h3>Monitor People Movements</h3>
                <p>
                  Track individuals in monitored areas for unusual activity.
                </p>
                <div className="chart-container">
                  <CircularProgressbar
                    value={70}
                    text="70%"
                    styles={buildStyles({
                      pathColor: "#4caf50",
                      textColor: "white",
                      trailColor: "#ddd",
                    })}
                  />
                </div>
              </div>

              {/* Task Card: Track Vehicles */}
              <div className="task-card">
                <div className="task-icon">🚗</div>
                <h3>Track Vehicles in Restricted Areas</h3>
                <p>Monitor vehicles entering or exiting restricted zones.</p>
                <div className="chart-container">
                  <CircularProgressbar
                    value={50}
                    text="50%"
                    styles={buildStyles({
                      pathColor: "#f39c12",
                      textColor: "white",
                      trailColor: "#ddd",
                    })}
                  />
                </div>
              </div>

              {/* Task Card: Detect Unauthorized Tools */}
              <div className="task-card">
                <div className="task-icon">🛠️</div>
                <h3>Detect Unauthorized Tools</h3>
                <p>Detect the presence of unauthorized tools in the area.</p>
                <div className="chart-container">
                  <CircularProgressbar
                    value={40}
                    text="40%"
                    styles={buildStyles({
                      pathColor: "#e74c3c",
                      textColor: "white",
                      trailColor: "#ddd",
                    })}
                  />
                </div>
              </div>

              {/* Task Card: Animal Activity Surveillance */}
              <div className="task-card">
                <div className="task-icon">🐾</div>
                <h3>Animal Activity Surveillance</h3>
                <p>Monitor animal movements in the vicinity of the site.</p>
                <div className="chart-container">
                  <CircularProgressbar
                    value={60}
                    text="60%"
                    styles={buildStyles({
                      pathColor: "#3498db",
                      textColor: "white",
                      trailColor: "#ddd",
                    })}
                  />
                </div>
              </div>

              {/* Task Card: Food Theft Detection */}
              <div className="task-card">
                <div className="task-icon">🍕</div>
                <h3>Food Theft Detection</h3>
                <p>Detect suspicious activity related to food theft.</p>
                <div className="chart-container">
                  <CircularProgressbar
                    value={80}
                    text="80%"
                    styles={buildStyles({
                      pathColor: "#9b59b6",
                      textColor: "white",
                      trailColor: "#ddd",
                    })}
                  />
                </div>
              </div>

              {/* Task Card: Furniture Movement Tracking */}
              <div className="task-card">
                <div className="task-icon">🪑</div>
                <h3>Furniture Movement Tracking</h3>
                <p>
                  Track any unauthorized movement of furniture or equipment.
                </p>
                <div className="chart-container">
                  <CircularProgressbar
                    value={30}
                    text="30%"
                    styles={buildStyles({
                      pathColor: "#1abc9c",
                      textColor: "white",
                      trailColor: "#ddd",
                    })}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="button-container">
            <button
              className="category-button"
              onClick={() => handleCategorySelection("People")}
            >
              Human Detection
            </button>
            <button
              className="category-button"
              onClick={() => handleCategorySelection("Tools")}
            >
              Firearm Equipments
            </button>
            <button
              className="category-button"
              onClick={() => handleCategorySelection("Vehicles")}
            >
              Vehicles Detection
            </button>
            <button
              className="category-button"
              onClick={() => handleCategorySelection("Animals")}
            >
              Wild Animals
            </button>
            <button
              className="category-button"
              onClick={() => handleCategorySelection("Furniture")}
            >
              Valuable Ornaments
            </button>
            {/* More Detections Button */}
            <button
              className="more-detections-button"
              onClick={() => setShowEdiblesButton(!showEdiblesButton)}
            >
              {showEdiblesButton
                ? "Hide More Detections"
                : "Show More Detections"}
            </button>

            {showEdiblesButton && (
              <button
                className="category-button"
                onClick={() => handleCategorySelection("Food")}
              >
                Edibles Detection
              </button>
            )}
          </div>
        </div>
      ) : (
        <>
          {category === "Animals" && <AnimalsDetection />}
          {category === "Food" && <FoodDetection />}
          {category === "Furniture" && <FurnitureDetection />}
          {category === "Tools" && <ToolsDetection />}
          {category === "Vehicles" && <VehicleDetection />}
          {category === "People" && <ObjectDetection />}
        </>
      )}
      <style jsx>{`
        .surveillance-console {
          margin-top: 100px; /* Top margin to prevent overlap */
          padding: 20px;
          color: white;
          text-align: center;
          background: transparent;
          position: relative;
          overflow: hidden;
        }

        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 30px;
          border: 2px solid white;
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          background: rgba(0, 0, 0, 0.6);
          position: relative;
          z-index: 1;
        }

        .page-title {
          font-size: 4rem;
          margin-bottom: 20px;
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
        }

        .intro-text {
          font-size: 1.4rem;
          margin-bottom: 20px;
        }

        .task-info {
          margin-top: 40px;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 15px;
          text-decoration: underline;
        }

        .task-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .task-card {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 10px;
          text-align: left;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .task-card:hover {
          transform: scale(1.05) rotateY(10deg);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
        }

        .task-icon {
          font-size: 3.5rem;
          margin-bottom: 10px;
        }

        .chart-container {
          margin-top: 20px;
          width: 100px;
          height: 100px;
          margin: 0 auto;
        }

        .button-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 30px;
          gap: 15px; /* Add spacing between buttons */
        }

        .category-button {
          background: transparent;
          color: white;
          border: 2px solid white;
          padding: 12px 24px;
          font-size: 1.3rem;
          border-radius: 5px;
          cursor: pointer;
          width: 250px;
          transition: all 0.3s ease;
        }
        .more-detections-button {
          background: #ff9800; /* Unique orange color */
          color: black;
          border: 2px solid #ff9800;
          padding: 12px 24px;
          font-size: 1.3rem;
          border-radius: 5px;
          cursor: pointer;
          width: 250px;
          transition: all 0.3s ease;
        }

        .more-detections-button:hover {
          background: white;
          color: #ff9800;
          box-shadow: 0 0 10px #ff9800;
          transform: scale(1.05);
        }
        .category-button:hover {
          background: white;
          color: black;
          box-shadow: 0 0 10px white;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default SurveillanceConsole;
