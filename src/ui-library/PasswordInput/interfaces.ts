type PasswordInputProps =
  | {
      value: string;
      name: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      placeholder?: string;
    } & (
      | { label?: undefined; requiredSymbol?: never }
      | { label: string; requiredSymbol?: boolean }
    );

export default PasswordInputProps;
