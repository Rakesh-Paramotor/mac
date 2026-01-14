import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {locations} from "#constants/index.js";

const DEFUlT_LOCATION = locations.work;

const useLocationStore = create(
    immer((set) =>
        ({
    activeLocation: DEFUlT_LOCATION,

    setActiveLoaction: (location = null) => set((state) => {
        state.activeLocation = location;
    }),
    resetActiveLoaction: () => set((state) => {
        state.activeLocation = DEFUlT_LOCATION;
    }),
})));

export default useLocationStore;