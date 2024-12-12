import { useLayoutStore } from '@/store/layoutStore';

export const useDialogLayout = () => {
  const { isOpen, setIsOpen } = useLayoutStore();

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close, setIsOpen };
};
