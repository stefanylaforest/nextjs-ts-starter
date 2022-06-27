type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  size?: 'large' | 'small';
} & ({ 
  variant: 'primary' | 'secondary' 
} | { 
  variant: 'icon'; ariaLabel: string 
}) & ({ 
  type?: 'reset' | 'button'; 
  onClick: () => void; 
} | { 
  type?: 'submit', 
  onClick?: () => void;
} );

export type Ref = HTMLButtonElement;

export default ButtonProps;
