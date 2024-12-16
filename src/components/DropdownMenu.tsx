import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DropdownMenuProps = {
  onChange: (value: string) => void;
  className?: string; // Add this line
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ onChange, className }) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger
        className={`${className} w-80 h-14 bg-transparent border border-white rounded-lg text-lg text-white focus:ring-2 focus:ring-white hover:ring-2 hover:ring-white hover:shadow-lg hover:shadow-white transition-all duration-300`}
      >
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent className="bg-black">
        <SelectItem
          value="video-link"
          className="hover:ring-2 hover:ring-white hover:shadow-lg hover:shadow-white transition-all duration-300 cursor-pointer"
        >
          Video Link
        </SelectItem>
        <SelectItem
          value="open-camera"
          className="hover:ring-2 hover:ring-white hover:shadow-lg hover:shadow-white transition-all duration-300 cursor-pointer"
        >
          Open Camera
        </SelectItem>
        <SelectItem
          value="video-selection"
          className="hover:ring-2 hover:ring-white hover:shadow-lg hover:shadow-white transition-all duration-300 cursor-pointer"
        >
          Video Selection
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default DropdownMenu;
