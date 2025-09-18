import type { ProfileType } from "../reducers/ProfileReducer";
export type ProfileAction = { type: "LOAD" } | { type: "UPDATE", payload: ProfileType };
