import { create } from "zustand";

export const usePackage = create((set) => ({
  internet: null,
  setInternet: (internet) => set((state) => ({ internet })),
  tv: null,
  setTv: (tv) => set((state) => ({ tv })),
  moreTv: null,
  setMoreTv: (moreTv) => set((state) => ({ moreTv })),
  isBlock: true,
  setIsBlock: () => set((state) => ({ isBlock: !state.isBlock })),
  phone: null,
  setPhone: (phone) => set((state) => ({ phone })),
  mobilePhone: null,
  setMobilePhone: (mobilePhone) => set((state) => ({ mobilePhone })),
}));
