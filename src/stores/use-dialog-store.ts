import { create } from "zustand";

type TDialogState = {
  dialog: { id: string | null; active: boolean };
  show: (id: string | null) => void;
  hide: () => void;
};

export const useDialogStore = create<TDialogState>()((set) => ({
  dialog: { id: null, active: false },
  show: (id) => set(() => ({ dialog: { id: id, active: true } })),
  hide: () => set(() => ({ dialog: { id: null, active: false } })),
}));
