import { throttle } from "lodash";

// Define a list of objects you want to trigger actions for
const objectList = ["person"]; // Add any objects you want here

export const renderPredictions = (predictions, ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const font = "16px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";

    predictions.forEach((prediction) => {
        const [x, y, width, height] = prediction.bbox;
        const isObjectInList = objectList.includes(prediction.class);

        // Render bounding box for all detected objects
        ctx.strokeStyle = getObjectColor(prediction.class, 0.5, isObjectInList); // Set color based on object list
        ctx.lineWidth = 6;
        ctx.strokeRect(x, y, width, height);

        // Fill effect for all detected objects
        ctx.fillStyle = getObjectColor(prediction.class, 0.2, isObjectInList); // Set fill color based on object list
        ctx.fillRect(x, y, width, height);

        // Draw confidence score for all detected objects
        const confidence = (prediction.score * 100).toFixed(1) + "%";
        ctx.fillStyle = getObjectColor(prediction.class, 1, isObjectInList);
        const labelText = `${prediction.class} (${confidence})`;
        const textWidth = ctx.measureText(labelText).width;
        const textHeight = parseInt(font, 10);
        ctx.fillRect(x, y, textWidth + 4, textHeight + 4);

        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(labelText, x, y);

        // Trigger effects (like sounds and special colors) for all objects in the objectList
        if (isObjectInList) {
            triggerEffects(prediction.class, ctx, x + width / 2, y + height / 2);
        }
    });
};

// Function to get the color for each object based on whether it's in the list or not
const getObjectColor = (object, alpha = 1, isInList = false) => {
    if (isInList) {
        return `rgba(255, 0, 0, ${alpha})`; // Red color for objects in the list
    }
    return `rgba(0, 0, 255, ${alpha})`; // Blue color for objects not in the list (or any other color)
};

// Custom audio playback for all objects
const playAudio = throttle(() => {
    try {
        const audio = new Audio("/1.mp3"); // Path relative to the public folder
        audio.play();
    } catch (error) {
        console.error("Error playing audio:", error);
    }
}, 4000);

// Burst effect for detected objects
const triggerBurstEffect = (ctx, centerX, centerY) => {
    const particles = 15;
    const maxRadius = 100;

    for (let i = 0; i < particles; i++) {
        const angle = (Math.PI * 2 * i) / particles;
        const radius = Math.random() * maxRadius;

        ctx.beginPath();
        ctx.arc(
            centerX + Math.cos(angle) * radius,
            centerY + Math.sin(angle) * radius,
            3,
            0,
            Math.PI * 2
        );
        ctx.fillStyle = `rgba(255, ${Math.random() * 255}, 0, 1)`;
        ctx.fill();
    }
};

// Trigger different effects for all objects in the objectList
const triggerEffects = (objectClass, ctx, centerX, centerY) => {
    playAudio(); // Play sound for any object in the list
    triggerBurstEffect(ctx, centerX, centerY); // Burst effect for any object in the list
};
