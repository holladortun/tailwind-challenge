import { atom } from 'recoil';

export const profileNumberState = atom<number>({
  key: 'onboardedState',
  default: 0,
});
