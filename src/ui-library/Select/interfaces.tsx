export default interface SelectProps {
  options: string[];
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  label?: string;
  defaultValue?: string;
}
