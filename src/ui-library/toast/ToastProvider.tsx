import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Toast from './toast';
import styles from './toast.module.scss';
import { ToastWithId, ToastContextType, BasicToast } from './interfaces';

const ToastContext = createContext<ToastContextType | null>(null);

const ToastProvider = ({ children }: any) => {
  const [toasts, setToasts] = useState<ToastWithId[]>([]);

  const activate = ({ message, type = 'info' }: BasicToast) => {
    setToasts([...toasts, { id: uuidv4(), message, type }]);
  };

  const removeToast = (id: string) => {
    const filteredToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(filteredToasts);
  };

  return (
    <ToastContext.Provider value={{ activate }}>
      {children}
      <div className={styles.toastWrapper}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            remove={removeToast}
            id={toast.id}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };
