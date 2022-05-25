export default interface TextInputProps {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
  readonly?: boolean;
}
