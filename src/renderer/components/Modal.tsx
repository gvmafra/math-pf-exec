import { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
}

export default function Modal({ children, isOpen }: ModalProps) {
  return (
    <div>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">{children}</div>
      )}
    </div>
  );
}
