import create from "zustand";

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  people: [],
  fetchPeople: async (page) => {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    set({ people: (await response.json()).results });
  },
}));
