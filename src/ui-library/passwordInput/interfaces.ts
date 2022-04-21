export default interface PasswordInputProps {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  maxLength?: number;
  requiredSymbol?: boolean;
}
