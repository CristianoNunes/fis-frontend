import { TEInput } from "tw-elements-react";

export interface InputProps {
  id: string;
  label: string;
  name: string;
  type?: string;
  size?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  id,
  label,
  name,
  type = "text",
  size,
  value,
  onChange,
}: InputProps): JSX.Element {
  return (
    <TEInput
      type={type}
      id={id}
      name={name}
      label={label}
      size={size}
      value={value}
      onChange={onChange}
    ></TEInput>
  );
}
