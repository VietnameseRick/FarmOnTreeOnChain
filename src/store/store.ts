import { create } from "zustand";
import { NetworkLayer } from "../dojo/createNetworkLayer";
import { PhaserLayer } from "../phaser";

export type Store = {
    networkLayer: NetworkLayer | null;
    phaserLayer: PhaserLayer | null;
    devMode: boolean;
};

export const store = create<Store>(() => ({
    networkLayer: null,
    phaserLayer: null,
    devMode: false,
}));

