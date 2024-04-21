import { atom } from "nanostores"

export const currentElementAtom = atom<HTMLElement | null>(null)