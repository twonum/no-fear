import { throttle } from "lodash";

const animalsList = [
    "bird", "cat", "dog", "horse", "sheep", "cow",
    "elephant", "bear", "zebra", "giraffe"
];

export const renderAnimalsPredictions = (predictions, ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const font = "16px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";

    predictions.forEach((prediction) => {
        const [x, y, width, height] = prediction.bbox;
        const isObjectInList = animalsList.includes(prediction.class);

        ctx.strokeStyle = getObjectColor(prediction.class, 0.5, isObjectInList);
        ctx.lineWidth = 6;
        ctx.strokeRect(x, y, width, height);

        ctx.fillStyle = getObjectColor(prediction.class, 0.2, isObjectInList);
        ctx.fillRect(x, y, width, height);

        const confidence = (prediction.score * 100).toFixed(1) + "%";
        const labelText = `${prediction.class} (${confidence})`;
        const textWidth = ctx.measureText(labelText).width;
        const textHeight = parseInt(font, 10);
        ctx.fillStyle = getObjectColor(prediction.class, 1, isObjectInList);
        ctx.fillRect(x, y, textWidth + 4, textHeight + 4);

        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(labelText, x, y);

        if (isObjectInList) {
            triggerEffects(prediction.class, ctx, x + width / 2, y + height / 2);
        }
    });
};

const getObjectColor = (object, alpha = 1, isInList = false) => {
    return isInList
        ? `rgba(255, 0, 0, ${alpha})`
        : `rgba(0, 0, 255, ${alpha})`;
};

const playAudio = throttle(() => {
    try {
        const audio = new Audio("/1.mp3");
        audio.play();
    } catch (error) {
        console.error("Error playing audio:", error);
    }
}, 4000);

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

const triggerEffects = (objectClass, ctx, centerX, centerY) => {
    playAudio();
    triggerBurstEffect(ctx, centerX, centerY);
};
