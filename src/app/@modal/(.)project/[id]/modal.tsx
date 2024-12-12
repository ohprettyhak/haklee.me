/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';
import { FC, ReactElement, useEffect } from 'react';

import { useDialogLayout } from '@/hooks/useDialogLayout';

import * as styles from './styles.css';

const Modal: FC = (): ReactElement => {
  const router = useRouter();
  const { isOpen, open, close, setIsOpen } = useDialogLayout();

  useEffect(() => {
    open();
    return () => setIsOpen(false);
  }, []);

  const handleClose = () => {
    close();
    setTimeout(() => router.back(), 200);
  };

  return (
    <Dialog open={isOpen}>
      <DialogOverlay className={styles.overlay}>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
          <button onClick={handleClose}>Close</button>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default Modal;
