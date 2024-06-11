import { selector } from "recoil";
import { authAtom, authModalTypeAtom, authModalVisibilityAtom } from "./atom";

const selectAuthPayload = selector({
  key: 'selectAuthPayload',
  get: ({ get }) => {
    const payload = get(authAtom);
    return payload;
  }
})

const selectAuthModalType = selector({
  key: "selectAuthModalType",
  get: ({ get }) => {
    const type = get(authModalTypeAtom);
    return type ? type : '';
  }
});

const selectAuthModalVisibility = selector({
  key: "selectAuthModalVisibility",
  get: ({ get }) => {
    return get(authModalVisibilityAtom);
  }
});

export { selectAuthModalType, selectAuthPayload, selectAuthModalVisibility };