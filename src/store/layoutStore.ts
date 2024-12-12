import { create } from 'zustand';

type LayoutState = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useLayoutStore = create<LayoutState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
