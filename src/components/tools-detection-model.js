/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { renderToolsPredictions } from "../utils/render-predictions-tools";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { load as cocoSSDLoad } from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import { Home } from "lucide-react";

// List of objects to detect
const toolsList = [
    "traffic light", "fire hydrant", "stop sign", "parking meter", "bench",
    "backpack", "umbrella", "handbag", "suitcase", "frisbee",
    "sports ball", "baseball bat", "baseball glove", "skateboard", "surfboard",
    "tennis racket", "bottle", "wine glass", "cup", "fork", "knife",
    "spoon", "bowl", "scissors", "hair drier", "toothbrush", "remote",
    "keyboard", "cell phone", "microwave", "oven", "toaster", "sink",
    "refrigerator", "clock", "vase", "teddy bear"
];

const ToolsDetection = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [resolution, setResolution] = useState({ width: 320, height: 240 });
    const [detectionCount, setDetectionCount] = useState(0);
    const [timer, setTimer] = useState(0);
    const [overlayMessage, setOverlayMessage] = useState("No Object Detected");
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        let detectInterval;
        let timerInterval;

        const runCoco = async () => {
            try {
                setIsLoading(true);
                const net = await cocoSSDLoad();
                setIsLoading(false);

                detectInterval = setInterval(() => {
                    if (
                        webcamRef.current &&
                        webcamRef.current.video.readyState === 4 &&
                        canvasRef.current
                    ) {
                        const video = webcamRef.current.video;
                        const canvas = canvasRef.current;
                        canvas.width = resolution.width;
                        canvas.height = resolution.height;

                        const context = canvas.getContext("2d");
                        context.clearRect(0, 0, canvas.width, canvas.height);

                        net
                            .detect(video)
                            .then((predictions) => {
                                renderToolsPredictions(predictions, context);
                                const detectedObject = predictions.find((p) =>
                                    toolsList.includes(p.class)
                                );

                                if (detectedObject) {
                                    setDetectionCount((prevCount) => prevCount + 1);
                                    handleObjectDetection(detectedObject.class);
                                } else {
                                    // Update overlay message when no object is detected
                                    setOverlayMessage("No Object Detected");
                                }
                            })
                            .catch((error) => console.error("Detection error:", error));
                    }
                }, 100);

                timerInterval = setInterval(() => {
                    setTimer((prevTime) => prevTime + 1);
                }, 1000);
            } catch (error) {
                console.error("Model loading error:", error);
            }
        };

        runCoco();

        return () => {
            clearInterval(detectInterval);
            clearInterval(timerInterval);
        };
    }, [resolution]);

    const handleObjectDetection = (detectedObject) => {
        setOverlayMessage(`${detectedObject.charAt(0).toUpperCase() + detectedObject.slice(1)} Detected!`);

        // Trigger screenshot and email sending (to be implemented later)
        takeScreenshot(detectedObject);
    };

    const takeScreenshot = (detectedObject) => {
        // Placeholder function for taking a screenshot and sending an email
        console.log(`Taking screenshot of ${detectedObject}`);
        // Here you will trigger the email sending logic with the screenshot
    };

    const toggleOverlay = () => {
        setDetectionCount(0);
        setTimer(0);
        setOverlayMessage("No Object Detected");
    };

    const handleBackClick = () => {
        window.history.back();
    };

    return (
        <div className="detection-container">
            {/* Back Button */}
            <button
                onClick={handleBackClick}
                className="absolute top-8 left-8 flex items-center space-x-2 text-white hover:text-black transition duration-300 text-lg z-[1001]"
            >
                <Home size={24} className="text-white" /> {/* Home Icon */}
                <span className="relative">
                    <span className="underline decoration-transparent hover:decoration-white transition-all duration-300">
                        Back
                    </span>
                </span>
            </button>

            <button className="toggle-overlay-button" onClick={toggleOverlay}>
                Start Detection
            </button>

            <div className="background-blur"></div>

            <div className="overlay">
                <div className="overlay-content">
                    {isLoading ? (
                        <div className="loading-text">Loading AI Model...</div>
                    ) : (
                        <>
                            <div className="status-container">
                                <p className="status-text">{overlayMessage}</p>
                                <p className="status-info">Timer: {timer}s</p>
                            </div>

                            <div className="webcam-container">
                                <Webcam
                                    ref={webcamRef}
                                    className="webcam"
                                    muted
                                    videoConstraints={resolution}
                                />
                                <canvas ref={canvasRef} className="overlay-canvas" />
                            </div>
                        </>
                    )}
                    <div className="resolution-buttons">
                        <button onClick={() => setResolution({ width: 640, height: 480 })}>640x480</button>
                        <button onClick={() => setResolution({ width: 800, height: 600 })}>800x600</button>
                        <button onClick={() => setResolution({ width: 1280, height: 720 })}>1280x720</button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .detection-container {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    background: transparent;
                    color: #fff;
                    font-family: "Roboto", sans-serif;
                    overflow: hidden;
                }

                .background-blur {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(15px);
                    z-index: 999;
                }

                .toggle-overlay-button {
                    margin-bottom: 20px;
                    padding: 15px 30px;
                    border: 2px solid #fff;
                    background: transparent;
                    color: #fff;
                    border-radius: 25px;
                    cursor: pointer;
                    font-size: 1.2rem;
                    font-weight: bold;
                    transition: all 0.3s ease;
                    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
                }

                .toggle-overlay-button:hover {
                    background: #fff;
                    color: #141e30;
                    box-shadow: 0 0 20px #fff;
                }

                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    overflow-y: auto;
                }

                .overlay-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 30px;
                    border: 3px solid rgba(255, 255, 255, 0.8);
                    border-radius: 20px;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 0 30px rgba(255, 255, 255, 0.7);
                    animation: fadeIn 0.5s ease;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .status-container {
                    margin-bottom: 20px;
                }

                .status-text {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: ${detectionCount > 0 ? "#0f0" : "#f00"};
                }

                .status-info {
                    font-size: 1.2rem;
                    margin-top: 5px;
                }

                .webcam-container {
                    position: relative;
                    width: ${resolution.width}px;
                    height: ${resolution.height}px;
                    border: 3px solid #fff;
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 0 25px rgba(255, 255, 255, 0.8);
                }

                .webcam {
                    width: 100%;
                    height: 100%;
                    background: transparent;
                }

                .overlay-canvas {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }

                .resolution-buttons {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 15px;
                    margin-top: 20px;
                }

                .resolution-buttons button {
                    padding: 12px 25px;
                    border: 2px solid #fff;
                    background: transparent;
                    color: #fff;
                    border-radius: 10px;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: bold;
                    transition: all 0.3s ease;
                }

                .resolution-buttons button:hover {
                    background: #fff;
                    color: #141e30;
                    box-shadow: 0 0 15px #fff;
                }
            `}</style>
        </div>
    );
};

export default ToolsDetection;
