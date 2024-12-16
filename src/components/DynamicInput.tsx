import { Input } from "@/components/ui/input";

type DynamicInputProps = {
  option: string;
  value: string;
  onChange: (value: string) => void;
  className?: string; // Add this line
};

const DynamicInput: React.FC<DynamicInputProps> = ({
  option,
  value,
  onChange,
  className,
}) => {
  if (option === "video-link") {
    return (
      <Input
        type="text"
        placeholder="Enter video URL"
        className={`${className} w-80 h-14 bg-transparent text-lg text-white `}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  } else if (option === "video-selection") {
    return (
      <Input
        type="file"
        className={`${className} w-80 h-14 bg-transparent text-lg text-white cursor-pointer`}
        onChange={(e) => onChange(e.target.files?.[0]?.name || "")}
      />
    );
  }
  return null;
};

export default DynamicInput;
