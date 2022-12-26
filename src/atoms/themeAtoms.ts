import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const isDarkModeAtom = atomWithStorage<boolean>(
  'is-dark-mode-enabled',
  false,
);

export const isAppBlurredAtom = atom<boolean>(false);
