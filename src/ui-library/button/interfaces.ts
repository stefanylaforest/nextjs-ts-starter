export default interface ButtonProps {
  variant: string;
  children: React.ReactNode;
  onClick: () => void;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  isVisible?: boolean;
}
