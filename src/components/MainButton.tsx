import React from "react";

type MainButtonProps = {
  option: string;
  inputValue: string;
  className?: string; // Add this line
};

const MainButton: React.FC<MainButtonProps> = ({
  option,
  inputValue,
  className,
}) => {
  const isDisabled = !inputValue && option !== "open-camera";

  return (
    <button
      className={`${className} w-80 h-14 bg-transparent border border-white rounded-lg text-white text-lg font-semibold 
          transition-all duration-300 ease-in-out
          ${isDisabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}
          hover:shadow-lg hover:shadow-white
          ${
            !isDisabled
              ? "hover:scale-105 hover:shadow-[0px_0px_15px_3px_rgba(255,255,255,0.7)]"
              : ""
          }`}
      disabled={isDisabled}
    >
      {option === "open-camera" ? "Open Camera" : "Submit"}
    </button>
  );
};

export default MainButton;
