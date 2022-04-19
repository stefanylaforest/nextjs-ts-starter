export default interface SelectProps {
  name: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  required?: boolean;
  label?: string;
  defaultValue?: string;
}
