export default interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "icon";
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  size?: "large" | "small";
  ariaLabel?: string | undefined;
}
