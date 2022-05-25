export default interface NumberInputProps {
  name: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
  readonly?: boolean;
  step?: number;
}
