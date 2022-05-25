type RequireAtLeastOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>;
}[keyof T];

interface AvailableCardProps {
  header: string | React.ReactNode;
  body: string | React.ReactNode;
  footer: string | React.ReactNode;
}

type CardProps = RequireAtLeastOne<AvailableCardProps>;

export default CardProps;
