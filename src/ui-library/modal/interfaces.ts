export default interface ModalProps {
  show: boolean;
  closeModal: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}
