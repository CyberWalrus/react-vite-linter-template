/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { StateCreator } from 'zustand';
import { create } from 'zustand';

export const createStore = <GState>(fn: StateCreator<GState>, name: string) => create(fn);
