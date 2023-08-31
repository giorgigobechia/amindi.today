import { useTheme } from "next-themes";
import "../../styles/globals.css";

interface InputProps {
  type: "text" | "email" | "password" | "phone" | "number";
  value?: string;
  //   onChange: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
  isDisabled?: boolean;
  name?: string;
  id?: string;
  className?: string;
  outline?: string;
  min?: number;
  max?: number;
}
const NotificationInput = ({
  type,
  value,
  //   onChange,
  onBlur,
  placeholder,
  isDisabled,
  name,
  id,
  className,
  min,
  max,
}: InputProps) => {
  const { resolvedTheme } = useTheme();
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={isDisabled}
      //   onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      value={value}
      name={name}
      id={id}
      min={min}
      max={max}
      className={`${className} placeholder-black dark:placeholder-white border-black dark:border-white border-[1px] bg-transparent xxl:rounded-xl md:rounded-[10px] md:py-2 w-1/2 outline-none  md:pl-2 `}
    />
  );
};

export default NotificationInput;
