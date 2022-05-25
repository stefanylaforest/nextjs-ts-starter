export default interface CheckboxInputProps {
  name: string;
  label: string | React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  disabled?: boolean;
}
