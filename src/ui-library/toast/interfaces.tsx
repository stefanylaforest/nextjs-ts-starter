export interface BasicToast {
  message: string | React.ReactNode;
  type: 'info' | 'success' | 'error' | 'warning';
}

export interface ToastWithId extends BasicToast {
  id: string;
}

export interface ToastContextType {
  activate: ({ message, type }: BasicToast) => void;
}

export default interface ToastProps extends ToastWithId {
  remove: (key: string) => void;
}
