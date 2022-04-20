export default interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: "submit" | "reset" | "button";
  isPrimary?: boolean;
  disabled?: boolean;
  isVisible?: boolean;
}
