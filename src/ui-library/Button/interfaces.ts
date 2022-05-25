type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  size?: 'large' | 'small';
} & ({ variant: 'primary' | 'secondary' } | { variant: 'icon'; ariaLabel: string });

export type Ref = HTMLButtonElement;

export default ButtonProps;
