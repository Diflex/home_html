import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

export const useCounter = create(
  devtools(
  persist(
  (set, get) => ({
    number: 0,
    increaseNum: () => set((state) => ({number: state.number + 1})),
    decreaseNum: () => set((state) => ({number: state.number - 1})),
    resetNum: () => set({number: 0})
  }),
  {
    name: 'numbername',
  })));