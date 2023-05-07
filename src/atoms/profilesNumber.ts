import { atom } from 'recoil';
/* import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  storage: window.localStorage,
  key: 'recoilOnboarded',
}); */

export const profileNumberState = atom<number>({
  key: 'onboardedState',
  default: 0,
  //effects_UNSTABLE: [persistAtom],
});
